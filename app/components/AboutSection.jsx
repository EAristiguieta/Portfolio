"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Herramientas",
    id: "Herramientas",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Typescript</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Educacion",
    id: "Educacion",
    content: (
      <ul className="list-disc pl-2">
        <li> Bootcamp Fullstack Web developer of Socratech</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "Certificaciones",
    content: (
      <ul className="list-disc pl-2">
        <li>Diseño UX/UI - Accenture</li>
        <li>Next.Js </li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("Herramientas");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="aboutImage"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg">
            🎓 Finalicé un Bootcamp de Full-Stack Web Developer con la escuela
            tecnológica Socratech. 💻 Actualmente, me estoy sumergiendo en el
            fascinante mundo de Next.js y el Diseño UX/UI, ampliando mis
            conocimientos y buscando nuevas formas de crear experiencias web
            impactantes y accesibles.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Herramientas")}
              active={tab === "Herramientas"}
            >
              Tools
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Educacion")}
              active={tab === "Educacion"}
            >
              Educacion
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certificaciones")}
              active={tab === "Certificaciones"}
            >
              Certificaciones
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
