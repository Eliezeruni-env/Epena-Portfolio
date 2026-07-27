import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Eliezeruni-env" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="www.linkedin.com/in/eliezer-alberto-peña-zabala-ab4aa82b1" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Eliezeruni-env/Epena-Portfolio" target="_blank" rel="noreferrer">Eliezer Peña</a> with 💜</p>
    </footer>
  );
}

export default Footer;