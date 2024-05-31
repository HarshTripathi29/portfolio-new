import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#ffffff',
  color: '#000000'
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff'
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const NameContainer = styled.div`
  display: flex;
`;

const SliderContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ToggleButton = styled.button`
  padding: 10px;
  background: none;
  border: 1px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  cursor: pointer;
`;

const Header = ({ theme, toggleTheme }) => {
  const name = "Harsh";

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <NameContainer>
          {name.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </NameContainer>
        <SliderContainer>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </SliderContainer>
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
