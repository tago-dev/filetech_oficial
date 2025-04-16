import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAutenticado } from '../lib/authService';

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        const verificarAutenticacao = async () => {
            const auth = await isAutenticado();
            setAutenticado(auth);
            setLoading(false);
        };

        verificarAutenticacao();
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Carregando...</p>
            </div>
        );
    }

    return autenticado ? children : <Navigate to="/login" />;
}

export default ProtectedRoute; 