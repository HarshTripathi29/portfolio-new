import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const SkillsList = () => {
  const skills = ['HTML', 'CSS', 'JS', 'React.js'];

  return (
    <motion.ul initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </motion.ul>
  );
}

export default SkillsList;
