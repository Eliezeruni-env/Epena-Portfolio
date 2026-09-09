import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useLanguage } from "../context/LanguageContext";
import { cvTranslations } from "../translations/content";
import "../assets/styles/CvModal.scss";

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CvModal({ open, onClose }: CvModalProps) {
  const { lang } = useLanguage();
  const t = cvTranslations[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className="cv-modal-dialog"
    >
      <DialogTitle className="cv-modal-title-bar">
        <div className="title-left">
          <span>{t.modalTitle}</span>
          <h2>Eliezer Alberto Peña Zabala</h2>
        </div>
        <div className="title-actions">
          <Button
            variant="contained"
            size="small"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            className="print-btn"
          >
            {t.printBtn}
          </Button>
          <IconButton onClick={onClose} className="close-btn" aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent dividers className="cv-modal-body printable-cv-area">
        {/* Header / Contact Info */}
        <header className="cv-header">
          <div className="cv-name-block">
            <h1>Eliezer Alberto Peña Zabala</h1>
            <p className="cv-role">Full Stack Software Engineer & Solution Architect</p>
          </div>
          <div className="cv-contact-grid">
            <div className="contact-item">
              <LocationOnIcon fontSize="small" /> Santo Domingo, República Dominicana
            </div>
            <div className="contact-item">
              <EmailIcon fontSize="small" /> eliezer.pena@precisa.com.do
            </div>
            <div className="contact-item">
              <GitHubIcon fontSize="small" /> github.com/Eliezeruni-env
            </div>
            <div className="contact-item">
              <LinkedInIcon fontSize="small" /> linkedin.com/in/eliezer-alberto-peña-zabala
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="cv-section">
          <h3>
            <CodeIcon fontSize="small" className="section-icon" /> {t.profileTitle}
          </h3>
          <p>{t.profileText}</p>
        </section>

        {/* Education / University & Technical */}
        <section className="cv-section">
          <h3>
            <SchoolIcon fontSize="small" className="section-icon" /> {t.eduTitle}
          </h3>
          <div className="cv-entry">
            <div className="entry-header">
              <h4>{t.eduDegree}</h4>
              <span className="entry-date">{t.eduStatus}</span>
            </div>
            <div className="entry-institution">
              <strong>{t.eduInst}</strong>
            </div>
            <p className="entry-details">{t.eduDesc}</p>
          </div>

          <div className="cv-entry" style={{ marginTop: "14px" }}>
            <div className="entry-header">
              <h4>{t.btechTitle}</h4>
              <span className="entry-date">Ago 2023 – May 2025</span>
            </div>
            <div className="entry-institution">
              <strong>{t.btechInst}</strong>
            </div>
            <p className="entry-details">{t.btechDesc}</p>
          </div>

          <div className="cv-entry" style={{ marginTop: "14px" }}>
            <div className="entry-header">
              <h4>{t.mescytTitle}</h4>
              <span className="entry-date">B1 / C1</span>
            </div>
            <div className="entry-institution">
              <strong>{t.mescytInst}</strong>
            </div>
            <p className="entry-details">{t.mescytDesc}</p>
          </div>
        </section>

        {/* Technical Experience */}
        <section className="cv-section">
          <h3>
            <WorkIcon fontSize="small" className="section-icon" /> {t.techExpTitle}
          </h3>

          {/* Nurbansoft */}
          <div className="cv-entry">
            <div className="entry-header">
              <h4>Junior Software Developer</h4>
              <span className="entry-date">Jun 2023 - May 2025 · 2 yrs</span>
            </div>
            <div className="entry-institution">Nurbansoft · Full-time</div>
            <ul className="entry-bullets">
              <li>
                {lang === "es"
                  ? "Desarrollo de APIs en ASP.NET para sistemas empresariales ERP y POS aplicando arquitectura Onion de 4 capas (Domain, Application, Infrastructure, API)."
                  : "Development of ASP.NET APIs for enterprise ERP and POS platforms applying 4-tier Onion architecture (Domain, Application, Infrastructure, API)."}
              </li>
              <li>
                {lang === "es"
                  ? "Desarrollo frontend en Angular con arquitectura feature-based y construcción de sistema de gestión de usuarios con ASP.NET y Blazor."
                  : "Frontend engineering in Angular with feature-based architecture, and building user management platform with ASP.NET and Blazor."}
              </li>
            </ul>
          </div>

          {/* Precisa Group */}
          <div className="cv-entry">
            <div className="entry-header">
              <h4>Full Stack Developer</h4>
              <span className="entry-date">2023 - Presente</span>
            </div>
            <div className="entry-institution">Precisa Group (Portal Gerencial, HRIS & Collecta Web)</div>
            <ul className="entry-bullets">
              <li>
                {lang === "es"
                  ? "Portal Web Gerencial: Dashboard de gestión y métricas con monitoreo en vivo de agentes de call center (llamadas, presencia, tarjetas vendidas) mediante ETL desde sistema central con Supabase y PostgreSQL."
                  : "Executive Management Portal: Operational KPI dashboard tracking call center agents (call volume, presence, card sales) via automated ETL on Supabase and PostgreSQL."}
              </li>
              <li>
                {lang === "es"
                  ? "Sistema de Recursos Humanos (HRIS) y Collecta Web: Plataforma integral de personal y web corporativa con API en Express.js para gestión de correos."
                  : "Human Resources (HRIS) & Collecta Web: Enterprise workforce platform and corporate React web application backed by Express.js email API."}
              </li>
            </ul>
          </div>

          {/* DETP */}
          <div className="cv-entry">
            <div className="entry-header">
              <h4>Trainee Software Developer</h4>
              <span className="entry-date">Ene 2023 - Jul 2023 · 7 mos</span>
            </div>
            <div className="entry-institution">Dirección de Educación Técnico Profesional (DETP) · Part-time</div>
            <ul className="entry-bullets">
              <li>
                {lang === "es"
                  ? "Desarrollo en Laravel y Vue.js (MVC) de plataforma para conectar estudiantes técnicos con empresas para gestión de pasantías e inventario de centros."
                  : "Contributed using Laravel and Vue.js (MVC) to develop platform connecting vocational students with companies for internship and center logistics."}
              </li>
            </ul>
          </div>

          {/* Personal Innovations */}
          <div className="cv-entry">
            <div className="entry-header">
              <h4>Proyectos Personales & Labs</h4>
              <span className="entry-date">CuadreEnv · FilmRadar · Games World · MLB Stats · TenantFlow</span>
            </div>
            <div className="entry-institution">Innovación & Soluciones de Software</div>
            <ul className="entry-bullets">
              <li>
                <strong>CuadreEnv:</strong> Ecosistema POS en Angular 21, API financiera .NET 8 Onion e idempotencia, y gobierno de usuarios en React 18 USM.
              </li>
              <li>
                <strong>FilmRadar:</strong> Explorador de cine con Angular y FastAPI (Python). <strong>Games World:</strong> Catálogo gamer en React y Express.js.
              </li>
              <li>
                <strong>MLB Stats:</strong> Analítica sabermétrica en PHP y MySQL. <strong>TenantFlow:</strong> Plataforma SaaS inmobiliaria en Laravel y Vue.js.
              </li>
            </ul>
          </div>
        </section>

        {/* Out-of-area / Multidisciplinary Experience */}
        <section className="cv-section">
          <h3>
            <WorkIcon fontSize="small" className="section-icon" /> {t.outAreaTitle}
          </h3>

          <div className="cv-entry">
            <div className="entry-header">
              <h4>
                {lang === "es"
                  ? "Agente de Call Center — Gestión de Cobros"
                  : "Call Center Agent — Debt Collection & Recovery"}
              </h4>
              <span className="entry-date">{lang === "es" ? "Experiencia Formativa" : "Formative Experience"}</span>
            </div>
            <div className="entry-institution">
              {lang === "es" ? "Servicios Financieros & Recuperación de Cartera" : "Financial Services & Account Recovery"}
            </div>
            <ul className="entry-bullets">
              <li>
                {lang === "es"
                  ? "Gestión telefónica de carteras vencidas, negociación de acuerdos y compromisos de pago bajo metas cuantitativas de recuperación."
                  : "Outbound and inbound telephone collection for delinquent accounts, negotiating structured payment agreements under strict recovery targets."}
              </li>
              <li>
                {lang === "es"
                  ? "Comprensión profunda de la operativa y métricas de agentes de call center, que inspiró directamente el diseño del Portal Web Gerencial de Precisa Group."
                  : "Firsthand mastery of call center workflows and telemetry, directly inspiring the Executive Management Portal engineered at Precisa Group."}
              </li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="entry-header">
              <h4>
                {lang === "es"
                  ? "Supervisor de Operaciones & Arqueo de Caja"
                  : "Operations & Cash Drawer Balancing Supervisor"}
              </h4>
              <span className="entry-date">{lang === "es" ? "Sector Comercial" : "Commercial Retail"}</span>
            </div>
            <div className="entry-institution">
              {lang === "es" ? "Comercio Minorista & Mostrador" : "Retail Checkout & Front Desk"}
            </div>
            <ul className="entry-bullets">
              <li>
                {lang === "es"
                  ? "Arqueos diarios de caja, conciliación física de efectivo, detección de discrepancias y servicio al cliente en mostrador."
                  : "Daily physical cash reconciliations, drawer balancing, variance auditing, and front-desk customer service under pressure."}
              </li>
              <li>
                {lang === "es"
                  ? "Esta experiencia operativa fue la inspiración directa para las reglas de negocio de CuadreEnv."
                  : "This operational background directly inspired the business rules and design of the CuadreEnv ecosystem."}
              </li>
            </ul>
          </div>
        </section>

        {/* Languages */}
        <section className="cv-section">
          <h3>
            <SchoolIcon fontSize="small" className="section-icon" /> {t.languagesTitle}
          </h3>
          <div className="cv-skills-grid">
            <div className="skill-cat">
              <strong>{lang === "es" ? "Español:" : "Spanish:"}</strong> {t.langSpanish}
            </div>
            <div className="skill-cat">
              <strong>{lang === "es" ? "Inglés:" : "English:"}</strong> {t.langEnglish}
            </div>
            <div className="skill-cat">
              <strong>SQL Server / T-SQL:</strong> {t.langSql}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="cv-section">
          <h3>
            <CodeIcon fontSize="small" className="section-icon" /> {t.skillsTitle}
          </h3>
          <div className="cv-skills-grid">
            <div className="skill-cat">
              <strong>Frontend:</strong> Angular 21, React 18, Next.js, Vue.js, JavaScript Vanilla, TypeScript, RxJS, CoreUI, Vite, Bootstrap, SPA Development.
            </div>
            <div className="skill-cat">
              <strong>Backend:</strong> C# / ASP.NET Core (.NET 8 Onion Architecture), Node.js, Express.js, Laravel (PHP), FastAPI (Python), REST APIs.
            </div>
            <div className="skill-cat">
              <strong>{lang === "es" ? "Bases de Datos & Cloud:" : "Databases & Cloud:"}</strong> Microsoft SQL Server, PostgreSQL, Supabase, MySQL, Transact-SQL, Code-First Migrations.
            </div>
            <div className="skill-cat">
              <strong>{lang === "es" ? "Herramientas & DevOps:" : "Tools & DevOps:"}</strong> Git, Git Flow, Control de Versiones, JWT Bearer, RBAC, Clean Architecture, Postman.
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="cv-section">
          <h3>
            <SchoolIcon fontSize="small" className="section-icon" /> {t.certsTitle}
          </h3>
          <ul className="cv-cert-list">
            <li>
              <strong>{lang === "es" ? "Desarrollo Web Full Stack - Intermedio" : "Full Stack Web Development - Intermediate"}</strong> — Instituto Dominicano de las Telecomunicaciones (INDOTEL) [Diseño UX/UI, Node.js, Frontend & Backend]
            </li>
            <li>
              <strong>{lang === "es" ? "Bachiller Técnico (BTech) en Diseño Web & Multimedia" : "Bachelor of Technology (BTech) in Web Design & Multimedia"}</strong> — Instituto Tecnológico Fabio Amable Mota (Ago 2023 – May 2025)
            </li>
            <li>.NET 8 Clean Architecture & Domain-Driven Design (4-tier Onion Architecture)</li>
            <li>
              {lang === "es"
                ? "Desarrollo de Aplicaciones Web Empresariales con Angular & TypeScript (Feature-Based Architecture)"
                : "Enterprise Web Applications Development with Angular & TypeScript (Feature-Based Architecture)"}
            </li>
            <li>
              {lang === "es"
                ? "React 18 & Desarrollo Frontend Moderno con Vite y Express.js"
                : "React 18 & Modern Frontend Engineering with Vite and Express.js"}
            </li>
            <li>
              {lang === "es"
                ? "Modelado y Optimización de Bases de Datos Relacionales con PostgreSQL & SQL Server"
                : "Relational Database Modeling & Optimization with PostgreSQL & SQL Server"}
            </li>
          </ul>
        </section>
      </DialogContent>

      <DialogActions className="cv-modal-footer">
        <Button onClick={handlePrint} variant="outlined" startIcon={<PrintIcon />}>
          {t.printBtn}
        </Button>
        <Button onClick={onClose} variant="contained" className="close-action-btn">
          {t.closeBtn}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
