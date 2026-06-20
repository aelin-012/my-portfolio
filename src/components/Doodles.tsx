import React from 'react';
import { motion } from 'framer-motion';

const Doodles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20 dark:opacity-10">
      {/* Doodle 1: Sparkles top right */}
      <motion.svg
        className="absolute top-[15%] right-[10%] w-12 h-12 text-brand-blue"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
      </motion.svg>

      {/* Doodle 2: Squiggly line middle left */}
      <motion.svg
        className="absolute top-[40%] left-[5%] w-24 h-24 text-brand-blue"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <path d="M10 50 Q 25 20 40 50 T 70 50 T 100 50" />
      </motion.svg>

      {/* Doodle 3: Star bottom right */}
      <motion.svg
        className="absolute bottom-[20%] right-[15%] w-10 h-10 text-brand-blue"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </motion.svg>

      {/* Doodle 4: Cute Cloud top left */}
      <motion.svg
        className="absolute top-[25%] left-[15%] w-16 h-16 text-brand-blue"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </motion.svg>

      {/* Doodle 5: Floating Heart bottom left */}
      <motion.svg
        className="absolute bottom-[35%] left-[8%] w-8 h-8 text-brand-blue"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </motion.svg>

      {/* Doodle 6: Swirl middle right */}
      <motion.svg
        className="absolute top-[60%] right-[8%] w-14 h-14 text-brand-blue"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <path d="M50 50 m 0 -40 a 40 40 0 1 1 0 80 a 40 40 0 1 1 0 -80" strokeDasharray="10 15" />
      </motion.svg>
    </div>
  );
};

export default Doodles;
