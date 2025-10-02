import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header'; // путь к вашему Header
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';
import Daсhbord from './pages/Dachbord/Dachbord';
import Catalog from './pages/Catalog/Catalog';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// Основной компонент приложения
function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Profile />} />
            <Route path="/dachbord" element={<Daсhbord />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
