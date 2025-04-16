import { supabase } from './supabaseClient';

// Registrar um novo usuário
export const registrarUsuario = async (email, senha, nome) => {
    try {
        // Registrar o usuário no Supabase
        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha,
            options: {
                data: {
                    nome: nome
                }
            }
        });

        if (error) throw error;
        return { data, error: null };
    } catch (error) {
        console.error('Erro ao registrar:', error);
        return { data: null, error };
    }
};

// Login de usuário
export const loginUsuario = async (email, senha) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: senha
        });

        if (error) throw error;
        return { data, error: null };
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return { data: null, error };
    }
};

// Logout de usuário
export const logoutUsuario = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        return { error: null };
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        return { error };
    }
};

// Obter o usuário atual
export const getUsuarioAtual = async () => {
    try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        return { user: data.user, error: null };
    } catch (error) {
        console.error('Erro ao buscar usuário atual:', error);
        return { user: null, error };
    }
};

// Verificar se o usuário está autenticado
export const isAutenticado = async () => {
    try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        return !!session;
    } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        return false;
    }
};

// Redefinir senha
export const redefinirSenha = async (email) => {
    try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        return { error: null };
    } catch (error) {
        console.error('Erro ao redefinir senha:', error);
        return { error };
    }
}; 