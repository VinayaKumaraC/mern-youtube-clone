# MERN YouTube Clone

A full-stack YouTube clone built with MongoDB, Express, React, and Node.js (MERN stack).

## Features

- User authentication and authorization
- Video upload and management
- Search and filter videos
- Watch history
- Like and dislike videos
- Comment on videos
- Playlist management
- Subscribe to channels
- Responsive design

## Project Structure

```
mern-youtube-clone/
├── server/              # Backend (Node.js + Express)
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API routes
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   ├── utils/          # Utility functions
│   └── server.js       # Entry point
├── client/             # Frontend (React)
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom hooks
│   │   ├── context/    # Context API
│   │   ├── services/   # API services
│   │   ├── styles/     # CSS files
│   │   ├── App.js      # Main app component
│   │   └── index.js    # Entry point
│   └── public/         # Static files
├── .gitignore
├── .env.example
└── package.json

```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

### Backend Setup

```bash
cd server
npm install
```

### Frontend Setup

```bash
cd client
npm install
```

## Environment Variables

Create a `.env` file in the `server` directory:

```
MONGODB_URI=mongodb://localhost:27017/youtube-clone
PORT=5000
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Running the Application

### Start Backend Server

```bash
cd server
npm start
```

The server will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd client
npm start
```

The app will run on `http://localhost:3000`

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud storage for videos

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Redux** - State management
- **Material-UI** - UI components
- **Tailwind CSS** - Styling

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Videos
- `GET /api/videos` - Get all videos
- `GET /api/videos/:id` - Get video details
- `POST /api/videos` - Upload video
- `PUT /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile
- `POST /api/users/:id/subscribe` - Subscribe to channel

### Comments
- `GET /api/comments/:videoId` - Get comments
- `POST /api/comments` - Add comment
- `DELETE /api/comments/:id` - Delete comment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Created by [VinayaKumaraC](https://github.com/VinayaKumaraC)
