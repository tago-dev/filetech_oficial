import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TermsOfUse from './components/TermsOfUse';
import Privacy from './components/Privacy';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FileUpload from './components/FileUpload';
import { logoutUsuario, getUsuarioAtual } from './lib/authService';

function Home() {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const carregarUsuario = async () => {
      const { user } = await getUsuarioAtual();
      if (user?.user_metadata?.nome) {
        setUserName(user.user_metadata.nome);
      }
    };

    carregarUsuario();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logoutUsuario();
      localStorage.removeItem('currentUser');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App dark-theme">
      <header className="App-header">
        <div className="header-content">
          <h1>File<span className="accent">Tech</span></h1>
          <p>Compartilhe seus arquivos de forma simples e rápida</p>
        </div>
        <div className="user-controls">
          {userName && <span className="user-name">Olá, {userName}</span>}
          <button
            onClick={handleLogout}
            className="logout-button"
            disabled={loading}
          >
            {loading ? <span className="spinner-small"></span> : 'Sair'}
          </button>
        </div>
      </header>

      <main className="App-main">
        <FileUpload />
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
