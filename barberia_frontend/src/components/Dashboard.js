// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; // Asegúrate de que la ruta sea correcta

const Dashboard = ({ userRole }) => {
    return (
        <div className='relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden' style={{ fontFamily: `sans-serif` }}>
            {userRole === 'admin' ? (
                <>
                    <div className='flex gap-4 px-6 py-5'>
                        <Sidebar />
                        <div className='flex-grow p-4'>
                            <p className='text-[#181411] tracking-light text-[32px] font-bold leading-tight'>Tu Tienda</p>
                            <p className='text-[#887263] text-sm font-normal leading-normal'>Descripción rápida del rendimiento de tu tienda</p>
                            <div className='flex flex-wrap gap-3 p-4'>
                                <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#e5dfdc] bg-white shadow-md'>
                                    <p className='text-[#181411] text-base font-medium leading-normal'>Equipos</p>
                                    <p className='text-[#181411] tracking-light text-2xl font-bold leading-tight'>1,203</p>
                                    <p className='text-[#07880e] text-base font-medium leading-normal'>+5%</p>
                                </div>
                                <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#e5dfdc] bg-white shadow-md'>
                                    <p className='text-[#181411] text-base font-medium leading-normal'>Ventas</p>
                                    <p className='text-[#181411] tracking-light text-2xl font-bold leading-tight'>5,321</p>
                                    <p className='text-[#07880e] text-base font-medium leading-normal'>+2%</p>
                                </div>
                                <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#e5dfdc] bg-white shadow-md'>
                                    <p className='text-[#181411] text-base font-medium leading-normal'>Barberos</p>
                                    <p className='text-[#181411] tracking-light text-2xl font-bold leading-tight'>3</p>
                                    <p className='text-[#07880e] text-base font-medium leading-normal'>+2%</p>
                                </div>
                            </div>
                            <h3 className='text-[#181411] text-lg font-bold leading-tight px-4 pb-2 pt-4'>Historial de Reservaciones</h3>
                            <div className='grid grid-cols-[40px_1fr] gap-x-2 px-4'>
                                <div className='flex flex-col items-center gap-1 pt-3'>
                                    <div className='bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6'
                                    style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/a4543260-cd7f-4210-919a-4b277d1ea3c8.png")` }}
                                    ></div>
                                    <div className='w-[1.5px] bg-[#e5dfdc] h-2 grow'></div>
                                </div>
                                <div className='flex flex-1 flex-col py-3'>
                                    <p className='text-[#181411] text-base font-medium leading-normal'>Corte &amp; Barba</p>
                                    <p className='text-[#887263] text-base font-medium leading-normal'>Julio 16, 3:00 PM</p>
                                </div>
                                <div className='flex flex-col items-center gap-1'>
                                    <div className='w-[1.5px] bg-[#e5dfdc] h-2'></div>
                                    <div
                                    className='bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6'
                                    style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e7a25ad0-7b99-4eba-8be3-67e091d6e37c.png")` }}
                                    ></div>
                                    <div className='w-[1.5px] bg-[#e5dfdc] h-2 grow'></div>
                                </div>
                                <div className='flex flex-1 flex-col py-3'>
                                    <p className='text-[#181411] text-base font-medium leading-normal'>Barba</p>
                                    <p className='text-[#887263] text-base font-normal leading-normal'>Julio 16, 3:05PM</p>
                                </div>
                                <div className='flex flex-col items-center gap-1'>
                                    <div className='w-[1.5px] bg-[#e5dfdc] h-2'></div>
                                    <div
                                    className='bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6'
                                    style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e7a25ad0-7b99-4eba-8be3-67e091d6e37c.png")` }}
                                    ></div>
                                    <div className='w-[1.5px] bg-[#e5dfdc] h-2 grow'></div>
                                </div>
                                <div className='flex flex-1 flex-col py-3'>
                                    <p className='text-[#181411] text-base font-medium leading-normal'>Barba</p>
                                    <p className='text-[#887263] text-base font-normal leading-normal'>Julio 16, 3:05PM</p>
                                </div>
                                <div className='flex flex-col items-center gap-1'>
                                    <div className='w-[1.5px] bg-[#e5dfdc] h-2'></div>
                                    <div
                                    className='bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6'
                                    style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e7a25ad0-7b99-4eba-8be3-67e091d6e37c.png")` }}
                                    ></div>
                                </div>
                                <div className='flex flex-1 flex-col py-3'>
                                    <p className='text-[#181411] text-base font-medium leading-normal'>Barba</p>
                                    <p className='text-[#887263] text-base font-normal leading-normal'>Julio 16, 3:05PM</p>
                                </div>
                            </div>
                            <h3 className='text-[#181411] text-lg font-bold leading-tight px-4 pb-2 pt-4'>Reservas de Hoy</h3>
                            <div className='px-4 py-3'>
                                <div className='flex overflow-hidden rounded-xl border border-[#e5dfdc] bg-white'>
                                    <table className='flex-1'>
                                        <thead>
                                            <tr className='bg-white'>
                                                <th className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-medium leading-normal'>Cliente</th>
                                                <th className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-medium leading-normal'>Servicio</th>
                                                <th className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-medium leading-normal'>Barbero</th> 
                                                <th className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-medium leading-normal'>Hora</th>
                                                <th className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-medium leading-normal'>Estado</th>
                                                <th className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-medium leading-normal'>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='border-t border-t-[#e5dfdc]'>
                                                <td className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-mediumm leading-normal'>
                                                    <div className='bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10'
                                                    style={{ backgroundImage: `url("https://cdn.usegalileo.ai/stability/fdec409e-71e3-41c3-92f2-d7a8ed2a543b.png")` }}
                                                    ></div>
                                                    <p className='text-[#181411] text-base font-medium leading-normal'>Adam</p>
                                                </td>   
                                                <td className='table-column-176 h-[72px] px-4 py-2 w-[400px] text-[#181411] text-sm font-normal leading-normal'>Corte de Cabello</td>
                                                <td className='table-column-296 h-[72px] px-4 py-2 w-[400px] text-[#887263] text-sm font-normal leading-normal'>Alex</td>
                                                <td className='table-column-416 h-[72px] px-4 py-2 w-[400px] text-[#887263] text-sm font-normal leading-normal'>11:00 AM</td>
                                                <td className='table-column-536 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal'>
                                                    <button className='flex items-center min-w-[84px] max-w-[400px] cursor-pointer rounded-xl h-8 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-medium leading-normal w-full'>
                                                        <span className='truncate'>Completado</span>
                                                    </button>
                                                </td>
                                                <td className='table-column-656 h-[72px] px-4 py-2 w-60 text-[#887263] text-sm font-bold leading-normal tracking-[0.015em]'>Vista</td>
                                            </tr>
                                            <tr className='border-t border-t-[#e5dfdc]'>
                                                <td className='table-column-56 px-4 py-3 text-left text-[#181411] w-14 text-sm font-mediumm leading-normal'>
                                                    <div className='bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10'
                                                    style={{ backgroundImage: `url("https://cdn.usegalileo.ai/stability/fdec409e-71e3-41c3-92f2-d7a8ed2a543b.png")` }}
                                                    ></div>
                                                    <p className='text-[#181411] text-base font-medium leading-normal'>Adam</p>
                                                </td>   
                                                <td className='table-column-176 h-[72px] px-4 py-2 w-[400px] text-[#181411] text-sm font-normal leading-normal'>Corte de Cabello</td>
                                                <td className='table-column-296 h-[72px] px-4 py-2 w-[400px] text-[#887263] text-sm font-normal leading-normal'>Alex</td>
                                                <td className='table-column-416 h-[72px] px-4 py-2 w-[400px] text-[#887263] text-sm font-normal leading-normal'>11:00 AM</td>
                                                <td className='table-column-536 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal'>
                                                    <button className='flex items-center min-w-[84px] max-w-[400px] cursor-pointer rounded-xl h-8 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-medium leading-normal w-full'>
                                                        <span className='truncate'>Completado</span>
                                                    </button>
                                                </td>
                                                <td className='table-column-656 h-[72px] px-4 py-2 w-60 text-[#887263] text-sm font-bold leading-normal tracking-[0.015em]'>Vista</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>No tienes permiso para ver esta página</p>
            )}
        </div>
    );
};

export default Dashboard;
