# Task Manager Application

A full-stack web application for managing tasks with user authentication. Create, edit, delete, and organize your tasks efficiently with a clean and intuitive interface.

## Features

✅ **User Authentication**
- User registration (signup)
- User login with email and password
- Secure password storage using bcryptjs
- JWT token-based authentication

✅ **Task Management**
- Create new tasks with title and description
- View all your tasks in one dashboard
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- Filter tasks by status (pending/completed)
- Real-time task statistics

✅ **User-Friendly Interface**
- Clean and modern UI
- Responsive design
- Modal forms for creating and editing tasks
- Real-time statistics showing task counts

## Tech Stack

### Frontend
- **React 19.2.0** - JavaScript library for building user interfaces
- **React Router 7.13.0** - Client-side routing
- **Axios** - HTTP client for API requests
- **Vite** - Modern build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.17.1** - MongoDB object modeling
- **JWT** - Secure authentication tokens
- **bcryptjs** - Password hashing

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB running locally or MongoDB Atlas connection

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhrutingami1226/internshala-task.git
   cd internshala-task
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   ```
   Create a `.env` file in the Backend folder (if needed for configuration)

3. **Setup Frontend**
   ```bash
   cd ../Frontend
   npm install
   ```

## Running the Application

### Start the Backend Server
```bash
cd Backend
npm run dev
```
The backend will run on `http://localhost:5000`

### Start the Frontend Dev Server
In a new terminal:
```bash
cd Frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

## Usage Guide

### 1. Create an Account
- Click on "Sign Up" on the login page
- Enter your name, email, and password
- Click register to create your account
- You'll be automatically logged in

### 2. Login
- Enter your registered email and password
- Click "Login" to access your dashboard

### 3. Create a Task
- Click the "Add Task" button on the dashboard
- Enter task title and optional description
- Click "Create" to save the task

### 4. Edit a Task
- Click the "Edit" button on any task
- Modify the title, description, or status
- Click "Update" to save changes

### 5. Delete a Task
- Click the "Delete" button on any task
- Confirm the deletion

### 6. Mark Task as Complete
- Click the status button on a task to toggle between pending and completed
- Completed tasks are marked visually

### 7. View Statistics
- Check the dashboard for real-time stats:
  - Total tasks
  - Pending tasks
  - Completed tasks

## Project Structure

```
internshala-task/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── styles/
│   │   │   ├── Auth.css
│   │   │   └── Dashboard.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── AuthContext.jsx
│   ├── index.html
│   └── package.json
│
└── Backend/
    ├── controllers/
    │   ├── auth.mjs
    │   └── task.mjs
    ├── models/
    │   ├── register.mjs
    │   └── task.mjs
    ├── routes/
    │   ├── auth.mjs
    │   └── task.mjs
    ├── middlewares/
    │   └── auth.mjs
    ├── config/
    │   └── db.mjs
    ├── app.mjs
    └── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get token
- `POST /api/auth/logout` - Logout user

### Tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all user's tasks
- `GET /api/tasks/status/:status` - Filter tasks by status
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Authentication Flow

1. User registers/logs in
2. Backend validates credentials and creates a JWT token
3. Token is stored in browser's localStorage
4. Token is sent with every API request in the Authorization header
5. Backend verifies token before allowing operations
6. User data is isolated - users can only see their own tasks


**Happy Task Managing!** 🚀

