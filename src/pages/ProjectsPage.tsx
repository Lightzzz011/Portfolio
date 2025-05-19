import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks with features like drag-and-drop, categories, and deadline notifications.",
    image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["React","CSS", "Node.js"]
  },
  {
    title: "Real-time Chat Application",
    description: "A messaging platform allowing users to communicate in real-time with features like read receipts, online status, and file sharing.",
    image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["React", "Socket.io", "Node.js", "Express"]
  },
  {
    title: "Personal Finance Tracker",
    description: "An application for tracking income, expenses, and savings with visualization tools and budgeting features.",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["React", "Chart.js", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Parking Reservation system",
    description: "Created a system to track available parking spots and show them on a webpage. It helps users check availability, reduce congestion, and make reservations.",
    image: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&h=750&w=126",
    tags: ["React", "Tailwind CSS", "Python", "API Integration"]
  },
  {
    title: "Recipe Sharing Platform",
    description: "A community-based recipe sharing site where users can post, search, and save recipes with social features.",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["Next.js", "MongoDB", "API Integration", "Tailwind CSS"]
  }
];

const ProjectsPage = () => {
  // Filter function for project categories (could be expanded in a real implementation)
  const allProjects = projects;
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-zinc-800/30">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">My Projects</h1>
            <p className="text-lg mb-8">
              Here's a collection of my recent work showcasing my skills in web development, 
              UI/UX design, and problem-solving. Each project represents different challenges 
              and solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-white dark:bg-zinc-800/30">
        <div className="container-main">
          <SectionHeading 
            title="My Development Process" 
            subtitle="How I approach each project to ensure success"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="card text-center relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mt-4 mb-3">Discovery</h3>
              <p className="text-sm">Understanding the project requirements, goals, and target audience to create a solid foundation.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mt-4 mb-3">Planning</h3>
              <p className="text-sm">Creating wireframes, selecting technologies, and establishing project milestones and deadlines.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mt-4 mb-3">Development</h3>
              <p className="text-sm">Writing clean, efficient code following best practices and implementing required features.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card text-center relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mt-4 mb-3">Delivery</h3>
              <p className="text-sm">Testing, optimization, deployment, and ongoing support to ensure long-term success.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectsPage;