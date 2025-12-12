const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-black font-bold text-sm">Home</a>
          <a href="#projects" className="text-gray-500 hover:text-black font-bold text-sm">Projects</a>
          <a href="#about" className="text-gray-500 hover:text-black font-bold text-sm">About</a>
          <a href="#contact" className="text-gray-500 hover:text-black font-bold text-sm">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Nwachukwuchinedu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center font-bold text-xs hover:scale-110 transition">GH</a>
          <a href="https://www.linkedin.com/in/chinedu-nwachukwu-921188288" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center font-bold text-xs hover:scale-110 transition">LI</a>
          <a href="https://www.twitter.com/simeon3725" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center font-bold text-xs hover:scale-110 transition">X</a>
        </div>
        <div className="text-gray-400 text-sm">
          © {currentYear} Simeon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;