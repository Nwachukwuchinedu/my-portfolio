import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: "work",
      title: "Frontend Web Developer",
      company: "Achilles Drill",
      location: "Lagos State, Nigeria",
      period: "2024 - Present",
      description: `Collaborated with the Achilles Drill team to develop a
responsive and user-friendly website using
Vue.js. Designed and implemented the user interface,
integrated REST APIs, and implemented
authentication. Ensured cross-browser compatibility and
optimized application performance. Built a certifica
and birthday generator.`,
    },
    {
      type: "work",
      title: "Backend Developer & Backend Team Lead",
      company: "Diviva Ltd",
      location: "Remote (Lagos, Nigeria)",
      period: "2025 - Present",
      description: `Led the backend team at Diviva Ltd, architecting and 
      developing robust RESTful APIs for multiple platforms, including a
       recruitment platform and a real estate solution.
        Oversaw the implementation of advanced features such as
         Applicant Tracking Systems (ATS) and an AI-powered chat
          application for automated user engagement. 
          Utilized Node.js, Python, and MongoDB to deliver scalable,
           high-performance backend services.
            Collaborated cross-functionally to ensure seamless integration
             and deployment of backend solutions in a remote-first environment.`,
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "SPE UNIBEN Chapter",
      location: "Edo State, Nigeria",
      period: "2019 - 2021",
      description: `Developed and maintained the SPE UNIBEN voting
website using Vue.js, CSS3, JavaScript, Chart.js, Node.js,
and MongoDB. Implemented responsive design
principles for cross-device compatibility. Utilized Chart.js
for data visualization and Node.js with MongoDB for
backend functionality.`,
    },
    {
      type: "education",
      title: "Bachelor's in Petroleum Engineering",
      company: "University of Benin",
      location: "Edo State, Nigeria",
      period: "2020 - present",
      description: `Gaining in-depth knowledge of petroleum exploration, reservoir engineering, drilling operations, 
      and production technology. Engaged in hands-on projects, research, and technical presentations.
      Participated in Engineering Mathematics competitions, ranking among the top 10 out of 1000+ students. `,
    },
    {
      type: "education",
      title: "Senior Secondary Certificate Examination",
      company: "Baptist High School",
      location: "Edo State, Nigeria",
      period: "2014 - 2020",
      description: `Built a strong foundation in mathematics, physics, and chemistry,
         essential for engineering studies. Participated in competitions. Developed problem-solving skills and leadership abilities 
         through extracurricular activities.`,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Experience & Education
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="mb-8 relative"
              >
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-400 mr-3">
                      {item.type === "work" ? <Briefcase /> : <GraduationCap />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
