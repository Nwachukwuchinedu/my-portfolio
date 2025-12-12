import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Clients Worldwide", value: "20+" },
    { label: "Open Source Contributions", value: "100+" },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-orange-100 dark:bg-orange-900/20 rounded-[40px] p-12 aspect-square flex items-center justify-center overflow-hidden">
            <motion.span
              className="text-[10rem] md:text-[14rem] cursor-pointer inline-block"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🛋️
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">Why hire me?</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
            I'm not just a developer; I'm a problem solver who bridges the gap
            between complex technology and intuitive user experiences. My approach
            combines technical expertise with a keen eye for design.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5 hover:transform hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;