import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Code, Globe, Laptop } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: <Code />, label: 'Projects Completed', value: '10+' },
    { icon: <Coffee />, label: 'Cups of Coffee', value: '100+' },
    { icon: <Globe />, label: 'Countries Reached', value: '1' },
    { icon: <Laptop />, label: 'Years Experience', value: '4+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with 4+ years of experience in crafting digital solutions. 
                I specialize in building scalable web applications using modern technologies and best practices.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 glass rounded-lg"
                >
                  <div className="text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;