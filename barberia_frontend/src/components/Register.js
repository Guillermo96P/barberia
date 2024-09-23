import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username,
        password
      });
      setMessage('Registro exitoso, ya puedes iniciar sesión');
    } catch (error) {
      setMessage('Error en el registro');
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Header */}
      <Header buttonText="Entrar" buttonLink="/login" />

      <div className='min-h-screen flex justify-center items-center'>
        <form onSubmit={handleRegister} className='bg-white p-8 rounded shadow-md'>
          <h2 className='text-2xl font-bold mb-6'>Registro</h2>
          {message && <p className='mb-4'>{message}</p>}
          <input 
            type='text'
            placeholder='Nombre de usuario'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border p-2 mb-4 w-full'
          />
          <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Registrarse
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
