import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Configure Google Generative AI with the new settings
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

app.use(express.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    console.log('Received message:', message);

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'paste your gemini api key here' || process.env.GEMINI_API_KEY === 'paste_your_gemini_api_key_here') {
      console.error('GEMINI_API_KEY is not properly configured');
      return res.json({ 
        response: `🤖 **Demo Mode Active** - API key not configured\n\nHello! I'm a Gemini AI-powered chatbot. Since this is demo mode, let me tell you what you can see in this application:\n\n✨ **Features visible:**\n- Modern glass-morphism UI design\n- Animated splash screen with AI avatar\n- Real-time chat interface\n- Smooth message animations\n- Responsive design for all devices\n- Loading indicators and error handling\n\n🛠️ **Technical implementation:**\n- Node.js backend with Express\n- Google Gemini AI integration\n- Tailwind CSS for styling\n- Vanilla JavaScript for interactions\n\nTo enable full AI functionality:\n1. Get your API key from https://aistudio.google.com/app/apikey\n2. Add it to the .env file\n3. Restart the server\n\nTry sending more messages to test the interface! 🚀`
      });
    }

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(message);
      const responseText = result.response.text();
      
      console.log('Response:', responseText);
      res.json({ response: responseText });
    } catch (modelError) {
      console.error('Model error:', modelError);
      
      // Check if it's a network connectivity issue
      if (modelError.message.includes('fetch failed') || modelError.message.includes('ENOTFOUND')) {
        return res.json({ 
          response: 'I apologize, but I\'m currently experiencing connectivity issues. This might be due to network restrictions or the AI service being temporarily unavailable.\n\n🔧 **Demo Mode**: Since you\'re testing the application, here\'s what I can tell you about myself:\n\nI\'m a Gemini AI-powered chatbot built with:\n- Node.js & Express backend\n- Modern responsive UI with Tailwind CSS\n- Real-time chat interface\n- Glass-morphism design effects\n- Animated loading states\n\nTo enable full AI functionality, please:\n1. Get an API key from https://aistudio.google.com/app/apikey\n2. Add it to your .env file\n3. Restart the server\n\nTry asking me more questions to see the interface in action!'
        });
      }
      
      // Check if it's an API key issue
      if (modelError.message.includes('API key') || modelError.message.includes('authentication')) {
        return res.json({ 
          response: 'There seems to be an authentication issue with the AI service. Please check the API key configuration.'
        });
      }
      
      // Generic error response
      res.json({ 
        response: 'I encountered an error while processing your request. Please try again with a different message.'
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Server error',
      response: 'An unexpected server error occurred. Please try again.'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Using API key:', process.env.GEMINI_API_KEY ? 'Set' : 'Not set');
});