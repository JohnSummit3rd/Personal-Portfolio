import BorderedCard from "./BorderedCard";

import pattern from "../assets/pattern.svg"
import square from "../assets/square.svg"

function AboutMe() {
  return (
    <>
      <div className="bg-[#282c33] light:bg-[#f3f6fa] min-h-screen pt-[60px] px-[20px] pb-[60px] relative overflow-x-hidden">
        <img
          src={pattern}
          alt="pattern"
          className="hidden lg:block absolute top-[5%] left-[-70px] h-[140px] pointer-events-none"
        />
        <img
          src={square}
          alt="square"
          className="hidden lg:block absolute top-[25%] right-[-60px] h-[130px] pointer-events-none"
        />
        <img
          src={pattern}
          alt="pattern"
          className="hidden lg:block absolute top-[45%] left-[-50px] h-[120px] pointer-events-none"
        />
        <img
          src={square}
          alt="square"
          className="hidden lg:block absolute top-[60%] right-[-40px] h-[110px] pointer-events-none"
        />
        <section className="max-w-7xl mx-auto">
          <h1 className="text-white light:text-[#1e2228] text-2xl font-medium mt-10 md:text-4xl lg:text-5xl"><span className="text-[#7ec0ee]">/</span>about-me</h1>

          <p className="text-[#abb2bf] light:text-[#4b5563] mt-10 md:text-lg lg:text-xl">
            Hi, I'm Aaron Zhang.
          </p>

          <p className="text-[#abb2bf] light:text-[#4b5563] mt-4 md:text-lg lg:text-xl">
            I'm a frontend-focused developer passionate about building clean, responsive web applications.
            I mainly work with React and TailwindCSS, creating smooth user experiences and modern interfaces.
          </p>

          <p className="text-[#abb2bf] light:text-[#4b5563] mt-4 md:text-lg lg:text-xl">
            I enjoy breaking down complex problems into simple, reusable components and ensuring every project is both functional and visually appealing.
          </p>

          <p className="text-[#abb2bf] light:text-[#4b5563] mt-4 md:text-lg lg:text-xl">
            Outside of coding, I play badminton and currently serve as the President of the UNSW Badminton Society,
            where I organize events and lead the team.
          </p>
          <section className="skills">
            <h1 className="text-white light:text-[#1e2228] text-2xl font-medium mt-10 mb-5 md:text-4xl lg:text-5xl"><span className="text-[#7ec0ee]">#</span>my-skills</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 w-full lg:gap-2 items-start mb-4">
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
          </section>
          <section className="my-fun-facts">
            <h1 className="text-white light:text-[#1e2228] text-2xl font-medium mt-10 mb-5 md:text-4xl lg:text-5xl"><span className="text-[#7ec0ee]">#</span>my-fun-facts</h1>
            <p className="border border-[#abb2bf] text-[#abb2bf] light:text-[#4b5563] px-2 py-1 mb-5 md:text-lg lg:text-xl">
              I'm currently the president of UNSW Badminton Club 🏸
            </p>
            <p className="border border-[#abb2bf] text-[#abb2bf] light:text-[#4b5563] px-2 py-1 mb-5 md:text-lg lg:text-xl">
              My favourite video game 🎮 is Dark Souls Remastered
            </p>
            <p className="border border-[#abb2bf] text-[#abb2bf] light:text-[#4b5563] px-2 py-1 mb-5 md:text-lg lg:text-xl">
              I can type really fast ⌨️
            </p>
            <p className="border border-[#abb2bf] text-[#abb2bf] light:text-[#4b5563] px-2 py-1 mb-5 md:text-lg lg:text-xl">
              I make mini web dev projects for fun 🌐
            </p>
            <p className="border border-[#abb2bf] text-[#abb2bf] light:text-[#4b5563] px-2 py-1 mb-5 md:text-lg lg:text-xl">
              I am a fan of dark mode interfaces... almost exclusively 🕶️
            </p>
          </section>
        </section>
      </div>
    </>
  )
}

export default AboutMe;