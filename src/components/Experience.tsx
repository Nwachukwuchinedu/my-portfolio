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
      description: `Led the backend team at Diviva Ltd, architecting and developing robust RESTful APIs for multiple platforms, including a recruiting platform. Oversaw the implementation of advanced features such as Applicant Tracking Systems (ATS) and an AI-powered chat application.`,
    },
    {
      type: "work",
      title: "Frontend Web Developer",
      company: "Achilles Drill",
      location: "Lagos State, Nigeria",
      period: "2024 - Present",
      description: `Collaborated with the Achilles Drill team to develop a responsive and user-friendly website using Vue.js. Designed and implemented the user interface, integrated REST APIs, and implemented authentication.`,
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "SPE UNIBEN Chapter",
      location: "Edo State, Nigeria",
      period: "2019 - 2021",
      description: `Developed and maintained the SPE UNIBEN voting website using Vue.js, CSS3, JavaScript, Chart.js, Node.js, and MongoDB. Implemented responsive design principles for cross-device compatibility.`,
    },
    {
      type: "education",
      title: "Bachelor's in Petroleum Engineering",
      company: "University of Benin",
      location: "Edo State, Nigeria",
      period: "2020 - present",
      description: `Gaining in-depth knowledge of engineering principles. Engaged in hands-on projects, research, and technical presentations. Ranked among top 10 in Engineering Mathematics competitions.`,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Experience & Education
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-[#F9FAFB] p-10 rounded-[40px] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-900">
                {item.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
              </div>
              <div>
                <h3 className="text-xl font-bold">{item.company}</h3>
                <p className="text-sm text-gray-400 font-medium">{item.period}</p>
              </div>
            </div>

            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>

            <div className="flex items-center text-sm text-gray-400 mb-6 font-medium">
              <MapPin className="w-4 h-4 mr-1" />
              {item.location}
            </div>

            <p className="text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
