import { Button } from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AboutMe from "@/components/AboutMe/AboutMe";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import MenuLink from "@/components/MenuLink/MenuLink";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
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

const socialLinks = [
  {
    name: "X",
    link: "#",
    imageSrc: "x.png",
  },
  {
    name: "Github",
    link: "#",
    imageSrc: "github.png",
  },
  {
    name: "Linkedin",
    link: "#",
    imageSrc: "linkedIn.png",
  },
];

export default function About() {
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
          <section className="left-right-container">
            <section className="left-container">
              <AboutMe
                name={
                  'My name is Oliver Rivera, I have a passion for coding, engineering, and creative expression. '
                }
                content1={
                  "My academic journey led me through Interior Design, Mechtronics Engineering, and now Software Engineering. When I'm not coding, I'm spending time with my family, playing video games, or listening to music."
                }
                content2={
                  "Deciding on a lifelong career wasn't easy, but software engineering felt like coming home. It combines my favorite aspects: overcoming challenges, designing, delivering top-notch work, and lending a helping hand to others."
                }
                content3={
                  "I firmly believe that every experience, from personal struggles to professional triumphs, shapes who we are. Family means the world to me; their support has been my rock. Huge thanks to my parents for backing my dreams and standing by me no matter what."
                }
                content4={
                  "Thank you for the time you spent navigating my website. I invite you to stay tuned for updates on my ongoing work and growth in the field. "
                }
              />
            </section>
            <section className="right-image-container">
              <div className="image-container">
                <img src="Me.jpg" alt="My picture" />
              </div>
            </section>
            <section className="right-socials-container">
              <SocialLinks socialLinks={socialLinks} />
              <MenuLink
                email="mrbean@gmail.com"
                imageSrc="email.png"
                link="#"
              />
            </section>
          </section>
        </div>
      </main>
      <footer>
        <Footer links={links} />
      </footer>
    </div>
  );
}
