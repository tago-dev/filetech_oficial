import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute; 