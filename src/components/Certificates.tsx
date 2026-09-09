import React, { useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LaunchIcon from "@mui/icons-material/Launch";
import DescriptionIcon from "@mui/icons-material/Description";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import CvModal from "./CvModal";
import { useLanguage } from "../context/LanguageContext";
import {
  certificatesTranslations,
  certificatesDataI18n,
  CertificateItemI18n,
} from "../translations/content";
import "../assets/styles/Certificates.scss";

export default function Certificates() {
  const { lang } = useLanguage();
  const t = certificatesTranslations[lang];

  const [selectedCert, setSelectedCert] = useState<CertificateItemI18n | null>(null);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="certificates-container" id="certifications">
      <div className="certificates-header-wrapper">
        <span className="section-subtitle">{t.subtitle}</span>
        <h1>{t.heading}</h1>
        <p className="section-description">{t.description}</p>
      </div>

      <div className="certificates-grid">
        {certificatesDataI18n.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <div className="cert-top-bar">
              <span className="cert-category">{cert.category[lang]}</span>
              <span className="cert-date">{cert.date}</span>
            </div>

            <div className="cert-main">
              <WorkspacePremiumIcon className="cert-medal-icon" />
              <h3>{cert.title[lang]}</h3>
              <p className="cert-issuer">{cert.issuer[lang]}</p>
              <p className="cert-desc">{cert.description[lang]}</p>
            </div>

            <div className="cert-skills">
              {cert.skills.map((skill, idx) => (
                <Chip key={idx} label={skill} size="small" className="cert-chip" />
              ))}
            </div>

            <div className="cert-footer">
              <span className="cert-id">ID: {cert.credentialId}</span>
              <button
                className="view-cert-btn"
                onClick={() => setSelectedCert(cert)}
              >
                {t.viewCredentialBtn} <LaunchIcon fontSize="inherit" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CV Download / Preview CTA */}
      <div className="cv-download-card">
        <div className="cv-info">
          <VerifiedUserIcon className="shield-icon" />
          <div>
            <h3>{t.bannerTitle}</h3>
            <p>{t.bannerDesc}</p>
          </div>
        </div>
        <Button
          variant="contained"
          size="large"
          startIcon={<DescriptionIcon />}
          onClick={() => setCvOpen(true)}
          className="cv-cta-button"
        >
          {t.bannerBtn}
        </Button>
      </div>

      {/* Certificate Modal */}
      <Dialog
        open={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        maxWidth="sm"
        fullWidth
        className="cert-dialog-modal"
      >
        {selectedCert && (
          <>
            <DialogTitle className="cert-modal-title">
              <div>
                <span className="cert-modal-tag">{selectedCert.category[lang]}</span>
                <h3>{selectedCert.title[lang]}</h3>
              </div>
              <IconButton
                onClick={() => setSelectedCert(null)}
                className="cert-close-icon"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers className="cert-modal-body">
              <div className="cert-modal-seal">
                <WorkspacePremiumIcon className="seal-icon" />
                <span className="cert-verified">{t.modalVerified}</span>
              </div>

              <div className="cert-detail-field">
                <span className="field-label">{t.modalIssuer}</span>
                <span className="field-value">{selectedCert.issuer[lang]}</span>
              </div>

              <div className="cert-detail-field">
                <span className="field-label">{t.modalDate}</span>
                <span className="field-value">{selectedCert.date}</span>
              </div>

              <div className="cert-detail-field">
                <span className="field-label">{t.modalCode}</span>
                <code className="cert-code">{selectedCert.credentialId}</code>
              </div>

              <div className="cert-detail-field">
                <span className="field-label">{t.modalScope}</span>
                <p className="field-desc">{selectedCert.description[lang]}</p>
              </div>

              <div className="cert-detail-field">
                <span className="field-label">{t.modalSkills}</span>
                <div className="modal-chips">
                  {selectedCert.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} className="modal-chip" />
                  ))}
                </div>
              </div>

              {selectedCert.verifyUrl && (
                <div className="cert-detail-field">
                  <span className="field-label">LinkedIn Verificación</span>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" }}>
                    <Button
                      variant="outlined"
                      size="small"
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      startIcon={<LaunchIcon />}
                      style={{ textTransform: "none", color: "#38bdf8", borderColor: "rgba(56, 189, 248, 0.4)" }}
                    >
                      {t.modalOfficialLink}
                    </Button>
                    {selectedCert.skillsUrl && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={selectedCert.skillsUrl}
                        target="_blank"
                        rel="noreferrer"
                        startIcon={<LaunchIcon />}
                        style={{ textTransform: "none", color: "#c084fc", borderColor: "rgba(192, 132, 252, 0.4)" }}
                      >
                        {t.modalSkillsLink}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </DialogContent>

            <DialogActions className="cert-modal-actions">
              {selectedCert.verifyUrl && (
                <Button
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<LaunchIcon />}
                  style={{ textTransform: "none", color: "#38bdf8", marginRight: "auto" }}
                >
                  LinkedIn
                </Button>
              )}
              <Button
                onClick={() => setSelectedCert(null)}
                className="cert-done-btn"
                variant="contained"
              >
                {t.modalDone}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* CV Modal */}
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
