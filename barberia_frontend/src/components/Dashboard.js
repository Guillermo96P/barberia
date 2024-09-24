// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; // Asegúrate de que la ruta sea correcta

const Dashboard = ({ userRole }) => {
    return (
        <div className='relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden' style={{ fontFamily: `sans-serif` }}>
            {userRole === 'admin' ? (
                <>
                    <div className='gap-1 px-6 flex flex-1 py-5'>
                        <Sidebar />
                        <div className='flex-grow p-4'>
                            {/* Aquí puedes añadir más contenido para el dashboard */}
                            <p className='text-[#181411] tracking-light text-[32px] font-bold leading-tight'>Tu Tienda</p>
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
