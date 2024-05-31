import React from 'react';
import { GitHub, Instagram, Twitter, Email } from '@material-ui/icons';
import '../App.css';

const SocialLinks = () => {
  return (
    <div>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><GitHub /></a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><Instagram /></a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><Twitter /></a>
      <a href="mailto:harshtripathi041@gmail.com"><Email /></a>
    </div>
  );
}

export default SocialLinks;
