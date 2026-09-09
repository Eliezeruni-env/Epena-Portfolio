import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faReact,
  faMicrosoft,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLayerGroup,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import { useLanguage } from "../context/LanguageContext";
import { expertiseTranslations } from "../translations/content";
import "../assets/styles/Expertise.scss";

const labelsFrontend = [
  "Angular 21",
  "React 18",
  "TypeScript",
  "JavaScript",
  "RxJS",
  "CoreUI 5",
  "Vite",
  "HTML5 / SCSS",
  "Chart.js",
  "Responsive UI",
];

const labelsBackend = [
  "C# / .NET 8",
  "Onion Architecture",
  "ASP.NET Core",
  "EF Core 9",
  "SQL Server",
  "Node.js / Express",
  "RESTful APIs",
  "Swagger / OpenAPI",
  "Idempotency",
];

const labelsDevOpsSecurity = [
  "JWT & RBAC",
  "Multi-Tenancy",
  "Financial Auditing",
  "Docker",
  "Git / GitHub Actions",
  "Serilog",
  "Postman",
  "Clean Code",
  "CI / CD",
];

function Expertise() {
  const { lang } = useLanguage();
  const t = expertiseTranslations[lang];

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{t.heading}</h1>
        <div className="skills-grid">
          {/* Card 1: Frontend & POS Engineering */}
          <div className="skill">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faAngular as any} size="3x" className="primary-icon" />
              <FontAwesomeIcon icon={faReact as any} size="2x" className="secondary-icon" />
            </div>
            <h3>{t.card1Title}</h3>
            <p>{t.card1Desc}</p>
            <div className="flex-chips">
              <span className="chip-title">{t.techStack}</span>
              {labelsFrontend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Card 2: Backend & Clean Architecture */}
          <div className="skill">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faLayerGroup as any} size="3x" className="primary-icon" />
              <FontAwesomeIcon icon={faMicrosoft as any} size="2x" className="secondary-icon" />
            </div>
            <h3>{t.card2Title}</h3>
            <p>{t.card2Desc}</p>
            <div className="flex-chips">
              <span className="chip-title">{t.techStack}</span>
              {labelsBackend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Card 3: Security & Enterprise Systems */}
          <div className="skill">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faShieldHalved as any} size="3x" className="primary-icon" />
              <FontAwesomeIcon icon={faDocker as any} size="2x" className="secondary-icon" />
            </div>
            <h3>{t.card3Title}</h3>
            <p>{t.card3Desc}</p>
            <div className="flex-chips">
              <span className="chip-title">{t.techStack}</span>
              {labelsDevOpsSecurity.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;