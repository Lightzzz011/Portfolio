import { motion } from 'framer-motion';
import { Download, GraduationCap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';

const skills = {
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5"],
  backend: ["Node.js", "Express", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
};

const AboutPage = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-zinc-800/30">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-6">About Me</h1>
                <p className="text-lg mb-6">
                  I'm Sai Srinivas, A frontend Developer with expertise in building scalable 
                  web applications using modern technologies. I enjoy solving complex problems with my team, 
                  continuously learning new skills to stay at the forefront of web development.
                </p>
                <p className="text-lg mb-6">
                  With a background in computer science and years of hands-on experience, 
                  I bring a blend of technical knowledge, creativity, and problem-solving abilities 
                  to every project I work on.
                </p>
                <a 
                  href="/SaiSrinivasResume.pdf" 
                  className="btn-primary inline-flex items-center"
                  download
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4065151/pexels-photo-4065151.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                  alt="Sai Srinivas" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-blue-500/10 dark:bg-blue-500/5 rounded-xl -z-10 transform translate-x-6 translate-y-6"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-spacing">
        <div className="container-main">
          <SectionHeading 
            title="Technical Skills" 
            subtitle="The tools and technologies I work with"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <SkillBadge key={skill} name={skill} index={index} />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <SkillBadge key={skill} name={skill} index={index} />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={skill} name={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-zinc-800/30">
        <div className="container-main">
          <SectionHeading 
            title="Education" 
            subtitle="My academic background"
          />
          
          <div className="space-y-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card relative border-l-4 border-blue-600 dark:border-blue-500 pl-6 ml-4"
            >
              {/* Circle on timeline */}
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -left-[10px] top-6 border-4 border-white dark:border-zinc-900"></div>
              
              <div className="flex items-center mb-2">
                <GraduationCap className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science</h3>
              </div>
              <h4 className="text-lg mb-2">Anurag University, Hyderabad</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">2023 - 2027</p>
              <p>On-going with a focus on software engineering, data structures, algorithms, and web development technologies.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card relative border-l-4 border-green-600 dark:border-green-500 pl-6 ml-4"
            >
              {/* Circle on timeline */}
              <div className="absolute w-4 h-4 bg-green-600 dark:bg-green-500 rounded-full -left-[10px] top-6 border-4 border-white dark:border-zinc-900"></div>
              
              <div className="flex items-center mb-2">
                <GraduationCap className="h-6 w-6 mr-3 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold">MPC</h3>
              </div>
              <h4 className="text-lg mb-2">Sri-Chaitanya Jr kalasala, Narsingi</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">2022</p>
              <p>Was at a background of Mathmatics, Physics and chemistry.</p>
            </motion.div>

          
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="section-spacing">
        <div className="container-main">
          <SectionHeading 
            title="Beyond Coding" 
            subtitle="When I'm not immersed in code, you'll find me engaging in these activities"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <div className="rounded-full w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=150" 
                     alt="Travel"
                     className="w-8 h-8 object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Traveling</h3>
              <p>Exploring new places, and capturing memories with friends.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <div className="rounded-full w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=150" 
                     alt="Reading"
                     className="w-8 h-8 object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reading</h3>
              <p>Diving into science fiction, and personal development literature to expand my knowledge.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center"
            >
              <div className="rounded-full w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=150" 
                     alt="Sports"
                     className="w-8 h-8 object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sports</h3>
              <p>Playing football to stay active.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;