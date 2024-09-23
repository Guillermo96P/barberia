import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='layout-content-container flex flex-col w-80'>
            <div className='flex h-full min-h-[700px] flex-col justify-between bg-white p-4'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3'>
                        <div
                        className='bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10'
                        style={{ backgroundImage: `url("https://cdn.usegalileo.ai/stability/0c355c02-7afc-4328-9d12-548ddc2d5007.png")` }}
                        ></div>
                        <h1 className='text-[#181411] text-base font-medium leading-normal'>Administrador - Barbería Premium</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <nav>
                            <div className='flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f4f2f0]'><Link to='#dashboard' className='text-[#181411] text-sm font-medium leading-normal'>Overview</Link></div>
                            <div className='flex items-center gap-3 px-3 py-2'><Link to='#shopsettings' className='text-[#181411] text-sm font-medium leading-normal'>Configuración de Tienda</Link></div>
                            <div className='flex items-center gap-3 px-3 py-2'><Link to='#servicesmenu' className='text-[#181411] text-sm font-medium leading-normal'>Menú de Servicios</Link></div>
                            <div className='flex items-center gap-3 px-3 py-2'><Link to='discounts' className='text-[#181411] text-sm font-medium leading-normal'>Descuentos</Link></div>
                            <div className='flex items-center gap-3 px-3 py-2'><Link to='#barberos' className='text-[#181411] text-sm font-medium leading-normal'>Barberos</Link></div><div className='flex items-center gap-3 px-3 py-2'><Link to='#giftcards' className='text-[#181411] text-sm font-medium leading-normal'>Tarjetas de Regalo</Link></div>
                            <div className='flex items-center gap-3 px-3 py-2'><Link to='#referalprogram' className='text-[#181411] text-sm font-medium leading-normal'>Programa de Referidos</Link></div>
                            <div className='flex items-center gap-3 px-3 py-2'><Link to='#referalprogram' className='text-[#181411] text-sm font-medium leading-normal'>Programa de Referidos</Link></div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
