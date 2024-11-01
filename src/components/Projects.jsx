import React from "react";
import bipiiMSImage from "../assets/bipii.png";
import cortoMSImage from "../assets/corto.png";
import lemboMSImage from "../assets/lembo.png";

const projects = [
  {
    id: 1,
    name: "BIPI",
    technologies: "Proyecto realizado en la materia robótica, es un bastón inteligente para personas invidentes que detecta objetos con un sensor.",
    image: bipiiMSImage,
   
  },
  {
    id: 2,
    name: "Corto",
    technologies: "Este proyecto del corto fue realizado en la materia comunicación audiovisual, presentando un cortometraje con nuestras ideas propias.",
    image: cortoMSImage,
    
  },
  {
    id: 3,
    name: "MATAFUEGOS LEMBO",
    technologies: "Este proyecto fue realizado en la materia desarrollo de contenidos digitales, que tiene que ver con remodelar una empresa.",
    image: lemboMSImage,
    
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Mis proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
