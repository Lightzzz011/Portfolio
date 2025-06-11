import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import Copywrite from '../CopyWrite/Copywrite';


const Contact = () => {
  const socialItems = [
    { icon: Github, href: 'https://github.com/Lightzzz011', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saikoluguri', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/saikolugurii', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'luckyizdone@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9392493291' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get In <span className="text-gray-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Got a project in mind or just in the mood for some biryani? Either way, I'd love to hear from you. Let's make something awesome together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                  >
                    <div className="bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialItems.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      className="p-3 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white transition-all duration-300"
                      title={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
                <Copywrite />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      
    </motion.section>
  );
};


export default Contact;
