import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DescriptionIcon from "@mui/icons-material/Description";
import portfolioImg from "../assets/images/portfolioImg.jpg";
import CvModal from "./CvModal";
import { useLanguage } from "../context/LanguageContext";
import { heroTranslations } from "../translations/content";
import "../assets/styles/Main.scss";

function Main() {
  const [cvOpen, setCvOpen] = useState(false);
  const { lang } = useLanguage();
  const t = heroTranslations[lang];

  const scrollToProjects = () => {
    const projectsElem = document.getElementById("projects");
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={portfolioImg} alt="Eliezer Peña" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/mrZabala"
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:peliezer51@gmail.com"
              title="Email (peliezer51@gmail.com)"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/eliezer-alberto-peña-zabala-ab4aa82b1"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>{t.title}</h1>
          <p className="hero-subtitle">{t.role}</p>
          <p className="hero-bio">{t.bio}</p>
          <div className="hero-cta-wrapper">
            <button className="hero-cta-btn" onClick={scrollToProjects}>
              {t.exploreBtn} <ArrowDownwardIcon fontSize="small" />
            </button>
            <button className="hero-cv-btn" onClick={() => setCvOpen(true)}>
              {t.cvBtn} <DescriptionIcon fontSize="small" />
            </button>
          </div>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/mrZabala"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:peliezer51@gmail.com"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/eliezer-alberto-peña-zabala-ab4aa82b1"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}

export default Main;
