function ProjectCard({ languages, title, description, gitlink, weblink, gif }) {
  return (
    <div className="w-full border border-[#abb2bf] mb-5 hover:scale-102 transition-transform duration-300">
      {/* VIDEO */}
      <div className="border-b border-[#abb2bf]">
        <img
          src={gif}
          alt="gif"
          className="w-full h-48 object-cover"
        />
      </div>
      {/* LANGUAGES */}
      <div className="border-b border-[#abb2bf] text-[#abb2bf] light:text-[#4b5563] px-2 py-3 flex flex-wrap gap-2">
        {languages.split(" ").map((lang, index) => (
          <span
            key={index}
            className="bg-[#7ec0ee] text-white light:text-[#1e2228] text-sm px-2 py-1 rounded-md md:text-lg lg:text-xl"
          >
            {lang}
          </span>
        ))}
      </div>

      {/* DESCRIPTION */}
      <div className="border-b border-[#abb2bf] text-white light:text-[#1e2228] px-3 py-2 md:text-lg lg:text-xl">
        <span className="font-semibold">{title}</span>
        <br />
        <br />
        <span className="text-[#abb2bf] light:text-[#4b5563]">{description}</span>
        <br />
        <div className="flex w-[80%] justify-between mt-3">
          <a
            className="border-[#7ec0ee] border px-4 py-1 hover:bg-[#7ec0ee]/30 hover:cursor-pointer transition-all duration-300"
            target="_blank"
            href={gitlink}
          >
            Github
          </a>
          <a
            className="border-[#abb2bf] border px-4 py-1 hover:bg-[#abb2bf]/30 hover:cursor-pointer transition-all duration-300"
            target="_blank"
            href={weblink}
          >
            Website
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;