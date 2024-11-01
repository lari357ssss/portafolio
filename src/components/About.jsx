import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-24" id="about">
      <div className="container mx-auto px-10 md:px-20 lg:px-28">
        <h2 className="text-6xl font-extrabold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
          Sobre Mí
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-14">
          <div className="flex-1">
            <p
              className="text-2xl font-semibold text-center md:text-left leading-relaxed text-purple-300"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Soy <span className="text-4xl font-bold text-purple-500">Lara Lucero</span>, estudiante del Instituto Remedios Escalada De San Martin,
              especializada en programación. Disfruto crear apps y páginas web con HTML y CSS. Me gusta aprender y conocer sobre lenguajes,programar juegos y apps.
            </p>
          </div>
        </div>
        <h3 className="text-4xl font-semibold text-center my-10 text-gradient">
          Habilidades
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl hover:shadow-xl transition-shadow">
            <h4 className="text-2xl font-semibold mb-3">HTML & CSS</h4>
            <div className="bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-400 to-indigo-600 h-3 rounded-full w-10/12 transition-transform duration-300 hover:scale-110"
              ></div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl hover:shadow-xl transition-shadow">
            <h4 className="text-2xl font-semibold mb-3">React JS</h4>
            <div className="bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-400 to-indigo-600 h-3 rounded-full w-8/12 transition-transform duration-300 hover:scale-110"
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex justify-around text-center">
          <div>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
              +2
            </h3>
            <p className="text-lg">Años de Experiencia</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
              +5
            </h3>
            <p className="text-lg">Proyectos Completados</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default About; 