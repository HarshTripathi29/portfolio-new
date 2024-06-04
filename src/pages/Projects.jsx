import React from 'react';
import styled from 'styled-components';
import { GitHub } from '@material-ui/icons'; // Import the GitHub icon
import '../App.css'

export const projectsData = [
  {
    id: 1,
    name: 'WorkJam',
    stack : 'HTML, CSS, JS, React.js, Firebase',
    features : 'Features : User Authentication, Workspaces and Boards, Kanban Board Functionality, Task Management, Responsive Design.',
    description: 'Developed a comprehensive Task Management Kanban Board application utilizing the MERN stack React.js and Firebase Authentication. This web application enables users to manage tasks efficiently within multiple workspaces and boards, providing a seamless and user-friendly experience.',
    logo: 'https://via.placeholder.com/150', // Replace with actual project logo URL
    githubLink: 'https://github.com/project1' // Replace with actual GitHub link
  },
  {
    id: 2,
    name: 'Spliter',
    stack : 'HTML, CSS, JS, React.js, Firebase',
    features: 'Features: Bill splitting, expense tracking, real-time data synchronization.',
    description: 'Developed a responsive user-friendly interface using ReactJS for seamless bill splitting.  Implemented Firebase for secure, real-time data storage and synchronization.  Enhanced user experience with responsive design for various devices.  Facilitated transparent group financial management, streamlining expense tracking.',
    logo: 'https://via.placeholder.com/150', // Replace with actual project logo URL
    githubLink: 'https://github.com/project2' // Replace with actual GitHub link
  },
  {
    id: 3,
    name: 'CineFlix',
    stack : 'HTML, CSS, JS, React.js, Firebase',
    features: 'Features: Bill splitting, expense tracking, real-time data synchronization.',
    description: 'Developed a comprehensive Task Management Kanban Board application utilizing the MERN stack React.js and Firebase Authentication. This web application enables users to manage tasks efficiently within multiple workspaces and boards, providing a seamless and user-friendly experience',
    logo: 'https://via.placeholder.com/150', // Replace with actual project logo URL
    githubLink: 'https://github.com/project2' // Replace with actual GitHub link
  },
  {
    id: 4,
    name: 'FoodLab',
    stack : 'HTML, CSS, JS, React.js, Firebase',
    features: 'Features: Bill splitting, expense tracking, real-time data synchronization.',
    description: 'Developed a comprehensive Task Management Kanban Board application utilizing the MERN stack React.js and Firebase Authentication. This web application enables users to manage tasks efficiently within multiple workspaces and boards, providing a seamless and user-friendly experience',
    logo: 'https://via.placeholder.com/150', // Replace with actual project logo URL
    githubLink: 'https://github.com/project2' // Replace with actual GitHub link
  },
  {
    id: 4,
    name: 'Youtube Clone',
    stack : 'HTML, CSS, JS, React.js, Firebase',
    features: 'Features: Bill splitting, expense tracking, real-time data synchronization.',
    description: 'Developed a comprehensive Task Management Kanban Board application utilizing the MERN stack React.js and Firebase Authentication. This web application enables users to manage tasks efficiently within multiple workspaces and boards, providing a seamless and user-friendly experience',
    logo: 'https://via.placeholder.com/150', // Replace with actual project logo URL
    githubLink: 'https://github.com/project2' // Replace with actual GitHub link
  },
  // Add more project data as needed
];

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items : center;
  padding: 20px;
`;

const ProjectCard = styled.div`
  width: 500px;
  margin: 20px;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
`;

const ProjectLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProjectName = styled.h3`
  margin-bottom: 10px;

  font-size : 18px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 10px;
  font-size : 15px;
`;

const ProjectFeatures = styled.p`
  margin-bottom: 10px;
  font-size : 15px;
`;

const ProjectStack = styled.p`
  margin-bottom: 10px;
`;

const GitHubLink = styled.a`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const CardUpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Projects = () => {
  return (
    <div>
      <h2>Some Recent Works</h2>
      <ProjectsContainer>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
          <CardUpper>          
            <ProjectName>{project.name}</ProjectName>   
            <div className='project-logo'>    
            <GitHubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </GitHubLink>   
            <ProjectLogo src={project.logo} alt={project.name} />  
            </div>
            </CardUpper>         
            <div>
              <ProjectStack>{project.stack}</ProjectStack>
              <ProjectFeatures>{project.features}</ProjectFeatures>
              <ProjectDescription>{project.description}</ProjectDescription>
            </div>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
