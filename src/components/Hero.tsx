import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-[#D9F99D] text-black text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-[5rem] font-bold tracking-tight leading-[1] mb-6"
          >
            Turn your ideas into digital reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 mb-8 leading-relaxed max-w-md"
          >
            I craft responsive, high-performance web applications with modern technologies, turning complex requirements into seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-black text-white px-8 py-4 rounded-full font-medium transition"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-4 rounded-full font-medium text-gray-600 transition"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-4"
          >
            <div className="flex gap-2">
              {[
                { href: "https://github.com/Nwachukwuchinedu", icon: Github },
                { href: "https://www.linkedin.com/in/chinedu-nwachukwu-921188288", icon: Linkedin },
                { href: "https://www.twitter.com/simeon3725", icon: Twitter },
                { href: "mailto:chinedu.simeon2020@gmail.com", icon: Mail },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, backgroundColor: "#e5e7eb" }}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full transition"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="text-sm font-medium">
              <span className="text-gray-500">Available for work</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="relative"
        >
          <div className="rounded-[48px] overflow-hidden bg-[#F3F4F6] aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#E9D5FF]"></div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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