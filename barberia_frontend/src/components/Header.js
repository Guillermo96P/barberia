import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ buttonText, buttonLink }) => {
    return (
        <header className='bg-white text-black py-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Barbería Premium</h1>
                <div className='flex items-center'>
                    <nav>
                        <Link to='/' className='mx-4 hover:underLine'>Home</Link>
                        <Link to='#servicios' className='mx-4 hover:underLine'>Servicios</Link>
                        <Link to='#tienda' className='mx-4 hover:underLine'>Shop</Link>
                        <Link to='#nosotros' className='mx-4 hover:underLine'>Nosotros</Link>
                        <Link to='#contacto' className='mx-4 hover:underLine'>Contacto</Link>
                    </nav>
                    <button className='ml-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]'>
                        <Link to={buttonLink} className='mx-4 hover:underLine'>{buttonText}</Link>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;