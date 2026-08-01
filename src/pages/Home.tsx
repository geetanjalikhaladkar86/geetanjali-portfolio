import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { ProjectArchitecture } from "@/components/ProjectArchitecture";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { GitHubStats } from "@/components/GitHubStats";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { ScrollTop } from "@/components/ScrollTop";
import { MouseGlow } from "@/components/MouseGlow";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function Home() {
  return (
    <>
      <Loader />
      <AnimatedBackground />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <ProjectArchitecture />
        <Achievements />
        <Education />
        <GitHubStats />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
