# 💬 SyncChat

A real-time chat application I'm building as a side project while learning and practicing full-stack web development.

> 🚧 **Status:** In Development — Backend currently implemented, frontend coming next.

---

## ✨ Features

### 🔐 Authentication

- User signup
- User login
- User logout
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookies
- Protected routes using authentication middleware

### 💬 Messaging

- Send messages
- Retrieve messages
- Conversation management
- MongoDB message persistence

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt.js
- Cookie Parser

### Testing

- Postman

### Planned

- React
- Socket.IO
- Real-time messaging

---

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

> All protected message routes require authentication.

---

## 📁 Project Structure

```text
SyncChat/
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── message.controller.js
│   ├── db/
│   │   └── connectToMongoDb.js
│   ├── middleware/
│   │   └── protectRoute.js
│   ├── models/
│   │   ├── conversation.model.js
│   │   ├── message.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── message.routes.js
│   ├── utils/
│   │   └── generateToken.js
│   └── server.js
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

> ⚠️ Never commit your `.env` file or expose your database credentials and JWT secret.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/md-alihaider/SyncChat.git
```

### 2. Navigate to the project

```bash
cd SyncChat
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file and add your MongoDB connection string and JWT secret.

### 5. Start the development server

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## 🧪 API Testing

The backend APIs have been tested using **Postman**.

Current tested functionality includes:

- ✅ Signup
- ✅ Login
- ✅ Logout
- ✅ Protected routes
- ✅ Send message
- ✅ Get messages
- ✅ MongoDB persistence

---

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
- [ ] Build React frontend
- [ ] Connect frontend with backend
- [ ] Add Socket.IO
- [ ] Implement real-time messaging
- [ ] Improve chat UI/UX
- [ ] Deploy SyncChat

---

## 👨‍💻 Author

### Md Ali Haider

I'm a BCA graduate focused on learning and building modern full-stack web applications.

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

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ and following my journey as I continue building SyncChat.
