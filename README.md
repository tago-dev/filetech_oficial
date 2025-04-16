# FileTech - Compartilhamento Simples de Arquivos

![FileTech Logo](public/logo192.png)

FileTech é uma aplicação web moderna para compartilhamento rápido e fácil de arquivos, desenvolvida com React e design moderno em tema escuro.

## 🚀 Funcionalidades

- 📤 Upload de arquivos com interface drag-and-drop
- 🔗 Geração de links compartilháveis
- 👤 Sistema de autenticação de usuários
- 🌙 Design moderno com tema escuro
- 📱 Interface responsiva
- 🔒 Proteção de rotas
- ⚡ Feedback visual em tempo real

## 🛠️ Tecnologias Utilizadas

- React.js
- React Router DOM
- React Icons
- LocalStorage para autenticação
- CSS Moderno com Variáveis
- Gradient Design

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/tago-dev/filetech_oficial.git
```

2. Entre no diretório:
```bash
cd filetech_oficial
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto:
```bash
npm start
```

## 💻 Como Usar

1. Acesse a aplicação
2. Faça login ou crie uma nova conta
3. Na página principal, arraste um arquivo ou clique para selecionar
4. Clique em "Enviar arquivo"
5. Copie o link gerado para compartilhar

## 🔐 Autenticação

Para fins de teste, a aplicação utiliza localStorage para simular um sistema de autenticação. Em produção, recomenda-se implementar um backend seguro.

### Dados Armazenados:
- Email do usuário
- Senha (não recomendado para produção)
- ID do usuário
- Token de sessão

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🎨 Tema

O tema escuro utiliza as seguintes cores principais:
```css
--bg-primary: #1a1a1a
--bg-secondary: #252525
--bg-tertiary: #2d2d2d
--accent-color: #00b4d8
--text-primary: #ffffff
--text-secondary: #b3b3b3
```

## 🔄 Próximas Atualizações

- [ ] Implementação de backend real
- [ ] Sistema de preview de arquivos
- [ ] Progresso real do upload
- [ ] Limite de tamanho de arquivo
- [ ] Sistema de expiração de links
- [ ] Histórico de uploads

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFuncionalidade`)
3. Faça o Commit das suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça o Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📞 Contato

- Email: tago.dev@pm.me
- Website: em breve
- GitHub: [tago-dev](https://github.com/tago-dev)

## ⚠️ Aviso

Esta é uma versão de demonstração e não deve ser usada em produção sem as devidas modificações de segurança e implementação de um backend apropriado.

## 📝 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### `npm test`

Inicia o executor de teste no modo de observação interativo.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

## Configuração do Supabase

Este projeto utiliza o [Supabase](https://supabase.io/) como banco de dados e serviço de autenticação. Siga os passos abaixo para configurar:

1. Crie uma conta no [Supabase](https://app.supabase.io/)
2. Crie um novo projeto
3. No painel do projeto, vá para Settings > API
4. Copie a URL do projeto e a chave anônima
5. No arquivo `.env.local` na raiz do projeto (crie se não existir), adicione:

```
REACT_APP_SUPABASE_URL=sua-url-supabase
REACT_APP_SUPABASE_ANON_KEY=sua-chave-anonima-supabase
```

6. Substitua os valores pelas suas credenciais do Supabase
7. Reinicie o servidor de desenvolvimento

### Tabelas necessárias no Supabase

O Supabase já vem com a tabela `auth.users` para gerenciar usuários. Não é necessário criar tabelas adicionais para este projeto básico de autenticação.

### Habilitar autenticação por email/senha

1. No painel do Supabase, vá para Authentication > Providers
2. Verifique se Email está habilitado
3. Configure as opções de acordo com suas necessidades (confirmação de email, etc.)

---

Desenvolvido com ❤️ por Tiago Bettega

