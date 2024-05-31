import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import SkillsList from '../components/SkillsList';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import '../App.css'

const lightTheme = {
  background: '#ffffff',
  color: '#000000'
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff'
};

const Home = () => {
  const [theme, setTheme] = useState(lightTheme);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: theme.background, color: theme.color, minHeight: '100vh' }}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <motion.h1 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
          Welcome to My Portfolio
        </motion.h1>
        <SocialLinks />
        <SkillsList />
        <motion.button 
          onClick={() => navigate('/projects')}
          whileHover={{ scale: 1.1 }}
        >
          Load More
        </motion.button>
        <ContactForm />
        <div>
          <h2>Thanks for visiting!</h2>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
