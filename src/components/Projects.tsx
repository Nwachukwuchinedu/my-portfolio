import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Automate Sending Free Udemy Courses to Telegram",
    description:
      "Developed a free Udemy course scraper that sends 500+ courses daily to my Telegram channel.",
    image: "https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
    tags: ["Node.js", "Web Scraping", "Telegram Bot", "Automation"],
    github: "https://github.com/Nwachukwuchinedu/Course-Orbit-API",
    live: "https://t.me/courseorbit",
  },
  {
    title: "Automated WhatsApp Bot",
    description:
      "Developed a WhatsApp bot using Node.js for sending Udemy free courses automatically.",
    image: "https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
    tags: ["Node.js", "WhatsApp Bot", "Automation"],
    github: "https://github.com/Nwachukwuchinedu/Auto-WhatsApp-Send-Message",
    live: "#",
  },
  {
    title: "Course Orbit",
    description:
      "Built an automated platform that curates and shares free Udemy courses daily.",
    image: "https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
    tags: ["React.js", "TypeScript", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nwachukwuchinedu/Course-Orbit",
    live: "course-orbit.vercel.app",
  },
  {
    title: "Course Orbit API",
    description:
      "Developed a REST API to fetch and deliver free Udemy course data in real-time.",
    image: "https://course-orbit.vercel.app/assets/logo-BdSHE08E.png",
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
  {
    title: "Clergy Website",
    description: "A platform where teachings are uploaded by a pastor.",
    image: "https://clergy-website.vercel.app/assets/favicon-CWSdXv-e.png",
    tags: ["Node.js", "Express.js", "REST API", "Vue.js", "MongoDB"],
    github: "https://github.com/Nwachukwuchinedu/Clergy-Website",
    live: "https://clergy-website.vercel.app/",
  },
  {
    title: "Campus Connect",
    description:
      "Developed a comprehensive full-stack university services marketplace platform using Django REST Framework and React.js.",
    image: "https://campusconnect-omega.vercel.app/favicon.ico",
    tags: ["Django", "Python", "React", "WebSocket"],
    github: "#",
    live: "https://campusconnect-omega.vercel.app/",
  },
  {
    title: "Chat Web App",
    description:
      "A modern, real-time chat application built with Django backend and React frontend.",
    image: "https://chat-web-app-mocha.vercel.app/favicon.ico",
    tags: ["React", "TypeScript", "Django", "WebSocket"],
    github: "#",
    live: "https://chat-web-app-mocha.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <div className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl"
        >
          A collection of projects showcasing my journey in building digital solutions.
        </motion.p>
      </div>

      <div className="flex flex-col gap-12 pb-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="sticky top-32 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-md rounded-[48px] p-8 md:p-12 border border-white/50 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 min-h-[500px] flex flex-col md:flex-row gap-8 items-center"
            style={{
              top: `calc(8rem + ${index * 2}rem)`,
              zIndex: 10 + index
            }}
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-white/10 text-gray-900 dark:text-gray-200 px-4 py-1.5 rounded-lg text-sm font-bold tracking-wide border border-gray-100 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:opacity-70 transition"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                )}
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:opacity-70 transition"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="flex-1 w-full h-[350px] bg-white dark:bg-black/50 rounded-[32px] overflow-hidden flex items-center justify-center relative shadow-inner border border-gray-100 dark:border-white/5 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
