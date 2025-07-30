# Gemini AI Chat Interface

A modern, responsive chat interface that integrates with Google's Gemini AI. This project features a sleek design with smooth animations, a splash screen, and real-time chat functionality.

![Gemini Chat Interface](https://github.com/user-attachments/assets/7f921b5d-4e75-4719-bed3-ca6df12ea1c9)

## What You Can See

This repository contains a full-featured AI chatbot application with:

### 🎨 **Visual Features**
- **Modern UI Design**: Glass-morphism effects with gradient backgrounds
- **Animated Splash Screen**: Centered AI avatar with smooth transitions
- **Real-time Chat Interface**: User and AI message bubbles with animations
- **Loading States**: Animated spinners and smooth transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

![Demo with Error Handling](https://github.com/user-attachments/assets/609a1b5e-7182-4a7d-b15d-370154c13bce)

### ⚡ **Technical Implementation**
- **Backend**: Node.js with Express server
- **AI Integration**: Google Gemini 2.0 Flash Lite model
- **Frontend**: Vanilla JavaScript with Tailwind CSS
- **Error Handling**: Graceful fallbacks and user-friendly error messages
- **Demo Mode**: Works without API key for testing the interface

### 🔧 **Robust Error Handling**
- Network connectivity issue detection
- API configuration validation
- User-friendly error messages
- Fallback styling when CDN fails
- Demo mode for testing without API key

## Features

- 🎨 Modern UI with gradient effects and glass-morphism design
- 🌟 Animated splash screen with centered AI avatar
- 💬 Real-time chat interface with user and AI messages
- ⚡ Smooth transitions and loading states
- 🎯 Responsive design that works on all devices
- 🔄 Dynamic message handling with loading indicators
- 🎭 Custom styling using Tailwind CSS
- 🛡️ Comprehensive error handling and fallback modes
- 🔧 Demo mode for testing without API configuration

## Technologies Used

- **HTML5** - Semantic markup and structure
- **Tailwind CSS** - Utility-first CSS framework with fallback styles
- **JavaScript (Vanilla)** - Client-side interactions and API calls
- **Node.js** - Server runtime environment
- **Express.js** - Web application framework
- **Google Gemini AI API** - AI-powered conversation engine

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Google Gemini AI API key (optional for demo mode)

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Chamidu0423/Gemini-chat.git
cd Gemini-chat/Gemini-project
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment (Optional for demo):**
   - Copy `env` to `.env`
   - Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Add your API key to `.env`:
```env
GEMINI_API_KEY=your_actual_api_key_here
```

4. **Start the development server:**
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Demo Mode

The application includes a demo mode that works without an API key! You can:
- Test the complete user interface
- See all animations and interactions
- Experience the chat flow with demo responses
- Verify responsive design on different devices

Simply start the server without configuring an API key to try demo mode.

## Project Structure

```
Gemini-project/
├── public/
│   ├── index.html          # Main application interface
│   └── src/
│       └── Ai.gif          # AI avatar animation
├── server.js               # Express server with AI integration
├── package.json            # Dependencies and scripts
├── env                     # Environment template
└── README.md              # This file
```

## API Configuration

To enable full AI functionality:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create or sign in to your Google account
3. Generate a new API key
4. Copy the API key to your `.env` file
5. Restart the server

## Error Handling

The application includes comprehensive error handling for:
- **Network Issues**: Graceful fallback messages
- **API Configuration**: Clear setup instructions
- **CDN Failures**: Fallback CSS styles
- **Server Errors**: User-friendly error responses

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [Chamidu Dilshan](https://github.com/Chamidu0423) 
