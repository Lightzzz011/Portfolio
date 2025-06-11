import { motion } from 'framer-motion';
import Copywrite from '../CopyWrite/Copywrite';
const Projects = () => {
  const projects = [
    {
      title: "Smart Car Parking System",
      description: "Currently developing a real-time parking slot tracker with dynamic availability updates and automated booking to reduce manual intervention and search time.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://tse4.mm.bing.net/th?id=OIP.2oodPdpwki8gltUmVLZ7rwHaFj&pid=Api&P=0&h=180",
      github: "#",
      live: "#",
    },  
    {
      title: "AI Chat Bot",
      description: "Developed a fully functional AI chatbot with real-time messaging and image upload support.",
      tech: ["Next.js", "TypeScript", "xAI Grok-2", "PostgreSQL"],
      image: "https://tse2.mm.bing.net/th?id=OIP.zcguZjVtrAd7IxDjV95w5wHaHa&pid=Api&P=0&h=180",
      github: "#",
      live: "#"
    },
    {
      title: "UniConnect -  AU Campus Portal ",
      description: "Building a centralized platform tailored for AU students to share study materials, track university events, and post announcements.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      image: "https://tse1.mm.bing.net/th?id=OIP.9D73JprCqXG1itPY7asUpAHaEL&pid=Api&P=0&h=180",
      github: "#",
      live: "#"
    }
  ];

  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative"
    >
      <div className="max-w-7xl mx-auto pb-40">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My <span className="text-gray-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Here are some of my recent projects :)
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {/* Buttons removed as requested */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
                   {/* Technical Reflection Section */}
<div className="mt-32 px-4 md:px-0 max-w-4xl mx-auto text-gray-300 leading-loose text-lg">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not All Smooth Sailing</h2>

  <p className="mb-6">
    For the most part, the migration was pretty straightforward. The way I had structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using PostCSS for styling. I did, however, encounter a couple of problems:
  </p>

  <ol className="list-decimal pl-6 space-y-6">
    <li>
      <strong>Route transitions:</strong> There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages, but when you are, the previous page becomes jarringly unstyled as it fades out. This is one of the most discussed issues on the Next.js repo. I've used a workaround from the community to patch it.
    </li>
    <li>
      <strong>Scroll restoration:</strong> Somewhat related to transitions, I had to opt out of both Next.js's and the native browser's scroll restoration. Without this, the browser would instantly jump to the top while the transition is still animating out. Next.js also doesn't handle internal anchor link focus well, so I added custom logic for accessibility.
    </li>
  </ol>
</div>

      
<Copywrite />
      </div>

      {/* Social Links at Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      >
        
      </motion.div>
    </motion.section>
  );
};


export default Projects;
