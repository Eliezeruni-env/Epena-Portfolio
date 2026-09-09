import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ScienceIcon from "@mui/icons-material/Science";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import HubIcon from "@mui/icons-material/Hub";

import { useLanguage } from "../context/LanguageContext";
import {
  projectTranslations,
  projectsDataI18n,
  ProjectItemI18n,
} from "../translations/content";
import "../assets/styles/Project.scss";

function Project() {
  const { lang } = useLanguage();
  const t = projectTranslations[lang];

  const [projectType, setProjectType] = useState<"work" | "personal">("work");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItemI18n | null>(null);

  const filteredProjects = projectsDataI18n
    .filter((p) => p.projectType === projectType)
    .filter((p) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "precisa") return p.id.includes("precisa");
      if (activeFilter === "nurbansoft") return p.id.includes("nurbansoft");
      if (activeFilter === "detp") return p.id.includes("detp");
      if (activeFilter === "cuadreenv") return p.id.includes("cuadreenv");
      if (activeFilter === "filmradar") return p.id.includes("filmradar");
      if (activeFilter === "games-world") return p.id.includes("games-world");
      if (activeFilter === "mlb-stats") return p.id.includes("mlb-stats");
      if (activeFilter === "tenantflow") return p.id.includes("tenantflow");
      return p.category === activeFilter;
    });

  const handleOpenDetail = (project: ProjectItemI18n) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container" id="projects">
      <div className="projects-header-wrapper">
        <span className="section-subtitle">{t.subtitle}</span>
        <h1>{t.heading}</h1>
        <p className="section-description">{t.description}</p>

        {/* Master Project Type Selector */}
        <div className="project-type-selector">
          <button
            className={`type-btn ${projectType === "work" ? "active" : ""}`}
            onClick={() => {
              setProjectType("work");
              setActiveFilter("all");
            }}
          >
            <BusinessCenterIcon />
            <div>
              <span className="btn-main-title">{t.workTabMain}</span>
              <span className="btn-subtitle">{t.workTabSub}</span>
            </div>
          </button>

          <button
            className={`type-btn ${projectType === "personal" ? "active" : ""}`}
            onClick={() => {
              setProjectType("personal");
              setActiveFilter("all");
            }}
          >
            <ScienceIcon />
            <div>
              <span className="btn-main-title">{t.personalTabMain}</span>
              <span className="btn-subtitle">{t.personalTabSub}</span>
            </div>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="project-filter-tabs">
          <button
            className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            <HubIcon fontSize="small" /> {t.filterAll} ({projectType === "work" ? t.workTabMain : t.personalTabMain})
          </button>
          {projectType === "work" ? (
            <>
              <button
                className={`filter-tab ${activeFilter === "precisa" ? "active" : ""}`}
                onClick={() => setActiveFilter("precisa")}
              >
                <BusinessCenterIcon fontSize="small" /> {t.filterPrecisa}
              </button>
              <button
                className={`filter-tab ${activeFilter === "nurbansoft" ? "active" : ""}`}
                onClick={() => setActiveFilter("nurbansoft")}
              >
                <StorageIcon fontSize="small" /> {t.filterNurbansoft}
              </button>
              <button
                className={`filter-tab ${activeFilter === "detp" ? "active" : ""}`}
                onClick={() => setActiveFilter("detp")}
              >
                <CodeIcon fontSize="small" /> {t.filterDetp}
              </button>
            </>
          ) : (
            <>
              <button
                className={`filter-tab ${activeFilter === "cuadreenv" ? "active" : ""}`}
                onClick={() => setActiveFilter("cuadreenv")}
              >
                <StorageIcon fontSize="small" /> {t.filterCuadreEnv}
              </button>
              <button
                className={`filter-tab ${activeFilter === "filmradar" ? "active" : ""}`}
                onClick={() => setActiveFilter("filmradar")}
              >
                <CodeIcon fontSize="small" /> {t.filterFilmRadar}
              </button>
              <button
                className={`filter-tab ${activeFilter === "games-world" ? "active" : ""}`}
                onClick={() => setActiveFilter("games-world")}
              >
                <HubIcon fontSize="small" /> {t.filterGamesWorld}
              </button>
              <button
                className={`filter-tab ${activeFilter === "mlb-stats" ? "active" : ""}`}
                onClick={() => setActiveFilter("mlb-stats")}
              >
                <CodeIcon fontSize="small" /> {t.filterMlbStats}
              </button>
              <button
                className={`filter-tab ${activeFilter === "tenantflow" ? "active" : ""}`}
                onClick={() => setActiveFilter("tenantflow")}
              >
                <BusinessCenterIcon fontSize="small" /> {t.filterTenantFlow}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-image-wrapper"
              onClick={() => handleOpenDetail(project)}
            >
              <img
                src={project.image}
                alt={project.title[lang]}
                className="project-thumb zoom"
              />
              <div className="image-overlay">
                <span className="view-detail-btn">{t.viewDetailBtn}</span>
              </div>
              <div className="badge-category">{project.categoryLabel[lang]}</div>
            </div>

            <div className="project-card-content">
              <div className="project-tags">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <Chip key={idx} label={tag} size="small" className="tag-chip" />
                ))}
                {project.tags.length > 4 && (
                  <Chip
                    label={`+${project.tags.length - 4}`}
                    size="small"
                    className="tag-chip-more"
                  />
                )}
              </div>

              <h2 onClick={() => handleOpenDetail(project)} className="project-title">
                {project.title[lang]}
              </h2>
              <p className="project-desc">{project.shortDesc[lang]}</p>

              <div className="project-card-footer">
                <button
                  className="detail-action-btn"
                  onClick={() => handleOpenDetail(project)}
                >
                  {t.viewDetailBtn}
                </button>
                <span className="role-tag">{project.role[lang]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Technical Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDetail}
        maxWidth="md"
        fullWidth
        className="project-dialog-modal"
      >
        {selectedProject && (
          <>
            <DialogTitle className="dialog-title-bar">
              <div>
                <span className="dialog-subtitle">{selectedProject.categoryLabel[lang]}</span>
                <h3>{selectedProject.title[lang]}</h3>
              </div>
              <IconButton
                aria-label="close"
                onClick={handleCloseDetail}
                className="dialog-close-btn"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers className="dialog-body-content">
              <div className="dialog-hero-image">
                <img src={selectedProject.image} alt={selectedProject.title[lang]} />
              </div>

              <div className="dialog-section">
                <h4>{t.modalOverview}</h4>
                <p>{selectedProject.overview[lang]}</p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="dialog-specs-grid">
                {selectedProject.technicalSpecs.map((spec, i) => (
                  <div key={i} className="spec-item">
                    <span className="spec-label">{spec.label[lang]}</span>
                    <span className="spec-value">{spec.value[lang]}</span>
                  </div>
                ))}
              </div>

              {/* Architecture Highlights */}
              <div className="dialog-section">
                <h4>{t.modalArch}</h4>
                <ul className="dialog-bullet-list">
                  {selectedProject.architectureHighlights[lang].map((item, idx) => (
                    <li key={idx}>
                      <CheckCircleOutlineIcon className="bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="dialog-section">
                <h4>{t.modalFeatures}</h4>
                <ul className="dialog-bullet-list">
                  {selectedProject.keyFeatures[lang].map((item, idx) => (
                    <li key={idx}>
                      <CheckCircleOutlineIcon className="bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="dialog-section">
                <h4>{t.modalTech}</h4>
                <div className="dialog-chips-flex">
                  {selectedProject.tags.map((tag, idx) => (
                    <Chip key={idx} label={tag} className="tech-badge" />
                  ))}
                </div>
              </div>
            </DialogContent>

            <DialogActions className="dialog-footer-actions">
              <Button onClick={handleCloseDetail} className="close-action-button">
                {t.modalClose}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default Project;