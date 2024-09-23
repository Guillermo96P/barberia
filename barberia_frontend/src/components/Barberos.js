import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Barberos = () => {
    const [barberos, setBarberos] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/barberos/')
        .then(response => {
            setBarberos(response.data);
        })
        .catch(error => {
            console.error("Error al traer Barberos:", error);
        });
    }, []);

    return (
        <div className='container mx-auto'>
            <h2 className='text-[#111518] text-4xl font-bold leading-tight tracking-[-0.015] px-4 pb-3 pt-5'>Nuestros Barberos</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4'>
                {barberos.map(barbero => (
                    <div key={barbero.id} className='flex flex-col gap-3 pb-3'>
                        <div 
                        className='w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl'
                        style={{ backgroundImage: `url($(barbero.imagen))` }} // Imagen del barbero
                        ></div>
                        <div>
                            <p className='text-[#1111518] text-base font-medium leading-normal'>{barbero.nombre}</p>
                            <p className='text=[#60778a] text-sm font-normal leading-normal'>{barbero.especialidad}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Barberos;