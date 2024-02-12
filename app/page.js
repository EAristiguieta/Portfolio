import Image from "next/image";

import { NavBarComponent } from "./components/NavBarComponent";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { FooterComponent } from "./components/FooterComponent";
import { MeSection } from "./components/MeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]   ">
      <NavBarComponent />
      <div className="container mt-24 mx-auto px-12 py-4">
        <MeSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <FooterComponent />
    </main>
  );
}
