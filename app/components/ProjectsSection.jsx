"use client";
import React, { useState, useRef } from "react";

import { motion, useInView } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Kankoo App",
    description: "App de guias turisticas",
    image: "/images/projects/HomeKankoo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EAristiguieta/Kankoo_Project",
    previewUrl:
      "https://www.youtube.com/watch?v=RT6CjkMvZTk&t=15s&ab_channel=Socratech",
  },
  {
    id: 2,
    title: "Calculadora.Js",
    description: "Una calculadora con mucho neon ",
    image: "/images/projects/CapturaEscritorio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EAristiguieta/ClassicCalculator",
    previewUrl: "https://earistiguieta.github.io/ClassicCalculator/",
  },
  {
    id: 3,
    title: "BarberShop",
    description: "Maquetacion minimalista",
    image: "/images/projects/barber-vista-escritorio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EAristiguieta/BarberShop",
    previewUrl: "https://barbershopwebsiteproject.netlify.app/",
  },
];
export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  /* Lo usare cuando se creen las secciones de proyectos */
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* Componente que me filtra segun categorias/tags */}
        {/*      <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
        {/*         <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
