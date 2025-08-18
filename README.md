# Memoriae

Uma aplicação web moderna e bonita para criar e compartilhar experiências memoráveis com fotos, mensagens e música.

## ✨ Features

- 🎵 Suporte a música de fundo (YouTube, Spotify, etc.)
- 🎨 Múltiplas opções de layout
- 📸 Upload de fotos com preview
- 💾 Armazenamento local para persistência de dados
- 🚀 Interface moderna e responsiva
- ⚡ Acesso direto à criação de experiências

## 🛠️ Tech Stack

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Dropzone** - Upload de arquivos
- **Sistema de Arquivos Local** - Armazenamento de dados

## 🚀 Getting Started

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/athilalexandre/memoriae.git
   cd memoriae
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra seu navegador**
   Navegue para `http://localhost:3000`

## 📝 Como Usar

### Criando Experiências

1. **Acesse a página inicial**
   - Vá para `http://localhost:3000`
   - Clique em "Entrar"

2. **Preencha os detalhes da experiência:**
   - **Título** - Nome da experiência
   - **Mensagem** - Texto personalizado (até 1000 caracteres)
   - **URL da Música** - Link do YouTube, Spotify, etc.
   - **Fotos** - Arraste e solte ou clique para selecionar
   - **Layout** - Escolha entre Grid, Masonry, Carousel ou Stack

3. **Clique em "Criar Experiência"**
4. **Compartilhe o link gerado**

### Visualizando Experiências

- Acesse o link gerado
- A experiência será exibida automaticamente
- A música começará a tocar (se configurada)
- As fotos serão exibidas no layout escolhido

## 📁 Estrutura do Projeto

```
memoriae/
├── app/                    # Next.js App Router
│   ├── admin/             # Páginas administrativas
│   ├── api/               # Rotas da API
│   └── experience/        # Páginas de exibição de experiências
├── lib/                   # Funções utilitárias
│   ├── auth.ts           # Sistema de autenticação simples
│   ├── session.ts        # Gerenciamento de sessão
│   └── storage.ts        # Armazenamento local de arquivos
├── public/               # Assets estáticos
└── styles/               # Estilos globais
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Configuração da Aplicação
STORAGE_MODE=local
MAX_UPLOAD_MB=5

# Configurações de Desenvolvimento
NODE_ENV=development
```

### Personalizando Credenciais de Admin (Opcional)

Edite `lib/auth.ts` para alterar as credenciais padrão:

```typescript
const ADMIN_CREDENTIALS = {
  email: 'seu-email@exemplo.com',
  password: 'sua-senha'
};
```

## 📸 Upload de Fotos

- **Formatos suportados:** JPEG, PNG, GIF, WebP
- **Tamanho máximo:** 5MB por foto
- **Armazenamento:** Sistema de arquivos local

## 🎵 Suporte a Música

- **URLs do YouTube** - Suporte completo
- **URLs do Spotify** - Suporte básico
- **Outras plataformas** - Podem funcionar dependendo do suporte de embed

## 🎨 Layouts Disponíveis

- **Grid** - Fotos em formato de grade
- **Masonry** - Layout estilo Pinterest
- **Carousel** - Rolagem horizontal
- **Stack** - Empilhamento vertical

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte seu repositório ao Vercel
3. Deploy automático

### Outras Plataformas

1. Build do projeto: `npm run build`
2. Inicie o servidor de produção: `npm start`
3. Deploy da pasta `.next`

## 🔒 Segurança

- Autenticação baseada em sessão
- Validação de uploads de arquivos
- Sanitização de inputs
- Headers de segurança

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça suas alterações
4. Envie um pull request

## 📞 Suporte

Se você tiver dúvidas ou precisar de ajuda, abra uma issue no GitHub.

---

Feito com ❤️ por [Athila Alexandre](https://github.com/athilalexandre)

Inspirado no projeto [BioLove](https://github.com/Crawfordcorp/BioLove) de [David Aleixo](https://github.com/Crawfordcorp)
