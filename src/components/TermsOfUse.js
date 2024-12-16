import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function TermsOfUse() {
    return (
        <div className="page-container">
            <div className="page-content">
                <h1>Termos de Uso</h1>
                <div className="content-section">
                    <h2>1. Aceitação dos Termos</h2>
                    <p>
                        Ao acessar e usar o FileTech, você concorda em cumprir estes Termos de Uso.
                        Se você não concordar com qualquer parte destes termos, não deverá usar nosso serviço.
                    </p>

                    <h2>2. Descrição do Serviço</h2>
                    <p>
                        O FileTech é uma plataforma de compartilhamento de arquivos que permite aos usuários
                        fazer upload e compartilhar arquivos de forma temporária através de links únicos.
                    </p>

                    <h2>3. Uso Aceitável</h2>
                    <ul>
                        <li>Você não deve fazer upload de conteúdo ilegal ou prejudicial</li>
                        <li>O tamanho máximo permitido por arquivo é de 10MB</li>
                        <li>Os arquivos são automaticamente excluídos após 24 horas</li>
                        <li>Não é permitido o uso do serviço para spam ou atividades maliciosas</li>
                    </ul>

                    <h2>4. Limitação de Responsabilidade</h2>
                    <p>
                        O FileTech não se responsabiliza por quaisquer arquivos perdidos ou danificados
                        durante o processo de upload ou armazenamento.
                    </p>

                    <h2>5. Modificações dos Termos</h2>
                    <p>
                        Reservamos o direito de modificar estes termos a qualquer momento.
                        Alterações significativas serão notificadas aos usuários.
                    </p>
                </div>

                <div className="page-footer">
                    <Link to="/" className="back-button">Voltar para Home</Link>
                </div>
            </div>
        </div>
    );
}

export default TermsOfUse; 