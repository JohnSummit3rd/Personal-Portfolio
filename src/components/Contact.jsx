import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <>
      <div className="bg-[#282c33] light:bg-[#f3f6fa] min-h-screen flex flex-col relative overflow-hidden-x">
        <img
          src="src/assets/pattern.svg"
          alt=""
          className="hidden lg:block absolute top-[8%] left-[-60px] h-[120px] pointer-events-none"
        />
        <img
          src="src/assets/square.svg"
          alt=""
          className="hidden lg:block absolute top-[22%] right-[-50px] h-[140px] pointer-events-none"
        />
        <img
          src="src/assets/pattern.svg"
          alt=""
          className="hidden lg:block absolute top-[40%] left-[-80px] h-[150px] pointer-events-none"
        />
        <img
          src="src/assets/square.svg"
          alt=""
          className="hidden lg:block absolute top-[55%] right-[-70px] h-[120px] pointer-events-none"
        />
        <img
          src="src/assets/square.svg"
          alt=""
          className="hidden lg:block absolute bottom-[15%] left-[-90px] h-[180px] pointer-events-none"
        />
        <div className="flex-grow pt-[60px] px-[40px] pb-[60px]">
          <section className="max-w-7xl mx-auto">
            <h1 className="text-white light:text-[#1e2228] text-2xl font-medium mt-10 md:text-4xl lg:text-5xl mb-5"><span className="text-[#7ec0ee]">/</span>contact</h1>
            <div className="flex flex-col md:flex-row md:gap-10 gap-5 mb-10">
              <p className="text-[#abb2bf] light:text-[#1e2228] md:text-lg lg:text-xl md:w-1/2">I'm currently seeking frontend or software engineering internship opportunities. Open to freelance or collaborative projects as well.</p>
              <ContactCard />
            </div>
            <div className="flex justify-between gap-5">
              <div className="hidden md:flex w-1/2 items-center justify-center border border-[#abb2bf]">
                <img src="src/assets/geometric.svg" alt="geometric" className="hidden md:block w-50 h-50 animate-spin-scale" />
              </div>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contact;