import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

const ExperienceCard = ({ title, company, period, description, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="card relative border-l-4 border-blue-600 dark:border-blue-500 pl-6 ml-4 mb-8"
    >
      {/* Circle on timeline */}
      <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -left-[10px] top-6 border-4 border-white dark:border-zinc-900"></div>
      
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{company}</h4>
      
      <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        <Calendar size={14} className="mr-1" />
        <span>{period}</span>
      </div>
      
      <ul className="list-disc list-inside space-y-2 text-sm">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;