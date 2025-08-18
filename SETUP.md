# 🚀 Configuração do Memoriae

## 📋 Passo a Passo Completo

### 1. **Configurar Firebase Console**

#### 1.1 Acessar o Firebase Console
- Vá para: https://console.firebase.google.com/u/0/project/memoriae-9e001/overview
- Faça login com sua conta Google

#### 1.2 Habilitar Authentication
1. No menu lateral, clique em **Authentication**
2. Vá na aba **Sign-in method**
3. Clique em **Google**
4. Clique em **Enable** (Habilitar)
5. Configure o **Project support email** (seu email)
6. Clique em **Save** (Salvar)

#### 1.3 Adicionar Domínios Autorizados
1. Na mesma página de Authentication
2. Vá na aba **Settings** (Configurações)
3. Role para baixo até **Authorized domains**
4. Clique em **Add domain**
5. Adicione os seguintes domínios:
   - `localhost:3000`
   - `localhost:3001`
   - `localhost:3002`
   - `localhost:3003`
   - `localhost:3004`
   - `localhost:3005`
6. Clique em **Add** para cada um

### 2. **Obter Configurações do Firebase**

#### 2.1 Acessar Project Settings
1. No Firebase Console, clique no ícone de engrenagem ⚙️
2. Selecione **Project settings**

#### 2.2 Obter Configurações da Web App
1. Role para baixo até **Your apps**
2. Se não tiver uma web app, clique em **Add app** > **Web app**
3. Dê um nome como "Memoriae Web"
4. Clique em **Register app**
5. Copie as configurações que aparecem

### 3. **Configurar Variáveis de Ambiente**

#### 3.1 Criar arquivo .env.local
Crie um arquivo `.env.local` na raiz do projeto com:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key_aqui
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=memoriae-9e001.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=memoriae-9e001
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=memoriae-9e001.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id

# Admin Emails (emails autorizados para acessar o admin)
ADMIN_EMAILS=athilalexandre@gmail.com

# App Configuration
STORAGE_MODE=local
MAX_UPLOAD_MB=5

# Development Settings
NODE_ENV=development
```

### 4. **Instalar Dependências e Rodar**

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

### 5. **Testar a Aplicação**

1. Acesse: `http://localhost:3002` (ou a porta que aparecer)
2. Você será redirecionado para `/admin/login`
3. Clique em **"Entrar com Google"**
4. Use sua conta Google autorizada
5. Se tudo estiver configurado corretamente, você será redirecionado para `/admin/create`

### 6. **Troubleshooting**

#### Erro: "This app is not configured for OAuth"
- Verifique se o Google Sign-in está habilitado no Firebase Console
- Verifique se o domínio está na lista de domínios autorizados

#### Erro: "Unauthorized access"
- Verifique se seu email está na variável `ADMIN_EMAILS` no `.env.local`
- Reinicie o servidor após alterar o `.env.local`

#### Erro: "Module not found"
- Execute `npm install` para instalar dependências faltantes

### 7. **Deploy para Produção**

Quando for fazer deploy:

1. **Vercel (Recomendado):**
   - Conecte seu repositório GitHub ao Vercel
   - Adicione as variáveis de ambiente no dashboard do Vercel
   - Adicione seu domínio de produção aos domínios autorizados do Firebase

2. **Outros provedores:**
   - Configure as variáveis de ambiente
   - Adicione o domínio de produção aos domínios autorizados do Firebase

## ✅ Checklist de Configuração

- [ ] Firebase Authentication habilitado
- [ ] Google Sign-in habilitado
- [ ] Domínios localhost adicionados
- [ ] Arquivo `.env.local` criado
- [ ] Configurações do Firebase copiadas
- [ ] Dependências instaladas (`npm install`)
- [ ] Servidor rodando (`npm run dev`)
- [ ] Login funcionando
- [ ] Upload de fotos funcionando

## 🆘 Suporte

Se encontrar problemas:
1. Verifique o console do navegador (F12)
2. Verifique os logs do servidor
3. Confirme se todas as configurações estão corretas
4. Reinicie o servidor após alterações no `.env.local`
