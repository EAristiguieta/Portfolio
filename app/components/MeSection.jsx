"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export const MeSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCCCCC]   to-[#403B25]">
              Hello, Im
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Edson",
                1000,
                "Web Developer",
                1000,
                "Frontend Dev",
                1000,
                "Full Stack Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Apasionado por la innovación y la creatividad, busco constantemente
            desafiar mis límites en el desarrollo web. Encuentro inspiración en
            el desafío y la satisfacción de lograr resultados significativos a
            través de un trabajo meticuloso y persistente. Disfruto sumergirme
            en proyectos que requieren dedicación y paciencia . Creo firmemente
            en el valor del esfuerzo continuo y la superación personal, aparte
            soy una persona a la que le encanta trabajar en equipo para alcanzar
            metas ambiciosas y significativas.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-lime-900  to-[#403B25] bg-white hover:bg-slate-200   text-white ">
              Contacto
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br  from-lime-900   to-[#403B25]  mr-4 bg-transparent hover:bg-slate-800 text-white  mt-3">
              <a
                href="https://www.figma.com/file/DwnvQlCEU9oKQoXg5IBvZv/Cv?type=design&node-id=0-1&mode=design&t=I1S1oRobd5S0kyUZ-0"
                target="_blank"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]   relative ">
            <Image
              src="/images/Profile_NoBackground.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full  -my-6 sm:w-200 object-cover"
              alt="ProfileImg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
