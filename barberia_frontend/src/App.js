import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Barberos from './components/Barberos'; // Importar el componente dinámico de barberos
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Header */}
      <Header buttonText="Entrar" buttonLink="/login" />

      {/* Hero */}
      <div className='flex w-full items-center justify-center'>
        <div className='layout-content-container flex flex-col flex-1 max-w-full'>
          <div className='@container'>
            <div className='@[480px]:p-4'>
              <div
              className='flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4'
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/background.png")` }}
              >
                <div className='flex flex-col gap-2 text-center'>
                  <h1 className='text-white text-5xl font-black'>Bienvenido a Barbería Premium</h1>
                  <h2 className='text-white text-2xl font-semibold'>
                  Mereces verte y sentirte lo mejor posible. Es por eso que ofrecemos una gama de servicios premium en nuestra barbería convenientemente ubicada.
                  </h2>
                </div>
                <button className='flex items-center justify-center h-12 px-4 rounded-xl bg-[#2094f3] text-white text-md font-bold'>
                  <span className="truncate">Reserva ahora</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Servicios</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url("/images/Servicio1.png")` }}
              ></div>
              <div>
                <p className="text-[#111518] text-base font-medium leading-normal">Corte &amp; Estilo</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal">$35.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url("/images/Servicio2.png")` }}
              ></div>
              <div>
                <p className="text-[#111518] text-base font-medium leading-normal">Barba</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal">$25.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Barberos (Dinámicos) */}
      <section id='barberos' className='py-16 bg-gray-100'>
        <div className='container mx-auto text-center'>
          {/* Aquí estamos utilizando el componente dinámico Barberos */}
          <Barberos />

        </div>
      </section>

      {/* Reserva */}
      <section id='reservar' className='py-16 bg-green-500 text-white'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8'>¡Reserva Tu Cita!</h2>
          <p className='text-lg mb-8'>Elige tu servicio y selecciona el barbero de tu preferencia.</p>
          <Link to='#reservas' className='bg-black py-2 px-4 rounded hover:bg-gray-700'>Reserva Ahora</Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard userRole='admin' />} />
      </Routes>
    </Router>
  );
};

export default App;
