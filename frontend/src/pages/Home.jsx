import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-header"
    >
      <h1>Your Election Guide Assistant</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#ffffff' }}>
        Navigate the voting process with ease. Get step-by-step guidance, timelines, and ask questions to our AI assistant.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/assistant" className="btn">Ask Assistant</Link>
        <Link to="/guide" className="btn btn-secondary">View Guide</Link>
      </div>
    </motion.div>
  );
};

export default Home;
