import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F9FAFB] rounded-[40px] p-12 flex items-center justify-center min-h-[400px]"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-[10rem] drop-shadow-xl cursor-pointer"
          >
            🛋️
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-2 block">About Me</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Passionate about clean code and user experience</h2>
          <p className="text-gray-500 text-lg mb-8">
            I'm a Full Stack Developer with 4+ years of experience in crafting digital solutions.
            I specialize in building scalable web applications using modern technologies and best practices.
            When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-bold text-4xl mb-2">4+</h4>
              <p className="text-sm text-gray-500">Years of Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-bold text-4xl mb-2">10+</h4>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;