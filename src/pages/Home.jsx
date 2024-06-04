import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import SkillsList from '../components/SkillsList';
import ContactForm from '../components/ContactForm';
import {projectsData} from './Projects';
import { GitHub } from '@material-ui/icons';
import styled from 'styled-components';
import '../App.css'

const ProjectsSection = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items: center;
  margin: 100px;
  width : 70%;
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.color};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content : left;
`;

const CardUpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProjectLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GitHubLink = styled.a`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const ProjectName = styled.h2`
  margin: 10px 0;
`;

const ProjectDescription = styled.p`
  text-align: left;
  font-size : 14px;
`;

const LoadMoreButton = styled.button`
  background: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  font-size : 16px;
  font-weight : 600;
`;


const Home = () => {
  const navigate = useNavigate();

  const animatedText = "frontend web developer";
  const handleLoadMore = () => {
    navigate('/projects');
  };

  return (
    <div className = 'home' style={{ paddingTop: '100px', margin:'0px' }}> 
    {/* Add padding to prevent content from being hidden behind the fixed header */}
      <motion.h1 
        initial={{ x: '-100vw' }} 
        animate={{ x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }}
        className="title">
        Hey, I'm <br/>Harsh 
       </motion.h1>
      <div className="intro" >
        I am a{' '}
        <motion.span initial="hidden" animate="visible" variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.1
            }
          }
        }}>
          {animatedText.split('').map((char, index) => (
            <motion.span key={index} variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
      <div className='intro2'>
      <p >I develop front-end web apps/tools and occasionally take on freelance projects.</p>
      </div>
      <SocialLinks />
      <SkillsList />
      <ProjectsSection>
      <div>
        <h1>Projects</h1>
      </div>
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <CardUpper>
              <ProjectLogo>{project.logo}</ProjectLogo>
              <GitHubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GitHub />
              </GitHubLink>
            </CardUpper>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      </ProjectsSection>
      <ContactForm />
      <div>
        <h2>Thanks for visiting!</h2>
      </div>
    </div>
  );
}

export default Home;
