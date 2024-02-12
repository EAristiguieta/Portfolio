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
            👋Hey! Me presento, soy Edson Aristiguieta desarrollador full stack
            web apasionado por el mundo de la programación, con ganas de
            aprender más y crecer en este mundo. Mi dedicación al proyecto es lo
            que más me define profesionalmente. Hola mundo se ha vuelto mi
            mantra y no puedo estar mas feliz!.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-lime-900  to-[#403B25] bg-white hover:bg-slate-200   text-white ">
              Contacto
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br  from-lime-900   to-[#403B25]  mr-4 bg-transparent hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]   relative ">
            <Image
              src="/images/Profile_NoBackground.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
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
