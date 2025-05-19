import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Zap, User, Briefcase as BriefcaseBusiness } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express", 
  "MongoDB", "SQL", "HTML/CSS", "Tailwind CSS", "Git", 
  "RESTful APIs", "AWS", "Docker", "Python"
];

const projectsPreview = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "/projects"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks with features like drag-and-drop, categories, and deadline notifications.",
    image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    link: "/projects"
  }
];

const HomePage = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
                Full-Stack Developer
              </span>
              <h1 className="mb-6">
                Hello, I'm <span className="text-blue-600 dark:text-blue-400">Sai Srinivas</span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl">Building digital solutions that matter</span>
              </h1>
              <p className="text-lg mb-8 max-w-lg">
                A 3rd year Computer Scince background developer focused on creating exceptional user experiences with 
                modern technologies and clean, efficient code.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="w-full h-[500px] relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="Sai Srinivas" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 -z-10 w-full h-full bg-blue-600/20 dark:bg-blue-600/10 rounded-xl transform translate-x-6 translate-y-6"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl -z-10"></div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white dark:bg-zinc-800/30">
        <div className="container-main">
          <SectionHeading 
            title="About Me" 
            subtitle="I'm a skilled developer with a passion for building modern, performant web applications."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-6">
                With a strong foundation in frontend Technology, I specialize in creating 
                 user-centered applications that solve real-world problems.
              </p>
              <p className="mb-6">
                I'm constantly learning and staying up-to-date with the latest industry trends and best practices,
                which enables me to deliver good solutions for every project I take on.
              </p>
              <Link to="/about" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group">
                Learn more about me 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="card flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Web Development</h3>
                <p className="text-sm">Creating responsive and interactive web applications with modern technologies.</p>
              </div>
              
              <div className="card flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Full-Stack Solutions</h3>
                <p className="text-sm">Building complete applications from database to user interface.</p>
              </div>
              
              <div className="card flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Performance Optimization</h3>
                <p className="text-sm">Ensuring applications run smoothly and efficiently across all devices.</p>
              </div>
              
              <div className="card flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">User-Centered Design</h3>
                <p className="text-sm">Crafting intuitive interfaces focused on exceptional user experiences.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-spacing">
        <div className="container-main">
          <SectionHeading 
            title="My Skills" 
            subtitle="The technologies and tools I use to bring ideas to life"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} name={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white dark:bg-zinc-800/30">
        <div className="container-main">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my recent work - solving problems through innovative solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsPreview.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-primary">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="section-spacing">
        <div className="container-main">
          <SectionHeading 
            title="Work Experience" 
            subtitle="My professional journey as a developer"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <BriefcaseBusiness className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p className="text-blue-600 dark:text-blue-400">TechSolutions Inc.</p>
              </div>
            </div>
            <p className="mb-4">
              As a Frontend Developer at TechSolutions, I was responsible for building responsive 
              and interactive user interfaces using modern web technologies, collaborating with design 
              and backend teams to deliver exceptional user experiences.
            </p>
            <Link to="/experience" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group">
              View all experience 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 py-16">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white mb-6">Interested in working together?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="bg-white text-blue-700 hover:bg-blue-50 btn">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;