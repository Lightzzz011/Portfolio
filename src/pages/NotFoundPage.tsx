import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
          <p className="mb-8 text-lg">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default NotFoundPage;