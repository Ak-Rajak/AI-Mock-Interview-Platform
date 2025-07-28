# AI-Mock-Interview-Platform

An intelligent, AI-powered interview preparation platform that helps you practice and improve your interview skills with real-time feedback and personalized insights.

![AI Mock Interview Platform](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Firebase](https://img.shields.io/badge/Firebase-10.x-orange)
![AI Powered](https://img.shields.io/badge/AI-Google%20Gemini-green)

## 🚀 Live Demo

🌐 **[Try the Platform Live](https://ai-interview-project-react.web.app)**

## ✨ Key Features

### 1️⃣ **Login & Registration**
- 🔐 Secure authentication powered by **Clerk**
- 📧 Email/password and social login options
- 👤 User profile management

### 2️⃣ **Create Custom Interviews**
- 🎯 Choose your field and job position
- 📝 Customize interview questions
- ⚙️ AI preferences configuration
- 🏷️ Technology stack selection

### 3️⃣ **AI-Powered Analysis**
- 🤖 Intelligent answer evaluation using **Google Gemini AI**
- 📊 Performance ratings (1-10 scale)
- 💡 Personalized improvement suggestions
- 🎯 Technical accuracy assessment

### 4️⃣ **Speech-to-Text Feedback**
- 🎤 Voice recording capabilities
- 📝 Real-time speech-to-text conversion
- 🔄 Re-record answers functionality
- 💬 Instant AI feedback generation

### 5️⃣ **Real-Time Database**
- 🔥 **Firebase Firestore** for data storage
- 📈 User progress tracking
- 🔄 Real-time synchronization
- 💾 Secure data persistence

### 6️⃣ **Beautiful UI**
- 🎨 Modern, responsive design with **Shadcn UI**
- 📱 Mobile-first approach
- 🌙 Clean and intuitive interface
- ⚡ Lightning-fast performance

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Authentication** | Clerk |
| **Database** | Firebase Firestore |
| **AI Integration** | Google Gemini AI |
| **Speech Recognition** | Web Speech API |
| **Deployment** | Firebase Hosting |
| **Package Manager** | pnpm |


## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Firebase account
- Google AI Studio account (for Gemini API)
- Clerk account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/AI-Mock-Interview-Platform.git
cd AI-Mock-Interview-Platform/ai-mock-interview-platform
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Google Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key

# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

4. **Run the development server**
```bash
pnpm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
ai-mock-interview-platform/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── FormMockInterview.tsx
│   │   ├── RecordAnswer.tsx
│   │   └── ...
│   ├── Routes/             # Page components
│   │   ├── Dashboard.tsx
│   │   ├── MockInterviewPage.tsx
│   │   ├── FeedBack.tsx
│   │   └── ...
│   ├── layouts/            # Layout components
│   ├── config/             # Configuration files
│   ├── scripts/            # AI integration scripts
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── public/                 # Static assets
└── ...
```

## 🔥 Features in Detail

### Interview Creation Flow
1. **Job Details**: Enter position, description, experience level
2. **Tech Stack**: Specify technologies you'll be interviewed on
3. **AI Generation**: Gemini AI creates personalized questions
4. **Review & Edit**: Modify questions before starting

### Interview Experience
1. **Webcam Setup**: Optional video recording
2. **Voice Recording**: Speech-to-text answer capture
3. **Real-time Feedback**: Instant AI analysis
4. **Progress Tracking**: Save and review answers

### Feedback System
1. **Detailed Analysis**: Question-by-question breakdown
2. **Rating System**: 1-10 performance scores
3. **Improvement Tips**: AI-generated suggestions
4. **Progress History**: Track improvement over time


## 🚀 Deployment

### Firebase Hosting
```bash
# Build the project
pnpm run build

# Deploy to Firebase
firebase deploy
```

### Vercel (Alternative)
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent answer analysis
- **Clerk** for seamless authentication
- **Firebase** for reliable backend services
- **Shadcn UI** for beautiful, accessible components
- **Lucide React** for stunning icons

## 📞 Contact

- **Project Link**: [https://github.com/Ak-Rajak/AI-Mock-Interview-Platform](https://github.com/Ak-rajak/AI-Mock-Interview-Platform)
- **Live Demo**: [https://ai-interview-project-react.web.app](https://ai-interview-project-react.web.app)

---

<div align="center">
  <p>Made with ❤️ for better interview preparation</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>