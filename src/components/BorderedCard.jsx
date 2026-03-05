function BorderedCard({ title, items }) {
  return (
    <div className="w-full max-w-[300px] border border-[#abb2bf]">
      {/* TITLE */}
      <div className="border-b border-[#abb2bf] text-white light:text-[#1e2228] px-2 py-1 md:text-lg lg:text-xl">
        {title}
      </div>

      {/* ITEMS */}
      <div className="px-2 py-1 leading-relaxed text-[#abb2bf] light:text-[#4b5563] md:text-lg lg:text-xl">
        {items.map((row, index) => (
          <p key={index}>{row}</p>
        ))}
      </div>
    </div>
  );
}

export default BorderedCard;