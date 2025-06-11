import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Heart, Github, Linkedin, Instagram } from 'lucide-react';


const Home = () => {
  const name = "SAI SRINIVAS";
  const title1 = "Developer";
  const title2 = "+ Designer";

  const socialItems = [
    { icon: Github, href: 'https://github.com/Lightzzz011', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saikoluguri/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/saikolugurii/', label: 'Instagram' }
  ];

  const skills = [
    { icon: Code, title: "Full-Stack Development", desc: "Building end-to-end solutions with modern frameworks" },
    { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful and intuitive user experiences" },
    { icon: Rocket, title: "Performance Optimization", desc: "Delivering fast, scalable applications" },
    { icon: Heart, title: "User-Centered Design", desc: "Focusing on accessibility and usability" }
  ];

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.01,
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
        type: "spring",
        stiffness: 100
      }
    })
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 1.2,
        ease: [1, 0.01, -0.05, 0.95],
        type: "spring",
        stiffness: 80
      }
    })
  };

  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >
   
      <section className="min-h-screen flex items-center justify-center px-6 md:px-20 relative">
        <div className="max-w-6xl mx-auto text-center md:text-left">
       
          <motion.div 
            className="mb-8 md:mb-12"
            initial="hidden"
            animate="visible"
          >
            <div className="text-gray-400 text-sm md:text-base tracking-[0.3em] mb-4 font-light">
              {name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            <motion.h1
              custom={1.5}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight"
            >
              {title1}
            </motion.h1>
            
            <motion.h2
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-400 leading-none tracking-tight flex items-center justify-center md:justify-start"
            >
              <span className="text-gray-600 mr-4 md:mr-8">+</span>
              {title2.substring(1)}
            </motion.h2>
          </div>

          <motion.button
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3, duration: 1 }}
  onClick={scrollToAbout}
  className="absolute bottom-8 right-1/4 -translate-x-1/2 md:right-1/4 md:translate-x-[-50%] cursor-pointer group"
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-gray-400 transition-colors"
  >
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-gray-300"
    />
  </motion.div>
  <div className="mt-2 text-gray-500 text-xs tracking-wider">SCROLL</div>
</motion.button>


    
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute top-1/4 right-10 hidden lg:block"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-2 h-2 bg-gray-500 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-1/3 right-1/4 hidden lg:block"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-1 h-1 bg-gray-400 rounded-full"
            />
          </motion.div>
        </div>
      </section>

      <section id="about-section" className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-gray-500">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              I'm a 3rd-year Computer Science student exploring the world of web development.
Alongside that, I'm steadily strengthening my DSA foundations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-400 leading-relaxed">
                I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship.

The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage.

Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies. I believe in the power of collaboration and 
                the importance of writing clean, maintainable code.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">5</div>
                    <div className="text-gray-500">Projects</div>
                  </div>
          
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">4+</div>
                    <div className="text-gray-500">Technologies</div>
                  </div>
          
                </div>
              </div>
            </motion.div>
          </div>






















          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-25"
      >
        <div className="flex space-x-6">
          {socialItems.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                className="text-gray-500 hover:text-white transition-colors duration-300"
                title={social.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};







export default Home;