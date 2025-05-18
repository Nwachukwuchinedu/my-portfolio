import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Automate Sending Free Udemy Courses to Telegram",
    description:
      "Developed a free Udemy course scraper that sends 500+ courses daily to my Telegram channel.",
    image: "	https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
    tags: ["Node.js", "Web Scraping", "Telegram Bot", "Automation"],
    github: "https://github.com/Nwachukwuchinedu/Course-Orbit-API",
    live: "https://t.me/courseorbit",
  },
  {
    title: "Automated WhatsApp Bot",
    description:
      "Developed a WhatsApp bot using Node.js for sending Udemy free courses automatically.",
    image: "	https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
    tags: ["Node.js", "WhatsApp Bot", "Automation"],
    github: "https://github.com/Nwachukwuchinedu/Auto-WhatsApp-Send-Message",
    live: "#",
  },
  {
    title: "Course Orbit",
    description:
      "Built an automated platform that curates and shares free Udemy courses daily.",
    image: "	https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
    tags: ["React.js", "TypeScript", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nwachukwuchinedu/Course-Orbit",
    live: "course-orbit.vercel.app",
  },
  {
    title: "Course Orbit API",
    description:
      "Developed a REST API to fetch and deliver free Udemy course data in real-time.",
    image: "	https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
    tags: ["Node.js", "Express.js", "REST API", "Puppeteer"],
    github: "https://github.com/Nwachukwuchinedu/Course-Orbit-API",
    live: "https://course-orbit-api.onrender.com/",
  },
  {
    title: "Multi Role Blog Platform",
    description:
      "A platform where users can register as Readers, Authors, or Admins, and can post, like, and comment on blog posts.",
    image:
      "https://multi-role-blog-platform.vercel.app/assets/favicon-DKNMzfRO.png",
    tags: ["Node.js", "Express.js", "REST API", "Vue.js", "MongoDB"],
    github: "https://github.com/Nwachukwuchinedu/Multi-Role-Blog-Platform",
    live: "https://multi-role-blog-platform.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="glass rounded-xl overflow-hidden"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
