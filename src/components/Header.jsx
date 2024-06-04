import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { Brightness2, WbSunny } from '@material-ui/icons'; // Importing the Material UI icons

const lightTheme = {
  background: '#ffffff',
  color: '#000000'
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff'
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height : 9vh;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom : 2px solid ${(props) => props.theme.color};
`;

const NameContainer = styled.div`
  display: flex;
  font-size : 36px;
  font-weight : 700;
  color : blue;
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  padding : 5px 10px;
  gap: 15px;
  border: 2px solid ${(props) => props.theme.color};
  border-radius : 30px;
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 10px;
  border: none;
  border-radius : 30px;
  text-decoration: none;
  color: inherit;
  z-index: 1;
`;

const Slider = styled(motion.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 33%;
  border-radius : 30px;
  background: ${(props) => props.theme.color};
  opacity : 60%;
  z-index: 0;
`;

const ToggleButton = styled.button`
  padding: 10px;
  background: none;
  border: 2px solid ${(props) => props.theme.color};
  border-radius : 30px;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Header = ({ theme, toggleTheme }) => {
  const name = "Harsh.";
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const getIndex = (path) => {
    switch (path) {
      case "/":
        return 0;
      case "/projects":
        return 1;
      case "/about":
        return 2;
      default:
        return 0;
    }
  };

  const index = getIndex(location.pathname);

  if (index !== activeIndex) {
    setActiveIndex(index);
  }

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
          <Slider
            initial={false}
            animate={{ x: `${activeIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <NavLink to="/" onClick={() => setActiveIndex(0)}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setActiveIndex(1)}>Projects</NavLink>
          <NavLink to="/about" onClick={() => setActiveIndex(2)}>About</NavLink>
        </SliderContainer>
        <ToggleButton onClick={toggleTheme}>
          {theme === lightTheme ? <Brightness2 /> : <WbSunny />}
        </ToggleButton>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
