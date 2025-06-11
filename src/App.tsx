import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BlackHoleBackground from './components/BlackHoleBackground';



function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <BlackHoleBackground />
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;