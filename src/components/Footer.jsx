import githubIcon from "../assets/github.svg"
import darkGithubIcon from "../assets/github-dark.svg"
import linkedinIcon from "../assets/linkedin.svg"
import darkLinkedinIcon from "../assets/linkedin-dark.svg"


function Footer({ lightMode }) {
  return (
    <footer className={`footer-section pt-20 pb-10 ${lightMode ? "bg-[#f3f6fa]" : "bg-[#282c33]"
      }`}>
      <hr className="border-t border-[#abb2bf] mb-6" />
      <div>
        <div className="flex flex-col items-center">
          <div className="socials mb-5 flex flex-col items-center">
            <h1 className="text-[#abb2bf] light:text-[#4b5563] md:text-lg lg:text-xl">Socials</h1>
            <div className="flex gap-4">
              <a href="https://github.com/JohnSummit3rd"><img className="w-5 h-5 md:w-10 md:h-10" src={lightMode ? darkGithubIcon : githubIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/aaron-zhang4812/"><img className="w-5 h-5 md:w-10 md:h-10" src={lightMode ? darkLinkedinIcon : linkedinIcon} alt="" /></a>
            </div>
          </div>
          <p className="text-center text-[#abb2bf] light:text-[#4b5563] md:text-lg lg:text-xl" >UI/UX design inspired by Elias Dev</p>
          <p className="text-center text-[#abb2bf] light:text-[#4b5563] md:text-lg lg:text-xl">© 2026 Aaron Zhang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

