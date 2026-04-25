import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchSteps } from '../services/api';

const Guide = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSteps()
      .then(data => { setSteps(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  if (loading) return <div className="page-header"><h2>Loading guide...</h2></div>;

  return (
    <div>
      <div className="page-header">
        <h1>Step-by-Step Guide</h1>
        <p>Follow these steps to ensure your vote is counted.</p>
      </div>
      
      <div className="grid">
        {steps.map((step, index) => (
          <motion.div 
            key={step.id} 
            className="card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Step {step.id}: {step.title}</h3>
            <p style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>{step.date}</p>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
