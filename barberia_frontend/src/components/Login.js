import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password
      });
      const { access, refresh } = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      setMessage('Inicio de sesión exitoso');
    } catch (error) {
      setMessage('Error al iniciar sesión');
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Header */}
      <Header buttonText="Registro" buttonLink="/register" />

      {/* Formulario de Inicio de Sesión */}
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
          {message && <p className="mb-4">{message}</p>}
          <input 
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-black-600">
            Iniciar Sesión
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
