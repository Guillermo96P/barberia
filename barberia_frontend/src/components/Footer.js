import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-4 text-center'>
            <div className='flex justify-center items-center'>
                <nav>
                    <Link to='/' className='mx-4 hover:undeLine'>Home</Link>
                    <Link to='#servicios' className='mx-4 hover:underLine'>Servicios</Link>
                    <Link to='#tienda' className='mx-4 hover:underLine'>Tienda</Link>
                    <Link to='#nosotros' className='mx-4 hover:underLine'>Nosotros</Link>
                    <Link to='#contacto' className='mx-4 hover:underLine'>Contacto</Link>
                </nav>
            </div>
            <div className='items-center py-4'>
                <p>&copy; 2024 Barbería Premium. Todos los derechos son reservados</p>
            </div>
        </footer>
    );
};

export default Footer;