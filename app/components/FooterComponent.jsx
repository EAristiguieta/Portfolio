"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export const FooterComponent = () => {
  const email = "edsonaristiguieta@gmail.com";
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email);
      alert(" Correo copiado al portapapeles. ¡Gracias por conectar!");
    };

    const button = document.getElementById("copyButton");
    button.addEventListener("click", copyToClipboard);

    return () => {
      button.removeEventListener("click", copyToClipboard);
    };
  }, []);

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-evenly">
        {/*TODO logo de redes */}
        <Link
          href="https://www.linkedin.com/in/edson-aristiguieta-vidal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/linkedin.svg"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </Link>
        <Link
          href="https://github.com/EAristiguieta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/github.svg"
            alt="GitHub"
            className="w-10 h-10"
          />
        </Link>
        <button id="copyButton" onClick={() => setClicked(true)}>
          <img
            src="/images/icons/send.svg"
            alt="GitHub"
            className="w-10 h-10"
          />
        </button>
      </div>
    </footer>
  );
};
