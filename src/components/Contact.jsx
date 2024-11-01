import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-purple-300 text-black py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">Contáctame</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className='flex-1 w-full mb-8 md:mb-0'>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Tu Nombre</label>
                <input 
                  type="text" 
                  className='w-full p-2 rounded bg-white border border-gray-400 focus:outline-none
                  focus:border-purple-500'
                  placeholder='Ingresa tu nombre'
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Correo Electrónico</label>
                <input 
                  type="email" 
                  className='w-full p-2 rounded bg-white border border-gray-400 focus:outline-none
                  focus:border-purple-500'
                  placeholder='Ingresa tu correo'
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Mensaje</label>
                <textarea 
                  className='w-full p-2 rounded bg-white border border-gray-400 focus:outline-none
                  focus:border-purple-500'
                  rows="5"
                  placeholder='Ingresa tu mensaje'
                />
              </div>
              <button 
                type="submit"
                className='bg-gradient-to-r from-purple-500 to-purple-700 text-white 
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Enviar
              </button>
            </form>
          </div>

          <div className="flex-1 mb-8 md:mb-0">
            <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-purple-500 to-purple-700 mb-4'>¡Hablemos!</h3>
            <p className="mb-6">Estoy disponible para discutir proyectos de desarrollo web u oportunidades de colaboración.</p>
            
            <div className='flex items-center mb-4'>
              <FaEnvelope className='text-purple-600 mr-2' />
              <a href="mailto:youremail@example.com" className='hover:underline'>
                  laralucero@iresm.edu.ar
              </a>
            </div>
            <div className='flex items-center mb-4'>
              <FaPhone className='text-purple-600 mr-2' />
              <span>+549 3541586449</span>
            </div>
            <div className='flex items-center mb-4'>
              <FaMapMarkedAlt className='text-purple-600 mr-2' />
              <span>Castelli 186, villa carlos paz, cordoba, argentina</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
