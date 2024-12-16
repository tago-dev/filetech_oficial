import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Privacy() {
    return (
        <div className="page-container">
            <div className="page-content">
                <h1>Política de Privacidade</h1>
                <div className="content-section">
                    <h2>1. Coleta de Dados</h2>
                    <p>
                        O FileTech coleta apenas as informações necessárias para o funcionamento
                        do serviço, incluindo:
                    </p>
                    <ul>
                        <li>Informações básicas sobre os arquivos enviados</li>
                        <li>Endereço IP do usuário</li>
                        <li>Data e hora do upload</li>
                    </ul>

                    <h2>2. Uso das Informações</h2>
                    <p>
                        As informações coletadas são utilizadas exclusivamente para:
                    </p>
                    <ul>
                        <li>Fornecer o serviço de compartilhamento de arquivos</li>
                        <li>Prevenir abusos e atividades ilegais</li>
                        <li>Melhorar a experiência do usuário</li>
                    </ul>

                    <h2>3. Armazenamento de Arquivos</h2>
                    <p>
                        Todos os arquivos são automaticamente excluídos após 24 horas do upload.
                        Não mantemos cópias ou backups dos arquivos após este período.
                    </p>

                    <h2>4. Compartilhamento de Dados</h2>
                    <p>
                        Não vendemos, compartilhamos ou divulgamos suas informações pessoais
                        para terceiros, exceto quando exigido por lei.
                    </p>

                    <h2>5. Cookies e Tecnologias Similares</h2>
                    <p>
                        Utilizamos cookies apenas para melhorar a funcionalidade do site.
                        Nenhuma informação pessoal é armazenada em cookies.
                    </p>
                </div>

                <div className="page-footer">
                    <Link to="/" className="back-button">Voltar para Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Privacy; 