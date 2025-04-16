import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaUserPlus, FaEnvelope } from 'react-icons/fa';
import './Login.css';
import { loginUsuario, registrarUsuario, isAutenticado } from '../lib/authService';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        nome: '',
    });
    const [isRegistrando, setIsRegistrando] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar se o usuário já está autenticado
        const verificarAutenticacao = async () => {
            const autenticado = await isAutenticado();
            if (autenticado) {
                navigate('/');
            }
        };

        verificarAutenticacao();
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isRegistrando) {
                // Registrar
                if (!formData.nome) {
                    setError('Por favor, informe seu nome');
                    setLoading(false);
                    return;
                }

                const { error } = await registrarUsuario(formData.email, formData.password, formData.nome);

                if (error) {
                    throw error;
                }

                setError('');
                alert('Cadastro realizado com sucesso! Verifique seu email para confirmar o registro.');
                setIsRegistrando(false);
            } else {
                // Login
                const { data, error } = await loginUsuario(formData.email, formData.password);

                if (error) {
                    throw error;
                }

                // Armazena informações da sessão
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                navigate('/');
            }
        } catch (error) {
            setError(
                error.message === 'Invalid login credentials'
                    ? 'Email ou senha inválidos'
                    : error.message || 'Ocorreu um erro no processamento da requisição'
            );
        } finally {
            setLoading(false);
        }
    };

    const toggleFormMode = () => {
        setIsRegistrando(!isRegistrando);
        setError('');
        setFormData({
            email: '',
            password: '',
            nome: '',
        });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>File<span className="accent">Tech</span></h1>
                <h2>{isRegistrando ? 'Criar Conta' : 'Login'}</h2>

                <form onSubmit={handleSubmit}>
                    {isRegistrando && (
                        <div className="input-group">
                            <FaUserPlus className="input-icon" />
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome completo"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    <div className="input-group">
                        <FaEnvelope className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >
                        {loading
                            ? <span className="spinner-small"></span>
                            : isRegistrando ? 'Cadastrar' : 'Entrar'
                        }
                    </button>

                    <button
                        type="button"
                        className="toggle-form-button"
                        onClick={toggleFormMode}
                        disabled={loading}
                    >
                        {isRegistrando
                            ? 'Já possui conta? Faça login'
                            : 'Não tem conta? Cadastre-se'
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login; 