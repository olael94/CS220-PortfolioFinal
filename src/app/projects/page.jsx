import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AboutMe from "@/components/AboutMe/AboutMe";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import React from "react";
import ProjectPageIntro from "@/components/ProjectPageIntro/ProjectPageIntro"; // Added React import

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

//Links for Footer
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

export default function Projects() {
  return (
    <div className="body">
      <header>
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
        <ThemeSwitcher />
      </header>
      <main>
        <div className="main-container">
          <section className="intro">
            <ProjectPageIntro
              name={"Things I’ve made trying to put my dent in the universe."}
              content={
                "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
              }
            />
          </section>
          <section className="project-card-container">
              <ProjectCard
                logo="logo.png"
                name="Mr.Bean & Co."
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="logo.png"
                name="Mr.Bean inc"
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="microsoft.png"
                name="MS"
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="slack.png"
                name="Slack"
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://www.ensign.edu/"
              />
              <ProjectCard
                logo="microsoft.png"
                name="LinkedIn "
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="spotify.png"
                name="Spotify"
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://www.ensign.edu/"
              />
          </section>
        </div>
      </main>
      <footer>
        <Footer links={links} />
      </footer>
    </div>
  );
}
