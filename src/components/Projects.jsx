import ProjectCard from "./ProjectCard";

import bmiGif from "../assets/bmi.gif"
import srfGif from "../assets/subredditfinder.gif"
import portGif from "../assets/portfolio.gif"

import pattern from "../assets/pattern.svg"
import square from "../assets/square.svg"

function Projects() {

  return (
    <div className="bg-[#282c33] light:bg-[#f3f6fa] min-h-screen flex flex-col relative overflow-x-hidden">
      <img
        src={pattern}
        alt="pattern"
        className="hidden lg:block absolute top-[10%] left-[-80px] h-[160px] pointer-events-none"
      />
      <img
        src={square}
        alt="square"
        className="hidden lg:block absolute top-[20%] right-[-50px] h-[120px] pointer-events-none"
      />
      <img
        src={square}
        alt="square"
        className="hidden lg:block absolute top-[35%] right-[-30px] h-[140px] pointer-events-none"
      />
      <img
        src={pattern}
        alt="pattern"
        className="hidden lg:block absolute top-[40%] left-[-70px] h-[120px] pointer-events-none"
      />
      <img
        src={pattern}
        alt="pattern"
        className="hidden lg:block absolute top-[55%] right-[-40px] h-[120px] pointer-events-none"
      />
      <img
        src={square}
        alt="square"
        className="hidden lg:block absolute bottom-[15%] left-[-100px] h-[180px] pointer-events-none"
      />
      <div className="flex-grow pt-[60px] px-[20px] pb-[60px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white light:text-[#1e2228] text-2xl font-medium mt-10 md:text-4xl lg:text-5xl mb-5"><span className="text-[#7ec0ee]">/</span>projects</h1>
          <p className="text-white light:text-[#1e2228] md:text-lg lg:text-xl">Here are a list of all my projects.</p>
          <section className="front-end-projects">
            <h1 className="text-white light:text-[#1e2228] text-2xl md:text-4xl lg:text-5xl font-medium mt-15"><span className="text-[#7ec0ee]">#</span>frontend-projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
              <ProjectCard
                languages="HTML CSS Javascript"
                title="BMI Calculator"
                description="Webapp that allows users to calculate their BMI by entering their height and weight, with instant feedback and health classification"
                gitlink="https://github.com/JohnSummit3rd/bmi-calculator"
                weblink="https://bmi-calculator-livid-tau.vercel.app/"
                gif={bmiGif}
              />
              <ProjectCard
                languages="HTML CSS Javascript API"
                title="SubReddit Fetcher"
                description="Webapp that allows users to calculate their BMI by entering their height and weight, with instant feedback and health classification"
                gitlink="https://github.com/JohnSummit3rd/subreddit-posts-finder"
                weblink="https://subreddit-posts-finder.vercel.app/"
                gif={srfGif}
              />
              <ProjectCard
                languages="ReactJS TailwindCSS NextJS"
                title="Aaron Zhang"
                description="Aaron Zhang is my personal portfolio website where I showcase all of my developer work and my journey as a software engineer"
                gitlink="https://github.com/JohnSummit3rd/Personal-Portfolio"
                weblink="https://personal-portfolio-mu-fawn.vercel.app/"
                gif={portGif}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Projects;
