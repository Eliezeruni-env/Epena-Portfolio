import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import VerifiedIcon from "@mui/icons-material/Verified";
import TranslateIcon from "@mui/icons-material/Translate";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Button from "@mui/material/Button";
import CvModal from "./CvModal";
import { useLanguage } from "../context/LanguageContext";
import { aboutTranslations } from "../translations/content";
import "../assets/styles/About.scss";

export default function About() {
  const [cvOpen, setCvOpen] = useState(false);
  const { lang } = useLanguage();
  const t = aboutTranslations[lang];

  return (
    <div className="about-container" id="about">
      <div className="about-header-wrapper">
        <span className="section-subtitle">{t.subtitle}</span>
        <h1>{t.heading}</h1>
        <p className="section-description">{t.description}</p>
      </div>

      <div className="about-main-grid">
        {/* Card 1: Detailed Bio */}
        <div className="about-card bio-card">
          <div className="card-header-flex">
            <PersonIcon className="header-icon" />
            <div>
              <span className="card-tag">{t.bioTag}</span>
              <h2>{t.bioTitle}</h2>
            </div>
          </div>
          <div className="card-content">
            <p>{t.bioP1}</p>
            <p>{t.bioP2}</p>
            <div className="bio-highlights">
              <div className="highlight-box">
                <span className="number">{t.stat1Number}</span>
                <span className="label">{t.stat1Label}</span>
              </div>
              <div className="highlight-box">
                <span className="number">{t.stat2Number}</span>
                <span className="label">{t.stat2Label}</span>
              </div>
              <div className="highlight-box">
                <span className="number">{t.stat3Number}</span>
                <span className="label">{t.stat3Label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: University & Higher Education */}
        <div className="about-card university-card">
          <div className="card-header-flex">
            <SchoolIcon className="header-icon university-icon" />
            <div>
              <span className="card-tag">{t.uniTag}</span>
              <h2>{t.uniTitle}</h2>
            </div>
          </div>
          <div className="card-content">
            <div className="uni-badge-box">
              <div className="uni-logo-symbol">UNICARIBE</div>
              <div className="uni-details">
                <h3>{t.uniTitle}</h3>
                <p className="uni-degree">{t.uniDegree}</p>
                <span className="uni-location">{t.uniLocation}</span>
              </div>
            </div>

            <p className="uni-description">{t.uniDesc}</p>

            {/* Instituto Tecnológico Fabio Amable Mota */}
            <div className="uni-badge-box tech-school-box">
              <div className="uni-logo-symbol tech-logo-symbol">ITFAM</div>
              <div className="uni-details">
                <span className="sub-school-tag">{t.techBTechTag}</span>
                <h3>{t.techBTechTitle}</h3>
                <p className="uni-degree">{t.techBTechDegree}</p>
                <span className="uni-location">{t.techBTechDates} • Santo Domingo, Rep. Dom.</span>
              </div>
            </div>

            <p className="uni-description secondary-desc">{t.techBTechDesc}</p>

            {/* MESCYT - Inglés por Inmersión */}
            <div className="uni-badge-box mescyt-school-box">
              <div className="uni-logo-symbol mescyt-logo-symbol">MESCYT</div>
              <div className="uni-details">
                <span className="sub-school-tag">{t.mescytTag}</span>
                <h3>{t.mescytTitle}</h3>
                <p className="uni-degree">{t.mescytDegree}</p>
                <span className="uni-location">{t.mescytDates}</span>
              </div>
            </div>

            <p className="uni-description secondary-desc">{t.mescytDesc}</p>

            <div className="uni-features">
              <div className="uni-pill">
                <VerifiedIcon fontSize="small" /> {t.uniPill1}
              </div>
              <div className="uni-pill">
                <VerifiedIcon fontSize="small" /> {t.uniPill2}
              </div>
              <div className="uni-pill">
                <VerifiedIcon fontSize="small" /> {t.uniPill3}
              </div>
              <div className="uni-pill">
                <VerifiedIcon fontSize="small" /> {t.uniPill4}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Languages & Technical Communication Card */}
      <div className="about-card languages-card">
        <div className="card-header-flex">
          <TranslateIcon className="header-icon lang-icon" />
          <div>
            <span className="card-tag">{t.languagesTag}</span>
            <h2>{t.languagesTitle}</h2>
          </div>
        </div>
        <div className="card-content">
          <div className="languages-grid">
            <div className="lang-item-box">
              <div className="lang-flag">🇪🇸</div>
              <div className="lang-info">
                <div className="lang-header-line">
                  <h4>{t.langSpanishTitle}</h4>
                  <span className="lang-badge-level native-badge">{t.langSpanishLevel}</span>
                </div>
                <p>{t.langSpanishDesc}</p>
              </div>
            </div>

            <div className="lang-item-box">
              <div className="lang-flag">🇺🇸</div>
              <div className="lang-info">
                <div className="lang-header-line">
                  <h4>{t.langEnglishTitle}</h4>
                  <span className="lang-badge-level english-badge">{t.langEnglishLevel}</span>
                </div>
                <p>{t.langEnglishDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Out-of-area experience section */}
      <div className="about-card out-of-area-card">
        <div className="card-header-flex">
          <WorkHistoryIcon className="header-icon work-icon" />
          <div>
            <span className="card-tag">{t.outAreaTag}</span>
            <h2>{t.outAreaTitle}</h2>
          </div>
        </div>
        <div className="card-content">
          <p className="out-area-intro">{t.outAreaIntro}</p>

          <div className="out-area-grid">
            <div className="skill-pillar callcenter-pillar">
              <div className="pillar-header">
                <SupportAgentIcon className="pillar-icon callcenter-icon" />
                <h4>{t.pillarCallCenterTitle}</h4>
              </div>
              <p>{t.pillarCallCenterDesc}</p>
            </div>

            <div className="skill-pillar">
              <div className="pillar-header">
                <VerifiedIcon className="pillar-icon" />
                <h4>{t.pillar2Title}</h4>
              </div>
              <p>{t.pillar2Desc}</p>
            </div>

            <div className="skill-pillar">
              <div className="pillar-header">
                <WorkHistoryIcon className="pillar-icon" />
                <h4>{t.pillar3Title}</h4>
              </div>
              <p>{t.pillar3Desc}</p>
            </div>
          </div>
        </div>

        <div className="cv-banner-cta">
          <div className="cta-text">
            <h3>{t.cvBannerTitle}</h3>
            <p>{t.cvBannerDesc}</p>
          </div>
          <Button
            variant="contained"
            size="large"
            startIcon={<DescriptionIcon />}
            onClick={() => setCvOpen(true)}
            className="cv-cta-btn"
          >
            {t.cvBannerBtn}
          </Button>
        </div>
      </div>

      {/* CV Modal */}
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
