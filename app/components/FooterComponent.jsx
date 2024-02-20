import Link from "next/link";
import React from "react";

export const FooterComponent = () => {
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
      </div>
    </footer>
  );
};
