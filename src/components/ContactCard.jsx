import email from "../assets/email.svg"

function ContactCard() {
  return (
    <div className="w-full border border-[#abb2bf] flex flex-col px-3 py-1 md:text-lg lg:text-xl md:w-1/2">
      <h1 className="text-white light:text-[#1e2228]">Contact me here</h1>
      <div className="flex gap-2">
        <a href="mailto:aaronzhang363@gmail.com"><img src={email} alt="email" className="w-5 h-5 mt-0.5 md:w-10 md:h-10" /></a>
        <a href="mailto:aaronzhang363@gmail.com" className="text-[#abb2bf] light:text-[#4b5563]">aaronzhang363@gmail.com</a>
      </div>
    </div>
  )
}

export default ContactCard;