import { createClient } from '@supabase/supabase-js';

// Substitua estas variáveis pelos valores reais do seu projeto Supabase
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://sua-url-supabase.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'sua-chave-anonima-supabase';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 