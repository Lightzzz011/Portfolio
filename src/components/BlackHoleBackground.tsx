import { motion } from 'framer-motion';

const BlackHoleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Black hole center */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-transparent via-gray-900/20 to-black/40 blur-3xl" />
      </motion.div>

      {/* Accretion disk rings */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
          }}
        >
          <div
            className="w-full h-full rounded-full border border-gray-800/30"
            style={{
              background: `conic-gradient(from 0deg, transparent, rgba(75, 85, 99, ${
                0.1 - i * 0.02
              }), transparent)`,
            }}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
          className="absolute w-1 h-1 bg-gray-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default BlackHoleBackground;
