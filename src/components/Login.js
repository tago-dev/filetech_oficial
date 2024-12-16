import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Verificar se o usuário já existe
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === formData.email);

        if (user && user.password === formData.password) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/');
        } else {
            setError('Email ou senha inválidos');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError('Preencha todos os campos');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.some(user => user.email === formData.email)) {
            setError('Este email já está cadastrado');
            return;
        }

        const newUser = {
            id: Date.now(),
            email: formData.email,
            password: formData.password,
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>File<span className="accent">Tech</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
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
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="login-button">
                        Entrar
                    </button>

                    <button
                        type="button"
                        className="register-button"
                        onClick={handleRegister}
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login; 