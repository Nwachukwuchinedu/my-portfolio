import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Globe, Layout, Server, Smartphone, PenTool as Tool } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout />,
      skills: ["React.js", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend Development",
      icon: <Server />,
      skills: ["Node.js", "Python", "Express", "REST APIs"]
    },
    {
      title: "Database",
      icon: <Database />,
      skills: [ "MongoDB", "MySQL", "Supabase"]
    },
    // {
    //   title: "Mobile Development",
    //   icon: <Smartphone />,
    //   skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"]
    // },
    {
      title: "DevOps & Tools",
      icon: <Tool />,
      skills: ["Git", "Docker"]
    },
    {
      title: "Web Technologies",
      icon: <Globe />,
      skills: ["HTML5", "CSS3", "SCSS", "JavaScript"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;