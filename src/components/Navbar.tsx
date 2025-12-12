import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/90 backdrop-blur-lg z-50 py-4 transition-all duration-300 border-b border-gray-100 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer text-gray-900 dark:text-white">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 flex items-center justify-center text-white text-xs">S</div>
          Simeon
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className='flex items-center gap-4'>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a
              href="#contact"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lg font-medium text-gray-900 dark:text-white py-2 hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;