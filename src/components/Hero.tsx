import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        <div className="max-w-lg reveal-on-scroll">
          <span className="inline-block bg-[#D9F99D] text-black text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Full Stack Developer
          </span>
          <h1 className="text-6xl md:text-[5rem] font-bold tracking-tight leading-[1] mb-6">
            Turn your ideas into digital reality
          </h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-md">
            I craft responsive, high-performance web applications with modern technologies, turning complex requirements into seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-10">
            <a href="#projects" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition transform duration-200">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-4 rounded-full font-medium text-gray-600 hover:bg-gray-100 transition">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <a href="https://github.com/Nwachukwuchinedu" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chinedu-nwachukwu-921188288" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://www.twitter.com/simeon3725" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <Twitter size={20} />
              </a>
              <a href="mailto:chinedu.simeon2020@gmail.com" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <Mail size={20} />
              </a>
            </div>
            <div className="text-sm font-medium">
              <span className="text-gray-500">Available for work</span>
            </div>
          </div>
        </div>

        <div className="relative reveal-on-scroll delay-200">
          <div className="rounded-[48px] overflow-hidden bg-[#F3F4F6] aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#E9D5FF]"></div>
            <div className="text-[12rem] md:text-[15rem] relative z-10 drop-shadow-2xl">👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;