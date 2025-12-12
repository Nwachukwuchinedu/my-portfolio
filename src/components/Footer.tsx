const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 flex items-center justify-center text-white text-xs">S</div>
          Simeon
        </div>

        <div className="flex gap-8 text-gray-600 dark:text-gray-400 font-medium">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-gray-400 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} Simeon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;