import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="page-header"
      style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}
    >
      <h1 style={{ textAlign: 'center' }}>About Election Guide</h1>
      
      <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Our Mission</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We believe that voting should be accessible, straightforward, and transparent. 
          Our mission is to provide clear, actionable information to help every citizen participate in the democratic process.
        </p>

        <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>How it Works</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          The Election Guide Assistant uses simple rule-based matching to answer your most common questions about the voting process. 
          You can explore the step-by-step guide, check the timeline, or interact directly with the Assistant.
        </p>
        
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Privacy</h2>
        <p>
          We do not store your personal information or queries. This application is designed purely as an educational tool.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
