import { useState, useEffect } from "react";

function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [text]);
  return <h1 className="text-4xl text-white light:text-[#1e2228] font-semibold md:text-8xl">{displayed}</h1>;
}

export default Typewriter;