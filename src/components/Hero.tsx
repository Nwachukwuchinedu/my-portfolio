import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg"
        >
          <span className="inline-block bg-[#D9F99D] dark:bg-green-900 dark:text-green-300 text-black text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Full Stack Developer
          </span>
          <h1 className="text-6xl md:text-[5rem] font-bold tracking-tight leading-[1] mb-6 text-gray-900 dark:text-white">
            Turn your ideas into digital reality
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            I build accessible, pixel-perfect, performant, and delightful digital
            experiences. Experienced in building scalable web applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition duration-300 hover:border-gray-900 dark:hover:border-white shadow-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Nwachukwuchinedu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition bg-white dark:bg-gray-800"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/chinedu-nwachukwu-921188288"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition bg-white dark:bg-gray-800"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitter.com/simeon3725"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition bg-white dark:bg-gray-800"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:chinedu.simeon2020@gmail.com"
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition bg-white dark:bg-gray-800"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-[48px] overflow-hidden bg-[#F3F4F6] dark:bg-gray-800 aspect-square relative flex items-center justify-center shadow-2xl dark:shadow-none">
            <div className="absolute inset-0 bg-[#E9D5FF] dark:bg-purple-900/50"></div>
            <div className="absolute inset-0 bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-full translate-x-12 translate-y-12 blur-3xl"></div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-[12rem] md:text-[15rem] relative z-10 drop-shadow-2xl"
            >
              👨‍💻
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;