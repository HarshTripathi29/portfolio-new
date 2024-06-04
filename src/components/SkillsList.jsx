import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'; // Import icons from react-icons
import '../App.css';
import './style.css';

const SkillsList = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JS', icon: <FaJsSquare /> },
    { name: 'React.js', icon: <FaReact /> }
  ];

  return (
    <div className='skills'>
      <div>
        <h1>Skills</h1>
      </div>
      <div className='skills-list'>
        <motion.ul initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
          {skills.map(skill => (
            <li key={skill.name} className='skill-item'>
              <span className='skill-icon'>{skill.icon}</span>
              <span className='skill-name'>{skill.name}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default SkillsList;
