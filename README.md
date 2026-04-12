# MERN Stack Authentication & CRUD with MySQL

A full-stack web application featuring user authentication and a dashboard with CRUD operations, built with MERN stack and MySQL database.

## Features

- **User Authentication**
  - User registration with password hashing
  - Login with JWT token authentication
  - Password reset via email
  - Protected routes

- **Dashboard**
  - Statistics overview (Total, Active, Pending, Completed items)
  - CRUD operations for items
  - Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React.js, React Router, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, JWT, bcryptjs, Nodemailer
- **Database**: MySQL with mysql2
- **State Management**: React Context API

## Project Structure

```
mern-mysql-auth-crud-Assignment/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── itemController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── itemRoutes.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── axios.js
│   │   │   ├── authApi.js
│   │   │   └── itemApi.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── PublicRoute.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
├── database.sql
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

## MySQL Setup

1. Install MySQL Server from [mysql.com](https://dev.mysql.com/downloads/mysql/) or use XAMPP/WAMP/MAMP
2. Create a database named `mern_auth_db`
3. Run the SQL script to create tables:

```bash
mysql -u root -p < database.sql
```

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in the backend directory:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=mern_auth_db
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/auth/me` - Get current user (Protected)

### Items (Protected)
- `GET /api/items` - Get all user items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item
- `GET /api/items/stats` - Get dashboard statistics

## Usage

1. Register a new account or login with existing credentials
2. Access the dashboard to manage your items
3. Create, read, update, and delete items
4. View statistics in the dashboard cards

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected routes
- SQL injection prevention with parameterized queries
- CORS enabled
- Input validation

## Development

- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:5173` (Vite default)
- MySQL connection pooling for performance
- Error handling middleware
- Environment-based configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is for educational purposes as part of CampusPe assignment.