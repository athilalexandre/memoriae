# Memoriae

A beautiful and modern web application for creating and sharing memorable experiences with photos, messages, and music.

## ✨ Features

- 📸 Photo gallery with smooth transitions
- ✍️ Custom message display
- 🎵 Background music support
- 🎨 Multiple layout options
- 🔒 Secure admin authentication
- 🚀 Fast and modern tech stack
- 💾 Local storage for data persistence

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Dropzone** - File uploads
- **Local File System** - Data storage

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/athilalexandre/memoriae.git
   cd memoriae
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Usage

### Admin Access

1. Go to `/admin/login`
2. Use the default credentials:
   - **Email:** `admin@memoriae.com`
   - **Password:** `admin123`

### Creating Experiences

1. Login to the admin panel
2. Fill in the experience details:
   - Title
   - Message
   - Music URL (YouTube, Spotify, etc.)
   - Upload photos
   - Choose layout
3. Click "Create Experience"
4. Share the generated link

## 📁 Project Structure

```
memoriae/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin pages
│   ├── api/               # API routes
│   └── experience/        # Experience display pages
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication
│   ├── session.ts        # Session management
│   └── storage.ts        # Local file storage
├── public/               # Static assets
└── styles/               # Global styles
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# App Configuration
STORAGE_MODE=local
MAX_UPLOAD_MB=5

# Development Settings
NODE_ENV=development
```

### Customizing Admin Credentials

Edit `lib/auth.ts` to change the default admin credentials:

```typescript
const ADMIN_CREDENTIALS = {
  email: 'your-email@example.com',
  password: 'your-password'
};
```

## 📸 Photo Upload

- **Supported formats:** JPEG, PNG, GIF, WebP
- **Maximum size:** 5MB per photo
- **Storage:** Local file system

## 🎵 Music Support

- **YouTube URLs** - Full support
- **Spotify URLs** - Basic support
- **Other platforms** - May work depending on embed support

## 🎨 Layouts

- **Grid** - Photos in a grid format
- **Masonry** - Pinterest-style layout
- **Carousel** - Horizontal scrolling
- **Stack** - Vertical stacking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `.next` folder

## 🔒 Security

- Session-based authentication
- File upload validation
- Input sanitization
- Secure headers

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [Athila Alexandre](https://github.com/athilalexandre)
