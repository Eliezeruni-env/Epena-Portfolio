import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLanguage } from "../context/LanguageContext";
import { footerTranslations } from "../translations/content";
import "../assets/styles/Footer.scss";

function Footer() {
  const { lang } = useLanguage();
  const t = footerTranslations[lang];

  return (
    <footer>
      <div>
        <a
          href="https://github.com/Eliezeruni-env"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/eliezer-alberto-peña-zabala-ab4aa82b1"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>{t.text}</p>
    </footer>
  );
}

export default Footer;