# 💬 SyncChat

A full-stack real-time chat application built as a side project to practice and implement modern full-stack web development concepts.

> 🚀 **Status:** Deployed and actively developed.

## 🌐 Live Demo

🔗 **[Try SyncChat](https://syncchat-mnrj.onrender.com/)**

## ✨ Features

### 🔐 Authentication
- User signup
- User login
- User logout
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookies
- Protected routes

### 💬 Chat & Messaging
- User conversations
- Send messages
- Retrieve messages
- Dynamic conversation selection
- Message loading states
- Message skeleton loading
- Smooth scrolling to the latest message
- Message error handling
- MongoDB message persistence
- Conversation management

### 🎨 Frontend
- Login page
- Signup page
- Chat interface
- Responsive chat UI
- Dynamic user information
- Loading states
- Zustand state management

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- Tailwind CSS
- Zustand

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt.js
- Cookie Parser

### Real-Time Communication
- Socket.IO

### Testing & Development
- Postman
- Git
- GitHub

## 📸 Project Preview

<img 
  width="1896" 
  height="1002" 
  alt="SyncChat Preview" 
  src="https://github.com/user-attachments/assets/72e496aa-fbd7-4847-87e4-ffb66e310ccc" 
/>

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Create a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |

### Messages

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/messages/:id` | Get messages with a user |
| POST | `/api/messages/send/:id` | Send a message to a user |

> Protected message routes require authentication.

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

> ⚠️ Never commit your `.env` file or expose your MongoDB credentials or JWT secret.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/md-alihaider/SyncChat.git
cd SyncChat
```

### 2. Install dependencies

Install dependencies in the backend and frontend directories:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configure environment variables

Create the required `.env` files and add your MongoDB connection string and JWT secret.

### 4. Start the backend

```bash
cd backend
npm run dev
```

### 5. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

## 🧪 API Testing

The backend APIs were tested using **Postman**, including:

- ✅ Signup
- ✅ Login
- ✅ Logout
- ✅ Protected routes
- ✅ Send messages
- ✅ Get messages
- ✅ Conversation retrieval
- ✅ MongoDB persistence

## 🔮 Roadmap

- [x] Backend server setup
- [x] MongoDB integration
- [x] User authentication
- [x] Password hashing
- [x] JWT authentication
- [x] Protected routes
- [x] Message model
- [x] Conversation model
- [x] Send messages API
- [x] Get messages API
- [x] React frontend
- [x] Login UI
- [x] Signup UI
- [x] Chat UI
- [x] Conversation fetching
- [x] Message retrieval
- [x] Send message functionality
- [x] Zustand state management
- [x] Loading states
- [x] Smooth message scrolling
- [x] Socket.IO integration
- [x] Deployment
- [ ] Further UI/UX improvements
- [ ] Additional real-time features

## 👨‍💻 Author

### Md Ali Haider

Full Stack Developer focused on building modern web applications and continuously improving my development skills.

🌐 **Portfolio:**  
https://alihaider-dev.vercel.app

💼 **LinkedIn:**  
https://linkedin.com/in/md-ali-haider

🐙 **GitHub:**  
https://github.com/md-alihaider

📸 **Instagram:**  
https://instagram.com/alihaider_7056

💡 **LeetCode:**  
https://leetcode.com/alihaiderbgp85

## ⭐ Support

If you find SyncChat interesting, consider giving the repository a ⭐.

Thanks for checking out the project! 🚀
