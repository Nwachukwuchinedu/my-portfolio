import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center parallax-container relative overflow-hidden">
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-black/50" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[128px]"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <Typewriter
              options={{
                strings: ["Hello, I'm Simeon", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences through elegant code and creative
            solutions
          </p>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <a
              href="https://github.com/Nwachukwuchinedu"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/chinedu-nwachukwu-921188288"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/simeon3725"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:scale-110 transition-transform"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:chinedu.simeon2020@gmail.com"
              className="glass p-4 rounded-full hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;