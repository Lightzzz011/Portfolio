import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
}

const SkillBadge = ({ name, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{ y: -4 }}
      className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm 
                 border border-zinc-200 dark:border-zinc-700 text-sm font-medium"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;