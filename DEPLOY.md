# 🚀 Deploy no Vercel

## ✅ Status: Pronto para Deploy!

O projeto está completamente configurado e pronto para deploy no Vercel.

## 📋 Checklist de Preparação

- ✅ **Build funcionando** - `npm run build` executado com sucesso
- ✅ **Dependências limpas** - Firebase removido, apenas dependências essenciais
- ✅ **TypeScript configurado** - Sem erros de tipagem
- ✅ **Next.js 14** - Configuração otimizada
- ✅ **Arquivos de configuração** - `vercel.json` criado
- ✅ **Segurança** - Headers de segurança configurados
- ✅ **SEO** - `robots.txt` e `sitemap.xml` configurados

## 🚀 Passo a Passo para Deploy

### 1. **Conectar ao Vercel**

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**

### 2. **Importar Repositório**

1. Selecione o repositório `memoriae`
2. Clique em **"Import"**

### 3. **Configuração do Projeto**

O Vercel detectará automaticamente que é um projeto Next.js. Mantenha as configurações padrão:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (padrão)
- **Build Command:** `npm run build` (padrão)
- **Output Directory:** `.next` (padrão)
- **Install Command:** `npm install` (padrão)

### 4. **Variáveis de Ambiente (Opcional)**

Se quiser personalizar as credenciais de admin, adicione no Vercel:

```env
# Opcional - para personalizar credenciais
ADMIN_EMAIL=seu-email@exemplo.com
ADMIN_PASSWORD=sua-senha-segura
```

**Nota:** Se não adicionar, o sistema usará as credenciais padrão:
- Email: `admin@memoriae.com`
- Senha: `admin123`

### 5. **Deploy**

1. Clique em **"Deploy"**
2. Aguarde o build (deve levar 2-3 minutos)
3. O projeto será publicado automaticamente

## 🌐 URLs de Acesso

Após o deploy, você terá acesso a:

- **Site Principal:** `https://seu-projeto.vercel.app`
- **Admin Login:** `https://seu-projeto.vercel.app/admin/login`
- **Criar Experiência:** `https://seu-projeto.vercel.app/admin/create`

## 🔧 Configurações Técnicas

### **Região do Servidor**
- Configurado para **São Paulo (gru1)** para melhor performance no Brasil

### **Funções Serverless**
- **Timeout:** 30 segundos para uploads de fotos
- **Memória:** Automática baseada no uso

### **Cache e Performance**
- **Static Generation** para páginas principais
- **Image Optimization** automática
- **Edge Functions** para APIs

## 📱 Funcionalidades Disponíveis

### **Para Usuários Finais:**
- ✅ Página inicial responsiva
- ✅ Visualização de experiências
- ✅ Player de música integrado
- ✅ Galeria de fotos otimizada

### **Para Administradores:**
- ✅ Login seguro
- ✅ Upload de fotos (até 5MB cada)
- ✅ Criação de experiências
- ✅ Múltiplos layouts
- ✅ Integração com YouTube/Spotify

## 🔒 Segurança

- ✅ **Headers de segurança** configurados
- ✅ **Autenticação** por sessão
- ✅ **Validação de uploads** implementada
- ✅ **Rate limiting** automático do Vercel

## 📊 Monitoramento

Após o deploy, você pode monitorar:

- **Performance** no dashboard do Vercel
- **Logs** em tempo real
- **Analytics** de visitantes
- **Uptime** e disponibilidade

## 🆘 Troubleshooting

### **Se o deploy falhar:**

1. **Verifique os logs** no dashboard do Vercel
2. **Teste localmente** com `npm run build`
3. **Verifique as dependências** em `package.json`
4. **Confirme as variáveis de ambiente**

### **Se as fotos não carregarem:**

1. **Verifique o diretório** `public/uploads/`
2. **Confirme as permissões** de escrita
3. **Teste o upload** localmente primeiro

## 🎉 Pronto!

Seu projeto Memoriae está pronto para ser usado em produção! 

**Credenciais padrão:**
- **Email:** `admin@memoriae.com`
- **Senha:** `admin123`

---

**Desenvolvido com ❤️ por Athila Alexandre**
**Inspirado no projeto BioLove de David Aleixo**
