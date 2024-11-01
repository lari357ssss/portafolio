import React from "react";

const services = [
  {
    id: 1,
    title: "Diseño Web- canva",
    description: "Creando diseños web visualmente atractivos y fáciles de usar.",
  },
  {
    id: 2,
    title: "html",
    description: "para proporcionar estructura a una página web y hacerla accesible a los usuarios de Internet a través de texto, formato visual y factores de búsqueda .",
  },
  {
    id: 3,
    title: "Css",
    description: " para dar estilo y formato a las páginas web. Se usa junto con HTML para mejorar la apariencia visual y la experiencia del usuario en un sitio. CSS permite controlar elementos de estilo.",
  },
  
];

const Service = () => {
  return (
    <div className="bg-purple-300 text-black py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12 font-sans">Mis conocimientos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-lg shadow-lg transition-transform 
              transform hover:scale-105"
            >
              <div
                className="text-right text-3xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-800">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Leer Más</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
