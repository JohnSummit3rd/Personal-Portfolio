import { Link } from "react-router-dom";

import BorderedCard from "./BorderedCard";
import ProjectCard from "./ProjectCard";
import ContactCard from "./ContactCard";
import Typewriter from "./TypeWriter";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger from "./AnimatedStagger.jsx";
import AnimatedItem from "./AnimatedItem";

import bmiGif from "../assets/bmi.gif"
import srfGif from "../assets/subredditfinder.gif"
import portGif from "../assets/portfolio.gif"

import pattern from "../assets/pattern.svg"
import square from "../assets/square.svg"
import geometric from "../assets/geometric.svg"

function Home() {
  return (
    <div>
      <div className="bg-[#282c33] light:bg-[#f3f6fa] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={pattern}
            alt="pattern"
            className="hidden lg:block absolute top-[15%] left-[-80px] h-[160px] pointer-events-none"
          />

          <img
            src={square}
            alt="square"
            className="hidden lg:block absolute top-[10%] right-[-50px] h-[120px] pointer-events-none"
          />

          <img
            src={square}
            alt="square"
            className="hidden lg:block absolute top-[22%] right-[-30px] h-[140px] pointer-events-none"
          />

          <img
            src={pattern}
            alt="pattern"
            className="hidden lg:block absolute top-[35%] right-[-40px] h-[120px] pointer-events-none"
          />

          <img
            src={square}
            alt="square"
            className="hidden lg:block absolute top-[30%] left-[-70px] h-[120px] pointer-events-none"
          />

          <img
            src={pattern}
            alt="pattern"
            className="hidden lg:block absolute top-[45%] left-[-80px] h-[160px] pointer-events-none"
          />

          <img
            src={pattern}
            alt="pattern"
            className="hidden lg:block absolute top-[65%] right-[-40px] h-[120px] pointer-events-none"
          />

          <img
            src={pattern}
            alt="pattern"
            className="hidden lg:block absolute top-[85%] right-[-50px] h-[140px] pointer-events-none"
          />

          <img
            src={pattern}
            alt="pattern"
            className="hidden lg:block absolute top-[60%] left-[-60px] h-[160px] pointer-events-none"
          />

          <img
            src="src/assets/square.svg"
            alt=""
            className="hidden lg:block absolute top-[45%] right-[-70px] h-[120px] pointer-events-none"
          />

          <img
            src={square}
            alt="square"
            className="hidden lg:block absolute bottom-[20%] left-[-100px] h-[180px] pointer-events-none"
          />
        </div>
        <div className="px-[20px] relative z-10">
          <AnimatedSection className="front-page flex flex-col items-center min-h-[calc(100vh-60px)] justify-center">
            <Typewriter text="AARON ZHANG" />
            <h1 className="text-xl text-white light:text-[#1e2228] font-medium text-center md:text-4xl md:w-[75%]">Aspiring <span className="text-[#7ec0ee] light:text-[#5aa0cc]">Frontend Developer</span> & <span className="text-[#7ec0ee] light:text-[#5aa0cc]">Software Engineer</span></h1>
            <Link to="/contact">
              <button className="mt-5 border-1 border-[#7ec0ee] light:border-[#5aa0cc] text-white light:text-[#1e2228] py-1 px-2 md:py-3 md:px-6 md:text-xl hover:bg-[#7ec0ee]/30 hover:cursor-pointer transition-all duration-300">Contact me!!</button>
            </Link>
          </AnimatedSection>
          <AnimatedSection
            className="skills-page w-full lg:mt-50 max-w-7xl mx-auto"
          >
            <h1 className="text-2xl md:text-4xl md:font-semibold text-white light:text-[#1e2228] font-medium mb-10 lg:text-5xl"><span className="text-[#7ec0ee] light:text-[#5aa0cc]">//</span>skills</h1>
            <div className="flex md:flex-row md:justify-between md:gap-10">
              <div className="hidden md:block md:w-1/2 relative">
                <img src={pattern} alt="pattern" className="absolute top-[5%] left-[5%] h-[100px]" />
                <img src={square} alt="square" className="absolute top-[20%] left-[65%] h-[70px]" />
                <img src={pattern} alt="pattern" className="absolute top-[40%] left-[25%] h-[80px]" />
                <img src={square} alt="square" className="absolute top-[60%] left-[75%] h-[100px]" />
                <img src={geometric} alt="geometric" className="absolute top-[80%] left-[15%] h-[150px]" />
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-5 items-start">
                <BorderedCard
                  title="Languages"
                  items={["Javascript", "Python", "HTML", "CSS"]}
                />
                <BorderedCard
                  title="Frameworks"
                  items={["ReactJS", "NextJS", "NodeJS"]}
                />
                <BorderedCard
                  title="Tools"
                  items={["Linux", "GitHub", "VSCode", "GitLab"]}
                />
                <BorderedCard
                  title="Database"
                  items={["PostgreSQL"]}
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="projects-page flex flex-col w-full max-w-7xl mx-auto mt-30 md:mt-50">
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-2xl text-white light:text-[#1e2228] font-medium md:text-4xl lg:text-5xl md:font-semibold"><span className="text-[#7ec0ee] light:text-[#5aa0cc]">//</span>projects</h1>
              <Link to="/projects">
                <h1 className="text-sm text-white hover:cursor-pointer hover:text-[#7ec0ee] hover:scale-110 transition-all duration-300 md:text-lg lg:text-xl">View all -&gt;</h1>
              </Link>
            </div>
            <AnimatedStagger className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between">
              <AnimatedItem className="w-full md:w-[48%]">
                <ProjectCard
                  languages="HTML CSS Javascript"
                  title="BMI Calculator"
                  description="Webapp that allows users to calculate their BMI by entering their height and weight, with instant feedback and health classification"
                  gitlink="https://github.com/JohnSummit3rd/bmi-calculator"
                  weblink="https://bmi-calculator-livid-tau.vercel.app/"
                  gif={bmiGif}
                />
              </AnimatedItem>
              <AnimatedItem className="w-full md:w-[48%]">
                <ProjectCard
                  languages="HTML CSS Javascript API"
                  title="SubReddit Fetcher"
                  description="Webapp that allows users to calculate their BMI by entering their height and weight, with instant feedback and health classification"
                  gitlink="https://github.com/JohnSummit3rd/subreddit-posts-finder"
                  weblink="https://subreddit-posts-finder.vercel.app/"
                  gif={srfGif}
                />
              </AnimatedItem>
              <AnimatedItem className="w-full md:w-[48%]">
                <ProjectCard
                  languages="ReactJS TailwindCSS NextJS"
                  title="Aaron Zhang"
                  description="Aaron Zhang is my personal portfolio website where I showcase all of my work and my journey as a software engineer"
                  gif={portGif}
                />
              </AnimatedItem>
            </AnimatedStagger>
          </AnimatedSection>
          <AnimatedSection className="about-me-page flex flex-col w-full max-w-7xl mx-auto mt-30 md:mt-50 gap-5">
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-2xl text-white light:text-[#1e2228] font-medium md:text-4xl md:font-semibold lg:text-5xl"><span className="text-[#7ec0ee] light:text-[#5aa0cc]">//</span>about-me</h1>
              <Link to="/about-me">
                <h1 className="text-white text-sm md:text-lg lg:text-xl hover:cursor-pointer hover:text-[#7ec0ee] hover:scale-110 transition-all duration-300">Read more -&gt;</h1>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 space-y-4">
                <p className="text-[#abb2bf] light:text-[#4b5563] md:text-lg lg:text-xl">Hi, I'm Aaron.</p>
                <p className="text-[#abb2bf] light:text-[#4b5563] md:text-lg lg:text-xl">I'm a frontend-focused developer who enjoys building clean, and responsive web applications.
                  I work primarily with React and TailwindCSS, creating smooth user experiences and modern UI design.</p>
                <p className="text-[#abb2bf] light:text-[#4b5563] md:text-lg lg:text-xl">
                  Outside of coding, you'll find me
                  playing badminton or exploring ways to improve performance and design in my projects.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2 relative">
                <img
                  src={pattern}
                  alt="pattern"
                  className="absolute top-[5%] left-[5%] h-[90px]"
                />
                <img
                  src={pattern}
                  alt="pattern"
                  className="absolute top-[20%] right-[10%] h-[100px]"
                />
                <img
                  src={geometric}
                  alt="geometric"
                  className="absolute top-[50%] left-[15%] h-[130px]"
                />
                <img
                  src={square}
                  alt="square"
                  className="absolute top-[60%] left-[75%] h-[100px] opacity-85"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="contact-me-page relative overflow-hidden flex flex-col w-full max-w-7xl mx-auto mt-30 md:mt-50">
            <img
              src={square}
              alt="square"
              className="hidden md:block absolute top-14 left-[-40px] h-[100px] pointer-events-none"
            />

            <img
              src={pattern}
              alt="pattern"
              className="hidden md:block absolute bottom-20 right-[30px] h-[100px] pointer-events-none"
            />

            <img
              src={geometric}
              alt="geometric"
              className="hidden md:block absolute top-2/3 left-2/5 h-[140px] opacity-70 pointer-events-none"
            />
            <h1 className="text-2xl text-white light:text-[#1e2228] font-medium mb-10 md:text-4xl md:font-semibold lg:text-5xl"><span className="text-[#7ec0ee] light:text-[#5aa0cc]">//</span>contact-me</h1>
            <div className="md:flex gap-10">
              <p className="text-[#abb2bf] light:text-[#4b5563] mb-10 md:text-lg md:w-4/5 lg:text-xl">I'm currently seeking frontend or software engineering internship opportunities. Open to freelance or collaborative projects as well.</p>
              <ContactCard />
            </div>
          </AnimatedSection>
        </div>
      </div >
    </div >
  )
}

export default Home;