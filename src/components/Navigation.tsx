import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: Briefcase, label: 'Projects' },
    { path: '/contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <nav className="hidden md:flex fixed left-6 top-0 h-full z-50 flex-col justify-center py-12">
        {/* Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-8 left-0"
        >
          <div className="text-white text-2xl font-bold">S</div>
        </motion.div>

        {/* Navigation Items */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col space-y-10"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <motion.div
                key={item.path}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0 + index * 0.1, duration: 0.6 }}
              >
                <Link to={item.path}>
                  <motion.div
                    whileHover={{ x: 10, scale: 1.40 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center space-x-3 py-2 transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <div className="relative">
                      <Icon size={18} />
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-white rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                    <span className="font-medium text-xs tracking-wider transform rotate-90 origin-left whitespace-nowrap">
                      {item.label.toUpperCase()}
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Theme Toggle */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-8 left-0"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-500 hover:text-white transition-colors duration-300"
          >
            <div className="w-5 h-5 rounded-full border-2 border-current border-r-transparent" />
          </motion.button>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm"
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="h-full w-80 bg-gray-900/90 backdrop-blur-xl border-r border-gray-700 p-8"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-white text-2xl font-bold mb-16">S</div>
                    <div className="space-y-8">
                      {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        
                        return (
                          <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center space-x-4 py-3 transition-colors duration-300 ${
                                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              <Icon size={18} />
                              <span className="font-medium">{item.label}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;