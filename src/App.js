import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaCopy, FaCheck } from 'react-icons/fa';
import './App.css';
import TermsOfUse from './components/TermsOfUse';
import Privacy from './components/Privacy';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function Home() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Por favor, selecione um arquivo primeiro!');
      return;
    }

    setLoading(true);

    // Aqui você implementará a lógica de upload para seu backend
    // Por enquanto, vamos simular um upload com setTimeout
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Simulando uma URL retornada pelo servidor
      const fakeUrl = `https://filetech.com/share/${Math.random().toString(36).substring(7)}`;
      setFileUrl(fakeUrl);
    } catch (error) {
      alert('Erro ao fazer upload do arquivo!');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(fileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
  };

  return (
    <div className="App dark-theme">
      <header className="App-header">
        <div className="header-content">
          <h1>File<span className="accent">Tech</span></h1>
          <p>Compartilhe seus arquivos de forma simples e rápida</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Sair
        </button>
      </header>

      <main className="App-main">
        <div className="upload-container">
          <h2>Upload de Arquivo</h2>
          <div className="upload-area">
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
      </main>

      <footer className="App-footer">
        <div className="footer-content">
          <p>© 2024 FileTech. Todos os direitos reservados.</p>
          <div className="footer-links">
            <Link to="/terms">Termos de Uso</Link>
            <Link to="/privacy">Privacidade</Link>
            <a href="mailto:contato@filetech.com">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/terms"
          element={
            <ProtectedRoute>
              <TermsOfUse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/privacy"
          element={
            <ProtectedRoute>
              <Privacy />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
