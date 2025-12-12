import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Backend Developer & Backend Team Lead",
      company: "Diviva Ltd",
      location: "Remote (Lagos, Nigeria)",
      period: "2025",
      description: `Led the backend team at Diviva Ltd, architecting and developing robust RESTful APIs for multiple platforms, including a recruiting platform.Oversaw the implementation of advanced features such as Applicant Tracking Systems(ATS) and an AI - powered chat application.`,
    },
    {
      type: "work",
      title: "Frontend Web Developer",
      company: "Achilles Drill",
      location: "Lagos State, Nigeria",
      period: "2024 - Present",
      description: `Collaborated with the Achilles Drill team to develop a responsive and user - friendly website using Vue.js.Designed and implemented the user interface, integrated REST APIs, and implemented authentication.`,
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "SPE UNIBEN Chapter",
      location: "Edo State, Nigeria",
      period: "2019 - 2021",
      description: `Developed and maintained the SPE UNIBEN voting website using Vue.js, CSS3, JavaScript, Chart.js, Node.js, and MongoDB.Implemented responsive design principles for cross - device compatibility.`,
    },
    {
      type: "education",
      title: "Bachelor's in Petroleum Engineering",
      company: "University of Benin",
      location: "Edo State, Nigeria",
      period: "2020 - present",
      description: `Gaining in -depth knowledge of engineering principles.Engaged in hands - on projects, research, and technical presentations.Ranked among top 10 in Engineering Mathematics competitions.`,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
      >
        Experience & Education
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-[40px] hover:shadow-lg transition duration-300 border border-transparent dark:border-white/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm text-gray-900 dark:text-white">
                {item.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.company}</h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">{item.period}</p>
              </div>
            </div>

            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h4>

            <div className="flex items-center text-sm text-gray-400 dark:text-gray-500 mb-6 font-medium">
              <MapPin className="w-4 h-4 mr-1" />
              {item.location}
            </div>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
