import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when changing route
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-zinc-900/80 shadow-sm backdrop-blur-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between">
          <div className="z-50">
            <NavLink to="/" className="text-xl font-bold tracking-tight">
              Sai Srinivas
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
              Projects
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
              Experience
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
              Contact
            </NavLink>
            
            <button
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-zinc-800/40 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            ></motion.div>
          )}

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-zinc-900 z-50 md:hidden shadow-xl flex flex-col"
          >
            <div className="p-5">
              <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="p-2 ml-auto block rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="flex flex-col gap-4 mt-8">
                <NavLink to="/" className="text-lg py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Home
                </NavLink>
                <NavLink to="/about" className="text-lg py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  About
                </NavLink>
                <NavLink to="/projects" className="text-lg py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Projects
                </NavLink>
                <NavLink to="/experience" className="text-lg py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Experience
                </NavLink>
                <NavLink to="/contact" className="text-lg py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Contact
                </NavLink>
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;