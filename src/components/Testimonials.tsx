import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Osarimen Destiny",
    role: "CEO, TechStart",
    emoji: "🚀",
    bg: "bg-blue-100 dark:bg-blue-900/20",
    text: "John's expertise in full-stack development helped us launch our product ahead of schedule. His attention to detail and problem-solving skills are exceptional."
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    emoji: "💡",
    bg: "bg-yellow-100 dark:bg-yellow-900/20",
    text: "Working with John was a game-changer for our team. His technical knowledge and ability to mentor others significantly improved our development process."
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, DesignPro",
    emoji: "🎨",
    bg: "bg-pink-100 dark:bg-pink-900/20",
    text: "John's ability to translate complex technical concepts into user-friendly solutions is remarkable. He's a true professional who delivers exceptional results."
  }
];

const Testimonials = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 max-w-xl text-gray-900 dark:text-white reveal-on-scroll">Client Testimonials</h2>

      <div className="relative w-full overflow-hidden reveal-on-scroll delay-100">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                className={`${item.bg} rounded-[40px] h-[400px] flex items-center justify-center text-[8rem] md:text-[10rem]`}
              >
                {item.emoji}
              </div>
              <div>
                <div className="flex text-yellow-400 text-xl mb-4">★★★★★</div>
                <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
                  "{item.text}"
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-500 dark:text-gray-300">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 right-0 flex gap-4">
          <button
            onClick={() => setSlide(Math.max(slide - 1, 0))}
            disabled={slide === 0}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 text-black dark:text-white flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current"
          >
            ←
          </button>
          <button
            onClick={() => setSlide(Math.min(slide + 1, testimonials.length - 1))}
            disabled={slide === testimonials.length - 1}
            className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-80 transition disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;