import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
         
          Mi Portafolio
        </div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Inicio</a>
          <a href="#about" className='hover:text-gray-400'>Sobre mí</a>
          <a href="#service" className='hover:text-gray-400'>Servicios</a>
          <a href="#project" className='hover:text-gray-400'>Proyectos</a>
          <a href="#contact" className='hover:text-gray-400'>Contacto</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Contáctame
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
