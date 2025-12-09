# MasterOne - AI-Powered Startup Mentorship Platform

MasterOne is an AI-powered platform designed to provide personalized book summaries and tailored advice for startup founders and small business owners. Leverage insights from top books, articles, and expert knowledge to solve your business challenges, make informed decisions, and accelerate your success.

## 🚀 Features

- **AI-Powered Chat**: Get personalized startup advice powered by AI
- **Book Summaries**: Access curated summaries of essential business books
- **User Dashboard**: Manage your chats, preferences, and learning journey
- **Admin Panel**: Comprehensive admin tools for content management
- **Responsive Design**: Optimized for all devices
- **Secure Authentication**: Powered by Clerk

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **Database**: MongoDB with Mongoose
- **State Management**: TanStack Query
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **File Upload**: UploadThing

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- MongoDB database
- Clerk account
- UploadThing account

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd masterone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```

   Required environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `MONGODB_URI`
   - `UPLOADTHING_SECRET`
   - `UPLOADTHING_APP_ID`
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_APP_URL`

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── dashboard/         # User dashboard
│   ├── api/               # API routes
│   └── ...                # Other pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header/           # Header component
│   ├── footer/           # Footer component
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── api-client.ts    # Centralized API client
│   ├── constants.ts     # App constants
│   ├── logger.ts        # Logging utility
│   └── utils.ts         # Helper functions
├── types/               # TypeScript type definitions
└── utils/               # Additional utilities
```

## 🔐 Security Features

- Secure authentication with Clerk
- Protected API routes
- Role-based access control (Admin/User)
- Security headers configured
- HTTPS enforcement in production
- XSS protection
- CSRF protection

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The application can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Environment Variables

See `.env.example` for a complete list of required environment variables.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🐛 Bug Reports

If you discover a bug, please create an issue on GitHub with:
- A clear description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

## 📧 Support

For support, email support@masterone.com or join our community forum.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

Built with ❤️ by the MasterOne Team