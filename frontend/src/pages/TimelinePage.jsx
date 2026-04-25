import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchTimeline } from '../services/api';

const TimelinePage = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTimeline()
      .then(data => { setTimeline(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  if (loading) return <div className="page-header"><h2>Loading timeline...</h2></div>;

  return (
    <div>
      <div className="page-header">
        <h1>Election Timeline</h1>
        <p>Key phases and events in the election cycle.</p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content glass">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>{item.phase}</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {item.events.map((event, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{event}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
