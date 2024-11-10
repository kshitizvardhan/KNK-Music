import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6 bg-no-repeat bg-cover" style={{
          backgroundImage: "url('/Background-1.jpg')",
        }}>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/signup" replace />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
