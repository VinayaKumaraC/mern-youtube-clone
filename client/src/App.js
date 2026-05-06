import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/watch/:id" element={<div>Video Page</div>} />
          <Route path="/channel/:id" element={<div>Channel Page</div>} />
          <Route path="/search" element={<div>Search Results</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
