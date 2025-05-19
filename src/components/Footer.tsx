import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-800/50 py-8 mt-16">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Sai Srinivas</h3>
            <p className="text-sm mb-4 max-w-md">
              A passionate developer focused on creating exceptional digital experiences 
              with modern technologies and clean, efficient code.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 aria-label="GitHub" 
                 className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 aria-label="LinkedIn" 
                 className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.203 24 24 23.227 24 22.271V1.729C24 .774 23.203 0 22.225 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 aria-label="Twitter" 
                 className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Projects</Link></li>
              <li><Link to="/experience" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Experience</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} />
                <span>luckyizdone@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span>+91 9392493291</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin size={14} />
                <span>Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-700 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Sai Srinivas. Made with <Heart size={14} className="text-red-500" /> using React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;