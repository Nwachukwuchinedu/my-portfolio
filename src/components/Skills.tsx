import { Database, Globe, Layout, Server, PenTool as Tool } from 'lucide-react';
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8" />,
      skills: ["React.js", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Python", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8" />,
      skills: ["MongoDB", "MySQL", "Supabase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Tool className="w-8 h-8" />,
      skills: ["Git", "Docker"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gray-400 font-medium text-sm mb-4 block">What I do</span>
        <h2 className="text-5xl font-bold mb-6 max-w-2xl mx-auto">Skills & Expertise</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto text-lg">
          A comprehensive set of technologies I use to build scalable and robust applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, backgroundColor: "#F3F4F6" }}
            className="bg-[#F9FAFB] p-8 rounded-[32px] hover:shadow-lg transition-colors duration-300"
          >
            <div className="text-3xl mb-4 bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm text-gray-900">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {category.skills.join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;