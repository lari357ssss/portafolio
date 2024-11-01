import React from 'react';
import HeroImage from '../assets/perfil.png';

const Hero = () => {
  return (
    <div className='bg-gray-800 text-white text-center py-16'>
      <img 
        src={HeroImage} 
        alt="Lara Lucero" 
        className='mx-auto mb-8 w-64 h-64 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-110'
      />
      <h1 className='text-5xl font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500'>
          Lara Lucero
        </span>
      </h1>
      <p className='mt-4 text-xl text-gray-300'>
        Especializada en informática y desarrollo de aplicaciones.
      </p>
      <div className='mt-8 space-x-4'>
        <button
          className='bg-black text-fuchsia-500
          transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full border border-fuchsia-500'
        >
          Contáctame
        </button>
        <button
          className='bg-black text-fuchsia-500
          transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full border border-fuchsia-500'
        >
          Mi Currículum
        </button>
      </div>
    </div>
  );
};

export default Hero;
