import React from 'react';
import { motion } from 'framer-motion';

const RevealText = ({ children, delayOffset = 0, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delayOffset
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } }
  };
  
  if (typeof children !== 'string') {
    return (
      <motion.div
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const words = children.split(' ');

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {words.map((word, idx) => (
        <span key={idx} style={{ display: 'inline-block', overflow: 'hidden', marginRight: idx !== words.length - 1 ? '0.25em' : '0' }}>
          <motion.span variants={childVariants} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default RevealText;
