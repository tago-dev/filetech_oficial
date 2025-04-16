import React, { useState } from 'react';
import { FaCloudUploadAlt, FaCopy, FaCheck } from 'react-icons/fa';
import './FileUpload.css';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB em bytes

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        validateAndSetFile(selectedFile);
    };

    const validateAndSetFile = (selectedFile) => {
        setUploadError('');
        if (!selectedFile) return;

        if (selectedFile.size > MAX_FILE_SIZE) {
            setUploadError(`O arquivo excede o tamanho máximo de 10MB (Tamanho atual: ${(selectedFile.size / (1024 * 1024)).toFixed(2)}MB)`);
            return;
        }

        setFile(selectedFile);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadError('Por favor, selecione um arquivo primeiro!');
            return;
        }

        setLoading(true);
        setUploadError('');

        try {
            // Aqui você implementaria a lógica real de upload para seu backend
            // Por enquanto, vamos simular um upload com um atraso
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Simulando uma URL retornada pelo servidor
            const fakeUrl = `https://filetech.com/share/${Math.random().toString(36).substring(7)}`;
            setFileUrl(fakeUrl);
        } catch (error) {
            setUploadError('Erro ao fazer upload do arquivo! Tente novamente.');
            console.error('Erro de upload:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCopyClick = async () => {
        await navigator.clipboard.writeText(fileUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="upload-container">
            <h2>Upload de Arquivo</h2>
            <div
                className={`upload-area ${dragActive ? 'drag-active' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="file-input"
                    id="file-input"
                />
                <label htmlFor="file-input" className="file-label">
                    <FaCloudUploadAlt className="upload-icon" />
                    <span>{file ? file.name : 'Arraste seu arquivo ou clique aqui'}</span>
                    <small>Tamanho máximo: 10MB</small>
                </label>

                {uploadError && <div className="error-message">{uploadError}</div>}

                <button
                    onClick={handleUpload}
                    disabled={!file || loading}
                    className="upload-button"
                >
                    {loading ? (
                        <>
                            <span className="spinner"></span>
                            <span>Enviando...</span>
                        </>
                    ) : (
                        'Enviar arquivo'
                    )}
                </button>
            </div>

            {fileUrl && (
                <div className="url-container">
                    <h3>Link gerado com sucesso!</h3>
                    <div className="url-wrapper">
                        <input
                            type="text"
                            value={fileUrl}
                            readOnly
                            className="url-input"
                        />
                        <button
                            onClick={handleCopyClick}
                            className={`copy-button ${copied ? 'copied' : ''}`}
                            title={copied ? 'Copiado!' : 'Copiar URL'}
                        >
                            {copied ? <FaCheck /> : <FaCopy />}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FileUpload; 