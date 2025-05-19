import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github as GitHub, Twitter } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
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
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be a part of your vision.
              Feel free to contact me using the form below or through my social media channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Contact Information" 
                subtitle="Feel free to reach out through any of these channels"
              />
              
              <div className="space-y-6">
                <div className="card flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-blue-600 dark:text-blue-400">luckyizdone@gmail.com</p>
                    <p className="text-sm mt-1">I'll respond to your message as soon as possible.</p>
                  </div>
                </div>
                
                <div className="card flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Phone</h3>
                    <p className="text-blue-600 dark:text-blue-400">+91 9392493291</p>
                    <p className="text-sm mt-1">Available Monday to Friday, 9am - 6pm IST.</p>
                  </div>
                </div>
                
                <div className="card flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Location</h3>
                    <p className="text-blue-600 dark:text-blue-400">Hyderabad, Telangana</p>
                    <p className="text-sm mt-1">Available for remote work and local opportunities.</p>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="card">
                  <h3 className="text-lg font-bold mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                    >
                      <GitHub className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionHeading 
                title="Send Me a Message" 
                subtitle="Use the form below to get in touch"
              />
              
              <div className="card">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </PageTransition>
  );
};

export default ContactPage;