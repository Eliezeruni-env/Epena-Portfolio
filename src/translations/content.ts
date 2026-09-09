import cuadreenvApiImg from "../assets/images/cuadreenv_api.jpg";
import cuadreenvEcoImg from "../assets/images/cuadreenv_ecosystem.jpg";
import filmradarImg from "../assets/images/filmradar_app.jpg";
import gamesWorldImg from "../assets/images/games_world_app.jpg";
import mlbStatsImg from "../assets/images/mlb_stats_app.jpg";
import tenantflowImg from "../assets/images/tenantflow_app.jpg";
import collectaWebImg from "../assets/images/collecta_web_app.jpg";
import portalGerencialImg from "../assets/images/portal_gerencial_app.jpg";
import hrisSystemImg from "../assets/images/hris_system_app.jpg";
import detpPlatformImg from "../assets/images/detp_platform_app.jpg";

import {
  faLayerGroup,
  faCode,
  faBriefcase,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export interface ProjectItemI18n {
  id: string;
  projectType: "work" | "personal";
  category: "all" | "frontend" | "backend" | "security" | "architecture" | "fullstack";
  image: string;
  tags: string[];
  repoPath: string;
  categoryLabel: { es: string; en: string };
  title: { es: string; en: string };
  shortDesc: { es: string; en: string };
  role: { es: string; en: string };
  overview: { es: string; en: string };
  architectureHighlights: { es: string[]; en: string[] };
  keyFeatures: { es: string[]; en: string[] };
  technicalSpecs: {
    label: { es: string; en: string };
    value: { es: string; en: string };
  }[];
}

export interface CertificateItemI18n {
  id: string;
  title: { es: string; en: string };
  issuer: { es: string; en: string };
  date: string;
  credentialId: string;
  category: { es: string; en: string };
  description: { es: string; en: string };
  skills: string[];
  verifyUrl?: string;
  skillsUrl?: string;
}

export interface TimelineEntryI18n {
  id: string;
  type: "tech" | "other";
  date: { es: string; en: string };
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  location: { es: string; en: string };
  description: { es: string; en: string };
  bullets: { es: string[]; en: string[] };
  skills: string[];
  icon: any;
  iconBg: string;
}

export const navTranslations = {
  es: [
    { label: "Sobre Mí", id: "about" },
    { label: "Competencias", id: "expertise" },
    { label: "Proyectos", id: "projects" },
    { label: "Diplomas & CV", id: "certifications" },
    { label: "Trayectoria", id: "history" },
    { label: "Contacto", id: "contact" },
  ],
  en: [
    { label: "About Me", id: "about" },
    { label: "Skills", id: "expertise" },
    { label: "Projects", id: "projects" },
    { label: "Certificates & CV", id: "certifications" },
    { label: "Experience", id: "history" },
    { label: "Contact", id: "contact" },
  ],
};

export const heroTranslations = {
  es: {
    title: "Eliezer Peña",
    role: "Full Stack Engineer & Solution Architect",
    bio: "Full Stack Developer en Precisa Group (Collecta Web, Portal Gerencial & HRIS) con experiencia previa en sistemas empresariales ERP y POS en Nurbansoft (.NET Onion Architecture, Angular, React, Express, PostgreSQL). Estudiante de Ingeniería de Software en la Universidad del Caribe (UNICARIBE) y egresado del Instituto Tecnológico Fabio Amable Mota.",
    exploreBtn: "Explorar Proyectos",
    cvBtn: "Ver CV / Resumen",
  },
  en: {
    title: "Eliezer Peña",
    role: "Full Stack Engineer & Solution Architect",
    bio: "Full Stack Developer at Precisa Group (Collecta Web, Management Portal & HRIS) with previous enterprise experience building ERP and POS systems at Nurbansoft (.NET Onion Architecture, Angular, React, Express, PostgreSQL). Software Engineering student at Universidad del Caribe (UNICARIBE) and BTech graduate from Instituto Tecnológico Fabio Amable Mota.",
    exploreBtn: "Explore Projects",
    cvBtn: "View Resume / CV",
  },
};

export const aboutTranslations = {
  es: {
    subtitle: "Perfil & Trayectoria",
    heading: "Sobre Mí",
    description: "Conoce mi trayectoria profesional como desarrollador de software en Precisa Group, Nurbansoft y la DETP, mi formación académica universitaria y técnica, y cómo mis competencias multidisciplinarias aportan valor a cada proyecto.",
    bioTag: "Ingeniería & Experiencia",
    bioTitle: "Quién Soy",
    bioP1: "Soy Eliezer Alberto Peña Zabala, desarrollador Full Stack radicado en República Dominicana. Actualmente me desempeño como Full Stack Developer en Precisa Group desarrollando plataformas corporativas como Collecta Web (React + Express), el Portal Web Gerencial para monitoreo en tiempo real de KPIs de call center (React, Express, Supabase, PostgreSQL) y el Sistema de Recursos Humanos (HRIS). Cuento además con más de 2 años de experiencia previa en Nurbansoft construyendo sistemas empresariales ERP y POS con arquitectura Onion de 4 capas (ASP.NET y Angular), y en la DETP desarrollando plataformas educativas (Laravel, Vue.js).",
    bioP2: "Aplico principios rigurosos de Clean Architecture, código modular y reutilizable, evitando el 'hardcoding' y promoviendo soluciones altamente escalables, seguras y centradas en una excelente experiencia de usuario.",
    stat1Number: "Actual",
    stat1Label: "En Precisa Group desarrollando Collecta, Portal Gerencial & HRIS",
    stat2Number: "2+ Años",
    stat2Label: "En Nurbansoft desarrollando ERP & POS (.NET & Angular)",
    stat3Number: "Multi",
    stat3Label: "Stack (.NET Onion, Angular, React, Express, PostgreSQL, Laravel, Vue)",
    uniTag: "Educación Superior",
    uniTitle: "Universidad del Caribe (UNICARIBE)",
    uniDegree: "Ingeniería de Software / Sistemas",
    uniLocation: "Santo Domingo, República Dominicana",
    uniDesc: "Formación académica superior en ingeniería de software, arquitectura de sistemas, patrones de diseño, estructuras de datos, modelado relacional y gestión ágil de proyectos.",
    techBTechTag: "Educación Técnica Secundaria",
    techBTechTitle: "Instituto Tecnológico Fabio Amable Mota",
    techBTechDegree: "Bachelor of Technology (BTech) — Diseño de Páginas Web, Recursos Digitales y Multimedia",
    techBTechDates: "Ago 2023 – May 2025",
    techBTechDesc: "Formación técnica especializada en diseño de interfaces multimedia, desarrollo web, equipos informáticos, instalación y configuración de sistemas.",
    mescytTag: "Programa Especializado de Lenguas",
    mescytTitle: "Inglés por Inmersión para la Educación Superior",
    mescytDegree: "Ministerio de Educación Superior, Ciencia y Tecnología (MESCYT)",
    mescytDates: "Nivel B1 / C1 Profesional",
    mescytDesc: "Graduado del Programa de Inglés por Inmersión. Formación intensiva en fluidez verbal, redacción técnica y comunicación corporativa en idioma inglés.",
    languagesTag: "Idiomas & Comunicación",
    languagesTitle: "Dominio de Idiomas & Comunicación",
    langSpanishTitle: "Español",
    langSpanishLevel: "Nativo",
    langSpanishDesc: "Lengua materna. Alta capacidad de articulación técnica, liderazgo de equipos y redacción de requerimientos de negocio.",
    langEnglishTitle: "Inglés",
    langEnglishLevel: "B1 / C1 (Profesional)",
    langEnglishDesc: "Inglés por Inmersión (MESCYT). Comunicación fluida, capacidad de mantener reuniones técnicas, comprensión y redacción de documentación.",
    uniPill1: "Arquitectura Onion & Clean Code",
    uniPill2: "Bases de Datos (SQL Server, PostgreSQL)",
    uniPill3: "Desarrollo Frontend (Angular, React, Vue)",
    uniPill4: "APIs RESTful (ASP.NET, Express, Laravel)",
    outAreaTag: "Habilidades Transferibles",
    outAreaTitle: "Experiencia Laboral Fuera del Área de Tecnología",
    outAreaIntro: "Mi experiencia laboral como agente de call center en gestión de cobros forjó competencias humanas, operativas y de negociación invaluables:",
    pillarCallCenterTitle: "Agente de Call Center — Gestión de Cobros",
    pillarCallCenterDesc: "Gestión telefónica de carteras en mora, negociación asertiva de acuerdos y compromisos de pago, y manejo de objeciones bajo cumplimiento de metas de recuperación. Esta experiencia permitió comprender a fondo la operativa real de un call center, sus métricas y KPIs, inspirando el desarrollo del Portal Web Gerencial en Precisa Group y módulos de software financiero.",
    pillar2Title: "Comunicación Asertiva & Negociación",
    pillar2Desc: "Habilidad probada en call center de cobranzas para dialogar con usuarios y clientes, resolver conflictos y traducir requerimientos de negocio complejos en software accesible y sin fricción.",
    pillar3Title: "Resiliencia & Trabajo Bajo Presión",
    pillar3Desc: "Capacidad comprobada para gestionar prioridades urgentes, resolver contingencias operativas y entregar resultados confiables en entornos de alta exigencia.",
    cvBannerTitle: "¿Deseas consultar mi hoja de vida completa?",
    cvBannerDesc: "Descarga o visualiza mi Curriculum Vitae con el desglose cronológico de mi experiencia.",
    cvBannerBtn: "Ver Curriculum Vitae (PDF)",
  },
  en: {
    subtitle: "Profile & Career",
    heading: "About Me",
    description: "Discover my engineering journey across Precisa Group, Nurbansoft, and the DETP, my higher university and technical degree background, language proficiencies, and how multidisciplinary experience drives quality across every system I build.",
    bioTag: "Engineering & Experience",
    bioTitle: "Who I Am",
    bioP1: "I am Eliezer Alberto Peña Zabala, a Full Stack Developer based in the Dominican Republic. I currently work at Precisa Group engineering corporate platforms including Collecta Web (React + Express email API), the Executive Management Portal for real-time call center KPIs (React, Express, Supabase, PostgreSQL), and the Human Resources System (HRIS). My background also features over 2 years of experience at Nurbansoft building enterprise ERP and POS systems with 4-tier Onion Architecture (ASP.NET and Angular), and at the DETP building educational platforms (Laravel, Vue.js).",
    bioP2: "I champion Clean Architecture principles, modular and maintainable codebases, zero hardcoding, and scalable designs that prioritize rock-solid security and user-centered ergonomics.",
    stat1Number: "Current",
    stat1Label: "At Precisa Group engineering Collecta, Management Portal & HRIS",
    stat2Number: "2+ Yrs",
    stat2Label: "At Nurbansoft developing ERP & POS (.NET & Angular)",
    stat3Number: "Multi",
    stat3Label: "Stack (.NET Onion, Angular, React, Express, PostgreSQL, Laravel, Vue)",
    uniTag: "Higher Education",
    uniTitle: "Universidad del Caribe (UNICARIBE)",
    uniDegree: "Software Systems Engineering",
    uniLocation: "Santo Domingo, Dominican Republic",
    uniDesc: "Higher academic university degree focused on software engineering, system architecture, design patterns, relational data persistence, and agile project leadership.",
    techBTechTag: "Technical Secondary Education",
    techBTechTitle: "Instituto Tecnológico Fabio Amable Mota",
    techBTechDegree: "Bachelor of Technology (BTech) — Web Page, Digital/Multimedia & Information Resources Design",
    techBTechDates: "Aug 2023 – May 2025",
    techBTechDesc: "Specialized technical vocational degree covering multimedia interfaces, modern web design, computer equipment installation, and systems maintenance.",
    mescytTag: "Specialized Language Program",
    mescytTitle: "English Immersion Program for Higher Education",
    mescytDegree: "Ministry of Higher Education, Science and Technology (MESCYT)",
    mescytDates: "B1 / C1 Professional Level",
    mescytDesc: "Graduate of the English Immersion Program for Higher Education. Intensive training in spoken fluency, technical reading, and international business communication.",
    languagesTag: "Languages & Communication",
    languagesTitle: "Languages & Technical Communication",
    langSpanishTitle: "Spanish",
    langSpanishLevel: "Native",
    langSpanishDesc: "Native language. Outstanding technical documentation, team leadership, and cross-functional business analysis skills.",
    langEnglishTitle: "English",
    langEnglishLevel: "B1 / C1 (Professional)",
    langEnglishDesc: "English Immersion Program (MESCYT). Fluent conversational skills, technical meetings, international documentation review, and global team collaboration.",
    uniPill1: "Onion Architecture & Clean Code",
    uniPill2: "Databases (SQL Server, PostgreSQL)",
    uniPill3: "Frontend Engineering (Angular, React, Vue)",
    uniPill4: "RESTful APIs (ASP.NET, Express, Laravel)",
    outAreaTag: "Transferable Skills",
    outAreaTitle: "Work Experience Outside the Tech Field",
    outAreaIntro: "My professional experience as a debt collections call center agent cultivated vital human, operational, and negotiation competencies:",
    pillarCallCenterTitle: "Call Center Agent — Debt Collections & Recovery",
    pillarCallCenterDesc: "Outbound and inbound customer negotiation for delinquent accounts, payment plan agreements, and dispute resolution under demanding recovery targets. This operational field experience provided first-hand knowledge of call center workflows and metrics, directly inspiring the executive KPI portal for Precisa Group and financial reconciliation software.",
    pillar2Title: "Assertive Communication & Negotiation",
    pillar2Desc: "Proven ability honed in debt collection negotiations and customer-facing roles to bridge communication gaps and translate business constraints into frictionless, accessible software.",
    pillar3Title: "Resilience & Composure Under Pressure",
    pillar3Desc: "Demonstrated capacity to handle mission-critical priorities, troubleshoot root causes rapidly, and maintain peak quality in fast-paced operational environments.",
    cvBannerTitle: "Looking to review my full professional resume?",
    cvBannerDesc: "View or download my comprehensive Curriculum Vitae with full chronological breakdown.",
    cvBannerBtn: "View Curriculum Vitae (PDF)",
  },
};

export const expertiseTranslations = {
  es: {
    heading: "Competencias Técnicas",
    card1Title: "Frontend Engineering (Angular, React, Vue)",
    card1Desc: "Desarrollo de interfaces de usuario modernas y modulares orientadas a la experiencia del usuario (UX). Implementación de arquitectura por funcionalidades (feature-based) en Angular, React + Vite, y Vue.js con patrones MVC.",
    card2Title: "Backend & Arquitectura Onion (.NET, Express, Laravel)",
    card2Desc: "Construcción de APIs empresariales para ERP y POS aplicando Arquitectura Onion de 4 capas (Domain, Application, Infrastructure, API). Lógica de negocio, autenticación, control de accesos, roles y servicios en Express.js y Laravel.",
    card3Title: "Bases de Datos, Integración & DevOps",
    card3Desc: "Persistencia y modelado de datos con SQL Server, PostgreSQL y Supabase. Integración y procesamiento de datos (ETL) para dashboards gerenciales, control de versiones con Git/GitHub y buenas prácticas de Clean Code.",
    techStack: "Tech stack:",
  },
  en: {
    heading: "Technical Expertise",
    card1Title: "Frontend Engineering (Angular, React, Vue)",
    card1Desc: "Development of modern, modular UI applications centered on user experience (UX). Implementation of feature-based modular architectures in Angular, React + Vite dashboards, and Vue.js with MVC patterns.",
    card2Title: "Backend & Onion Architecture (.NET, Express, Laravel)",
    card2Desc: "Engineering robust APIs for enterprise ERP and POS platforms applying 4-tier Onion Architecture (Domain, Application, Infrastructure, API). Business logic, authentication, RBAC access control, and Express.js / Laravel microservices.",
    card3Title: "Databases, Data Integration & DevOps",
    card3Desc: "Data persistence and relational schema design using SQL Server, PostgreSQL, and Supabase. Data transformation and ETL pipelines for executive KPI dashboards, Git version control, and Clean Code standards.",
    techStack: "Tech stack:",
  },
};

export const projectTranslations = {
  es: {
    subtitle: "Portafolio de Ingeniería",
    heading: "Proyectos Destacados",
    description: "Explora mis desarrollos divididos en Proyectos de Trabajo Real (Sistemas Empresariales Desarrollados en Precisa Group, Nurbansoft y DETP) y Proyectos Personales.",
    workTabMain: "Proyectos de Trabajo Real",
    workTabSub: "Sistemas empresariales en producción (Precisa Group, Nurbansoft, DETP)",
    personalTabMain: "Proyectos Personales",
    personalTabSub: "Ecosistema CuadreEnv, FilmRadar, Games World, MLB Stats & TenantFlow",
    filterAll: "Todos",
    filterPrecisa: "Precisa Group",
    filterNurbansoft: "Nurbansoft (ERP / POS)",
    filterDetp: "DETP (Laravel / Vue)",
    filterCuadreEnv: "CuadreEnv Ecosystem",
    filterFilmRadar: "FilmRadar",
    filterGamesWorld: "Games World",
    filterMlbStats: "MLB Stats",
    filterTenantFlow: "TenantFlow",
    filterUiLabs: "Frontend & UI Labs",
    filterFullStack: "Full-Stack & Next.js",
    viewDetailBtn: "Explorar Ficha Técnica",
    modalOverview: "Descripción General",
    modalArch: "Aspectos Clave de Arquitectura",
    modalFeatures: "Módulos y Funcionalidades Principales",
    modalTech: "Tecnologías & Herramientas Empleadas",
    modalClose: "Cerrar",
  },
  en: {
    subtitle: "Engineering Portfolio",
    heading: "Featured Projects",
    description: "Explore my work categorized into Real-World Production Systems (Engineered across Precisa Group, Nurbansoft, and DETP) and Personal Projects.",
    workTabMain: "Real-World Projects",
    workTabSub: "Enterprise production platforms (Precisa Group, Nurbansoft, DETP)",
    personalTabMain: "Personal Projects",
    personalTabSub: "CuadreEnv Ecosystem, FilmRadar, Games World, MLB Stats & TenantFlow",
    filterAll: "All",
    filterPrecisa: "Precisa Group",
    filterNurbansoft: "Nurbansoft (ERP / POS)",
    filterDetp: "DETP (Laravel / Vue)",
    filterCuadreEnv: "CuadreEnv Ecosystem",
    filterFilmRadar: "FilmRadar",
    filterGamesWorld: "Games World",
    filterMlbStats: "MLB Stats",
    filterTenantFlow: "TenantFlow",
    filterUiLabs: "Frontend & UI Labs",
    filterFullStack: "Full-Stack & Next.js",
    viewDetailBtn: "View Technical Specs",
    modalOverview: "System Overview",
    modalArch: "Key Architectural Highlights",
    modalFeatures: "Core Modules & Features",
    modalTech: "Technologies & Tools Used",
    modalClose: "Close",
  },
};

export const projectsDataI18n: ProjectItemI18n[] = [
  // ==========================================
  // PROYECTOS DE TRABAJO REAL (PRECISA GROUP, NURBANSOFT, DETP)
  // ==========================================
  {
    id: "precisa-portal-gerencial",
    projectType: "work",
    category: "fullstack",
    image: portalGerencialImg,
    tags: ["React", "Express.js", "Supabase", "PostgreSQL", "APIs REST", "Data Processing"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\Precisa\\portal-gerencial",
    categoryLabel: { es: "Precisa Group • Dashboard de Gestión & Métricas", en: "Precisa Group • Management & KPI Dashboard" },
    title: {
      es: "Portal Web Gerencial — Precisa Group",
      en: "Executive Management Portal — Precisa Group",
    },
    shortDesc: {
      es: "Dashboard de gestión y métricas orientado a la administración de usuarios y monitoreo de indicadores operativos (KPIs) del call center (agentes activos, volumen de llamadas, ventas).",
      en: "Executive dashboard for user management and operational KPI monitoring (call center agents active status, call volume, and sales conversion analytics).",
    },
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    overview: {
      es: "Desarrollo de un portal interno orientado a la gestión de usuarios y monitoreo de indicadores operativos (KPIs) de la empresa. Permite consultar información de los agentes del call center, incluyendo su estado de actividad, cantidad de agentes activos, volumen de llamadas realizadas durante determinados períodos, tarjetas vendidas y otros indicadores relevantes para la toma de decisiones. El sistema obtiene y procesa información proveniente de un sistema principal de la empresa, realizando una extracción y transformación de datos (ETL) para posteriormente presentarlos mediante dashboards y métricas de fácil interpretación.",
      en: "Internal portal dedicated to user management and real-time operational KPI monitoring. Enables leadership to track call center agents' live activity states, call volume throughput across periods, card sales, and performance benchmarks. The platform ingests data from the core enterprise system, performs automated extraction and transformation (ETL), and renders intuitive visual dashboards.",
    },
    architectureHighlights: {
      es: [
        "Extracción y transformación de datos (ETL) conectando con el sistema central de la empresa.",
        "Arquitectura frontend en React con visualización gráfica de métricas de fácil interpretación.",
        "API en Express.js con persistencia y sincronización mediante Supabase y PostgreSQL.",
        "Filtros dinámicos por períodos, agentes y departamentos operativos.",
      ],
      en: [
        "Data ingestion and transformation (ETL) pipeline connecting to the primary corporate platform.",
        "Responsive React frontend presenting intuitive KPI telemetry and status indicators.",
        "Express.js backend with Supabase and PostgreSQL database storage.",
        "Multi-dimensional filtering by time periods, agent IDs, and department queues.",
      ],
    },
    keyFeatures: {
      es: [
        "Monitoreo de Call Center en Vivo: Agentes activos, llamadas cursadas y estados de conexión.",
        "Gestión de Usuarios y Roles: Control administrativo de accesos y visualización por rangos.",
        "Métricas de Ventas: Registro de tarjetas vendidas y metas comerciales por período.",
        "Reportes Ejecutivos: Consolidación de datos procesados para la toma de decisiones directivas.",
      ],
      en: [
        "Live Call Center Monitoring: Active agent headcount, call volume, and presence states.",
        "User & Role Governance: Role-scoped access control and hierarchical team visibility.",
        "Sales Telemetry: Real-time tracking of cards sold and departmental conversion goals.",
        "Executive Reporting: Consolidated analytics aiding strategic management decisions.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "React + Modern UI", en: "React + Modern UI" } },
      { label: { es: "Backend", en: "Backend" }, value: { es: "Express.js RESTful API", en: "Express.js RESTful API" } },
      { label: { es: "Base de Datos", en: "Database" }, value: { es: "Supabase + PostgreSQL", en: "Supabase + PostgreSQL" } },
      { label: { es: "Procesamiento", en: "Data Processing" }, value: { es: "ETL & Agregación de Métricas", en: "ETL & Metrics Aggregation" } },
    ],
  },
  {
    id: "precisa-hris",
    projectType: "work",
    category: "fullstack",
    image: hrisSystemImg,
    tags: ["React", "Express.js", "Supabase", "PostgreSQL", "APIs REST", "Clean Architecture"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\Precisa\\hris-api",
    categoryLabel: { es: "Precisa Group • Plataforma de Recursos Humanos", en: "Precisa Group • Human Resources Platform" },
    title: {
      es: "Sistema de Recursos Humanos (HRIS) — Precisa Group",
      en: "Human Resources Platform (HRIS) — Precisa Group",
    },
    shortDesc: {
      es: "Plataforma web integral para la gestión centralizada de los procesos de Recursos Humanos de la empresa, administración del personal, lógica de negocio y APIs REST.",
      en: "Comprehensive Human Resources web platform centralizing employee records, business logic, REST APIs, and administrative workforce processes.",
    },
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    overview: {
      es: "Desarrollo de una plataforma web para la gestión integral de los procesos de Recursos Humanos de Precisa Group. El sistema centraliza diferentes procesos relacionados con la administración del personal, permitiendo gestionar y consultar información de los colaboradores desde una plataforma unificada. Participación activa en el desarrollo tanto del frontend como del backend, incluyendo la construcción de interfaces, lógica de negocio, APIs y gestión de datos.",
      en: "Comprehensive platform centralizing Human Resources workflows across Precisa Group. The system allows administrative staff to manage employee records, contracts, and workforce documentation in a single unified interface. Actively engineered both frontend and backend layers, crafting intuitive UI views, business services, REST APIs, and database schemas.",
    },
    architectureHighlights: {
      es: [
        "Desarrollo Full Stack integral: Frontend en React y Backend en Express.js.",
        "Persistencia robusta y relacional sobre PostgreSQL gestionado a través de Supabase.",
        "Separación modular de servicios para gestión de colaboradores y expedientes.",
        "Seguridad y control de acceso granular a información confidencial de nómina y personal.",
      ],
      en: [
        "End-to-end Full Stack engineering: React frontend coupled with an Express.js backend.",
        "Robust relational data persistence on PostgreSQL backed by Supabase.",
        "Modular service architecture for employee files, leaves, and organizational charts.",
        "Role-scoped access control protecting confidential employee and payroll data.",
      ],
    },
    keyFeatures: {
      es: [
        "Expedientes de Colaboradores: Consulta y actualización centralizada de datos de personal.",
        "Administración de Procesos de RRHH: Gestión de solicitudes, permisos y registros internos.",
        "APIs REST Modulares: Endpoints estructurados para la integración ágil entre módulos.",
        "Gestión de Datos Segura: Validación estricta y protección de datos sensibles de la organización.",
      ],
      en: [
        "Employee Directory: Centralized inquiry and management of staff files.",
        "HR Workflow Management: Tracking requests, employee documentation, and company records.",
        "Modular REST APIs: Well-structured endpoints enabling cross-module integrations.",
        "Data Security: Stringent validations safeguarding sensitive organizational records.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "React + Custom Components", en: "React + Custom Components" } },
      { label: { es: "Backend", en: "Backend" }, value: { es: "Express.js RESTful API", en: "Express.js RESTful API" } },
      { label: { es: "Persistencia", en: "Persistence" }, value: { es: "Supabase + PostgreSQL", en: "Supabase + PostgreSQL" } },
      { label: { es: "Arquitectura", en: "Architecture" }, value: { es: "Clean Service Layer", en: "Clean Service Layer" } },
    ],
  },
  {
    id: "precisa-collecta-web",
    projectType: "work",
    category: "frontend",
    image: collectaWebImg,
    tags: ["React", "Express.js", "JavaScript/TypeScript", "APIs REST", "Email Gateway"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\Precisa\\collecta",
    categoryLabel: { es: "Precisa Group • Aplicación Web Corporativa", en: "Precisa Group • Corporate Web Application" },
    title: {
      es: "Collecta Web — Precisa Group",
      en: "Collecta Web — Precisa Group",
    },
    shortDesc: {
      es: "Aplicación web corporativa orientada a presentar información y servicios de la empresa, con API en Express.js encargada de gestionar el envío y recepción de correos electrónicos.",
      en: "Corporate web application showcasing company services, backed by an Express.js API managing transactional email messaging and inquiries.",
    },
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    overview: {
      es: "Desarrollo de una aplicación web corporativa orientada a presentar información y servicios de Precisa Group. El proyecto fue construido con React y complementado con una API desarrollada en Express.js, encargada principalmente de gestionar el envío y recepción de correos electrónicos y solicitudes desde la plataforma de forma segura y confiable.",
      en: "Corporate web platform engineered to present the full portfolio of enterprise services for Precisa Group. Built with React for interactive presentation and supported by an Express.js API dedicated to dispatching and managing transactional email communications and inquiries.",
    },
    architectureHighlights: {
      es: [
        "Frontend interactivo y de alto impacto visual desarrollado en React.",
        "API backend desacoplada en Express.js para procesamiento de formularios y correos.",
        "Manejo asíncrono de solicitudes y validaciones de entrada para prevención de spam.",
        "Integración con servicios de mensajería empresarial.",
      ],
      en: [
        "High-performance interactive React frontend with responsive layout.",
        "Decoupled Express.js backend API processing forms and email communications.",
        "Asynchronous handling with anti-spam and strict payload validations.",
        "Reliable integration with enterprise SMTP and mail transport gateways.",
      ],
    },
    keyFeatures: {
      es: [
        "Catálogo de Servicios Corporativos: Presentación fluida y profesional de la oferta empresarial.",
        "Gestión de Correos Electrónicos: API especializada en el despacho y recepción de mensajes.",
        "Formularios Asíncronos: Validación en tiempo real y confirmaciones instantáneas.",
      ],
      en: [
        "Corporate Service Showcase: Clean, modern display of institutional offerings.",
        "Email Gateway: Specialized API dispatching and monitoring inbound customer inquiries.",
        "Asynchronous Inquiries: Real-time form validation with user instant feedback.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "React + JavaScript/TypeScript", en: "React + JavaScript/TypeScript" } },
      { label: { es: "Backend", en: "Backend" }, value: { es: "Express.js REST API", en: "Express.js REST API" } },
      { label: { es: "Protocolo", en: "Protocols" }, value: { es: "RESTful JSON / SMTP", en: "RESTful JSON / SMTP" } },
    ],
  },
  {
    id: "nurbansoft-erp-pos",
    projectType: "work",
    category: "backend",
    image: cuadreenvApiImg,
    tags: ["ASP.NET Web API", "Onion Architecture", "Angular", "Blazor", "C#", "SQL Server", "Clean Architecture"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\MyDev\\cuadreEnv\\api",
    categoryLabel: { es: "Nurbansoft • Sistemas ERP & POS", en: "Nurbansoft • ERP & POS Systems" },
    title: {
      es: "Sistemas ERP & POS — Nurbansoft",
      en: "ERP & POS Enterprise Systems — Nurbansoft",
    },
    shortDesc: {
      es: "Desarrollo de APIs en ASP.NET con Arquitectura Onion de 4 capas (Domain, Application, Infrastructure, API) para ERP y POS, frontend modular en Angular y sistema de gestión de usuarios con Blazor.",
      en: "Development of ASP.NET APIs for ERP and POS enterprise systems applying 4-tier Onion Architecture, feature-based Angular frontend, and Blazor user management.",
    },
    role: { es: "Junior Software Developer", en: "Junior Software Developer" },
    overview: {
      es: "Durante 2 años a tiempo completo en Nurbansoft, participé en el desarrollo de APIs en ASP.NET para sistemas empresariales ERP y POS, aplicando una arquitectura Onion de 4 capas (Domain, Application, Infrastructure y API) para asegurar escalabilidad y mantenibilidad. Implementación de funcionalidades backend como autenticación, gestión de roles, control de accesos y lógica de negocio. Desarrollo frontend en Angular utilizando una arquitectura basada en características (feature-based), creando módulos organizados y reutilizables. Construcción de un sistema de gestión de usuarios con ASP.NET en el backend y Blazor en el frontend, incluyendo gestión de usuarios, roles y permisos. Aplicación rigurosa de principios Clean Architecture y código mantenible sin hardcoding.",
      en: "Across 2 years full-time at Nurbansoft, developed ASP.NET APIs for enterprise ERP and POS systems applying a 4-tier Onion architecture (Domain, Application, Infrastructure, and API) to ensure scalability and maintainability. Implemented backend features including authentication, role management, access control, and business logic. Engineered frontend applications in Angular using feature-based architecture, creating organized, reusable modules. Built a user management system with ASP.NET on the backend and Blazor on the frontend, encompassing user, role, and permission management, adhering to Clean Architecture and avoid hardcoding.",
    },
    architectureHighlights: {
      es: [
        "Arquitectura Onion de 4 capas (Domain, Application, Infrastructure, API).",
        "Frontend en Angular con arquitectura orientada a características (feature-based).",
        "Sistema de gobierno de usuarios con ASP.NET en backend y Blazor en frontend.",
        "Clean Code y Clean Architecture eliminando el hardcoding y maximizando la reutilización.",
      ],
      en: [
        "4-tier Clean Onion Architecture (Domain, Application, Infrastructure, API).",
        "Feature-based Angular frontend architecture delivering reusable UI modules.",
        "User governance platform with ASP.NET backend and Blazor frontend.",
        "Strict Clean Code practices avoiding hardcoding and ensuring high testability.",
      ],
    },
    keyFeatures: {
      es: [
        "APIs Transaccionales para ERP & POS: Control de ventas, inventario y arqueo.",
        "Autenticación & RBAC: Control estricto de accesos y privilegios por rol.",
        "Módulos Reutilizables en Angular: Componentes desacoplados enfocados en experiencia de usuario.",
        "Gestión de Usuarios con Blazor: Administración centralizada de credenciales y permisos.",
      ],
      en: [
        "Transactional ERP & POS APIs: Handling retail sales, inventory, and register balancing.",
        "Authentication & RBAC: Fine-grained access control and role assignment.",
        "Reusable Angular Modules: Component-driven UI prioritizing seamless cashier workflows.",
        "Blazor User Administration: Centralized management of roles, claims, and credentials.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Backend", en: "Backend" }, value: { es: "ASP.NET Web API (C#)", en: "ASP.NET Web API (C#)" } },
      { label: { es: "Arquitectura", en: "Architecture" }, value: { es: "4-Tier Onion Architecture", en: "4-Tier Onion Architecture" } },
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "Angular (Feature-Based) + Blazor", en: "Angular (Feature-Based) + Blazor" } },
      { label: { es: "Base de Datos", en: "Database" }, value: { es: "Microsoft SQL Server", en: "Microsoft SQL Server" } },
    ],
  },
  {
    id: "detp-educational-platform",
    projectType: "work",
    category: "fullstack",
    image: detpPlatformImg,
    tags: ["Laravel", "Vue.js", "PHP", "MySQL", "MVC", "REST API"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\MyDev",
    categoryLabel: { es: "DETP • Plataforma de Educación Técnico Profesional", en: "DETP • Vocational Education Platform" },
    title: {
      es: "Plataforma de Vinculación & Pasantías — DETP",
      en: "Internship & Administrative Platform — DETP",
    },
    shortDesc: {
      es: "Plataforma desarrollada para la Dirección de Educación Técnico Profesional (DETP) para conectar estudiantes de institutos técnicos con empresas, gestionar pasantías, inventario de materiales y finanzas.",
      en: "Platform engineered for the Directorate of Technical and Vocational Education (DETP) connecting students with companies for internship placement, material tracking, and center finances.",
    },
    role: { es: "Trainee Software Developer", en: "Trainee Software Developer" },
    overview: {
      es: "Participación en el desarrollo de una plataforma para la Dirección de Educación Técnico Profesional (DETP), diseñada para conectar estudiantes de institutos técnicos con empresas y facilitar la gestión de pasantías. La plataforma también funcionó como un sistema administrativo integral, permitiendo a los administradores gestionar información de centros educativos específicos, incluyendo el seguimiento de entrada y salida de materiales, gestión de registros financieros y monitoreo de matrículas estudiantiles. Desarrollo utilizando Laravel para el backend y Vue.js para el frontend bajo el patrón Modelo-Vista-Controlador (MVC).",
      en: "Contributed to developing an educational platform for the Directorate of Technical and Vocational Education (DETP), designed to connect technical institute students with hiring companies and streamline internship coordination. The platform also served as a comprehensive administrative center system: tracking inventory movements, managing financial balances, and auditing student enrollment. Developed using Laravel on the backend and Vue.js on the frontend following the MVC pattern.",
    },
    architectureHighlights: {
      es: [
        "Patrón Modelo-Vista-Controlador (MVC) con Laravel y Vue.js.",
        "Módulo de vinculación de estudiantes con empresas para pasantías laborales.",
        "Módulo de gestión administrativa: inventario de materiales, finanzas y matrículas.",
        "Desarrollo colaborativo en equipo con control de versiones Git.",
      ],
      en: [
        "Model-View-Controller (MVC) architecture leveraging Laravel and Vue.js.",
        "Student-company internship placement and progress tracking module.",
        "School administration module: material inventory, financial ledger, and enrollment.",
        "Collaborative agile development with Git version control.",
      ],
    },
    keyFeatures: {
      es: [
        "Gestión de Pasantías: Vinculación directa entre centros educativos técnicos y empresas.",
        "Control de Materiales: Registro de entradas y salidas de suministros en institutos.",
        "Registros Financieros: Monitoreo presupuestario y balances de centros educativos.",
        "Matrícula Estudiantil: Seguimiento del estatus académico y asignación de prácticas.",
      ],
      en: [
        "Internship Placement: Direct bridging between vocational schools and enterprises.",
        "Material Tracking: Inbound and outbound inventory tracking for educational supplies.",
        "Financial Records: Center-level budget and expense ledger management.",
        "Enrollment Monitoring: Student academic status and apprenticeship assignments.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Backend", en: "Backend" }, value: { es: "Laravel (PHP)", en: "Laravel (PHP)" } },
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "Vue.js", en: "Vue.js" } },
      { label: { es: "Patrón", en: "Pattern" }, value: { es: "Modelo-Vista-Controlador (MVC)", en: "Model-View-Controller (MVC)" } },
      { label: { es: "Base de Datos", en: "Database" }, value: { es: "MySQL", en: "MySQL" } },
    ],
  },
  // ==========================================
  // PROYECTOS PERSONALES (LABS / INNOVATION)
  // ==========================================
  {
    id: "cuadreenv-ecosystem",
    projectType: "personal",
    category: "architecture",
    image: cuadreenvEcoImg,
    tags: ["Enterprise Architecture", "Angular 21", ".NET 8 Onion", "React 18 USM", "SQL Server", "POS"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\MyDev\\cuadreEnv",
    categoryLabel: { es: "Proyecto Personal Destacado • Ecosistema CuadreEnv", en: "Flagship Personal Project • CuadreEnv Ecosystem" },
    title: {
      es: "Ecosistema CuadreEnv — ERP, POS & User Management",
      en: "CuadreEnv Ecosystem — ERP, POS & User Management",
    },
    shortDesc: {
      es: "Ecosistema integral que unifica venta en mostrador (Angular 21), motor contable transaccional (.NET 8 Onion) y gobierno de usuarios con auditoría (React 18 + Express).",
      en: "Unified enterprise ecosystem integrating retail checkout (Angular 21), transactional financial engine (.NET 8 Onion), and user access governance (React 18 + Express).",
    },
    role: { es: "Solution Architect & Full Stack Engineer", en: "Solution Architect & Full Stack Engineer" },
    overview: {
      es: "Plataforma concebida para resolver los desafíos operacionales y financieros del comercio. Unifica terminales de venta en mostrador con escaneo de código de barras y arqueo de caja en Angular 21, un motor financiero en .NET 8 con Arquitectura Onion e idempotencia estricta, y un sistema de gestión de usuarios en React 18 con microservicio Express y control de auditoría LastLoginAt.",
      en: "Full-scale ecosystem solving retail operational challenges. Unifies counter checkouts with barcode scanning and cash drawer balancing in Angular 21, a .NET 8 Onion financial core with transaction idempotency, and a React 18 user governance platform with Express and LastLoginAt audit tracking.",
    },
    architectureHighlights: {
      es: [
        "Integración entre Frontend Angular, Frontend React y Backend .NET Onion.",
        "Idempotencia garantizada en cobros y sesiones concurrentes de arqueo de caja.",
        "Control de accesos con tokens JWT y migración de auditoría en base de datos.",
      ],
      en: [
        "Full integration between Angular POS, React USM, and .NET Onion backend.",
        "Guaranteed transaction idempotency and concurrent drawer session balancing.",
        "Multi-tenant JWT security with database session audit migrations.",
      ],
    },
    keyFeatures: {
      es: [
        "Terminal POS en Mostrador: Venta ágil, devoluciones y tickets en espera.",
        "Arqueo de Caja en Vivo: Control inmutable de entradas/salidas y recibos impresos.",
        "Gobierno de Usuarios: Asignación de roles, activación/suspensión y auditoría de accesos.",
      ],
      en: [
        "Counter POS Terminal: Rapid sales, returns, and parking orders.",
        "Live Drawer Balancing: Immutable cash movement tracking with printed receipts.",
        "User Governance: Role assignment, account activation, and login auditing.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Stack Completo", en: "Full Stack" }, value: { es: "Angular 21 + React 18 + .NET 8 + Express", en: "Angular 21 + React 18 + .NET 8 + Express" } },
      { label: { es: "Persistencia", en: "Database" }, value: { es: "Microsoft SQL Server", en: "Microsoft SQL Server" } },
      { label: { es: "Arquitectura", en: "Architecture" }, value: { es: "Onion 4-Tier + Microservicios", en: "4-Tier Onion + Microservices" } },
    ],
  },
  {
    id: "personal-filmradar",
    projectType: "personal",
    category: "fullstack",
    image: filmradarImg,
    tags: ["FastAPI", "Angular", "Python", "TypeScript", "REST API", "Reactive UI"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\FilmRadar",
    categoryLabel: { es: "Proyecto Personal • FastAPI & Angular", en: "Personal Project • FastAPI & Angular" },
    title: {
      es: "FilmRadar — Explorador Cinematográfico & Recomendaciones",
      en: "FilmRadar — Movie Discovery & Recommendation Hub",
    },
    shortDesc: {
      es: "Plataforma interactiva de descubrimiento y recomendación cinematográfica con frontend reactivo en Angular y microservicio backend en Python con FastAPI.",
      en: "Movie discovery platform featuring a reactive Angular frontend and a high-performance Python FastAPI backend microservice.",
    },
    role: { es: "Full Stack Creator", en: "Full Stack Creator" },
    overview: {
      es: "Plataforma cinematográfica interactiva que combina una interfaz moderna en Angular con un microservicio backend en FastAPI (Python). El sistema permite buscar y filtrar películas en tiempo real, consultar fichas técnicas completas (sinopsis, directores, reparto estelar, calificaciones de la crítica y trailers), además de organizar listas de títulos favoritos con respuesta en milisegundos.",
      en: "Modern movie exploration web application integrating an Angular SPA with a Python FastAPI asynchronous backend. Enables users to search, explore, and filter films by genres, release dates, and ratings, featuring detailed director and cast filmographies with trailer integration.",
    },
    architectureHighlights: {
      es: [
        "Microservicio asíncrono en FastAPI (ASGI) con validación estricta de esquemas mediante Pydantic.",
        "Frontend modular en Angular con arquitectura basada en componentes y tipado estricto.",
        "Consumo optimizado de APIs externas de cine con debounce dinámico y caché de respuestas.",
        "Documentación interactiva de endpoints generada automáticamente con Swagger / OpenAPI.",
      ],
      en: [
        "Asynchronous FastAPI (ASGI) backend with strict Pydantic data contract validation.",
        "Modular Angular SPA with reactive RxJS state and strong typing.",
        "External movie API integration with input debouncing and response caching.",
        "Interactive auto-generated Swagger / OpenAPI endpoint documentation.",
      ],
    },
    keyFeatures: {
      es: [
        "Catálogo Cinematográfico Dinámico: Exploración por géneros, populares, estrenos y tendencias.",
        "Ficha Técnica Exhaustiva: Reparto, sinopsis, duración, calificación y enlaces a trailers.",
        "Búsqueda Reactiva Instantánea: Filtros combinados por título, año y actor.",
        "Diseño Adaptable y Fluido: Interfaz moderna con animaciones y modo oscuro cinematográfico.",
      ],
      en: [
        "Dynamic Movie Catalog: Browse by genre, trending releases, and top-rated classics.",
        "Detailed Film Data: Cast members, plot summaries, runtimes, and embedded trailers.",
        "Instant Reactive Search: Combined multi-criteria filtering by title, release year, and actor.",
        "Fluid Dark Theme: Modern cinematic UI with smooth transitions.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Backend", en: "Backend" }, value: { es: "FastAPI (Python) + Pydantic", en: "FastAPI (Python) + Pydantic" } },
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "Angular + TypeScript", en: "Angular + TypeScript" } },
      { label: { es: "Arquitectura", en: "Architecture" }, value: { es: "Microservicio RESTful Asíncrono", en: "Asynchronous RESTful Microservice" } },
      { label: { es: "Datos", en: "Data" }, value: { es: "The Movie Database (TMDB) API", en: "The Movie Database (TMDB) API" } },
    ],
  },
  {
    id: "personal-games-world",
    projectType: "personal",
    category: "fullstack",
    image: gamesWorldImg,
    tags: ["React.js", "Express.js", "Node.js", "REST API", "Gaming Database", "Custom Hooks"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\GamesWorld",
    categoryLabel: { es: "Proyecto Personal • React & Express", en: "Personal Project • React & Express" },
    title: {
      es: "Games World — Portal de Videojuegos & Catálogo Gamer",
      en: "Games World — Gaming Database & Explorer",
    },
    shortDesc: {
      es: "Portal web interactivo para gamers con catálogo de videojuegos por plataforma, requisitos técnicos y API REST en Express.js con React.",
      en: "Interactive gaming portal featuring cross-platform video game catalog, system specs, and a Node/Express REST API powering a React frontend.",
    },
    role: { es: "Full Stack Creator", en: "Full Stack Creator" },
    overview: {
      es: "Plataforma concebida para la comunidad gamer que recopila miles de títulos de múltiples plataformas (PC, PlayStation, Xbox, Nintendo Switch). La aplicación cuenta con una interfaz fluida construida en React y un servidor backend desacoplado en Express.js que gestiona las peticiones a bases de datos de juegos, previene abusos de cuota mediante caché y sirve información enriquecida como requisitos mínimos/recomendados, capturas en 4K y tiendas oficiales.",
      en: "Full-stack gaming hub designed to catalog thousands of video games across major platforms (PC, PlayStation, Xbox, Switch). Built with a fluid React frontend and an Express.js API that enriches, caches, and serves title specifications, system requirements, high-res screenshots, and store links.",
    },
    architectureHighlights: {
      es: [
        "Desacoplamiento total entre frontend React y API Gateway en Express.js.",
        "Manejo de estado reactivo con Custom Hooks y persistencia en LocalStorage.",
        "Estrategia de caching en el backend para minimizar peticiones a APIs externas de videojuegos.",
        "Renderizado condicional optimizado con skeleton loaders durante la carga de imágenes pesadas.",
      ],
      en: [
        "Decoupled architecture: React client consuming dedicated Express.js API gateway.",
        "Reactive state management via custom hooks with LocalStorage persistence.",
        "Server-side caching layer reducing third-party gaming API rate limit usage.",
        "Optimized conditional rendering with skeleton placeholders for high-resolution graphics.",
      ],
    },
    keyFeatures: {
      es: [
        "Explorador de Videojuegos Multiplataforma: Filtro por PC, consolas, géneros y fechas de lanzamiento.",
        "Fichas Técnicas para PC: Requisitos de hardware mínimos y recomendados.",
        "Galería de Capturas de Pantalla: Visor interactivo en pantalla completa con capturas HD.",
        "Biblioteca de Favoritos: Guardado de listas personalizadas de juegos pendientes y completados.",
      ],
      en: [
        "Cross-Platform Game Catalog: Filter by PC, console families, genres, and launch years.",
        "PC Specs Inspector: Minimum and recommended hardware requirement tables.",
        "Screenshot Gallery: Interactive full-screen media showcase with HD captures.",
        "Favorites Wishlist: Saved personal lists of games to play and completed titles.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "React 18 + Modern CSS", en: "React 18 + Modern CSS" } },
      { label: { es: "Backend", en: "Backend" }, value: { es: "Node.js + Express.js REST API", en: "Node.js + Express.js REST API" } },
      { label: { es: "Datos", en: "Data" }, value: { es: "RAWG Video Games Database API", en: "RAWG Video Games Database API" } },
      { label: { es: "Patrón", en: "Pattern" }, value: { es: "SPA + API Gateway", en: "SPA + API Gateway" } },
    ],
  },
  {
    id: "personal-mlb-stats",
    projectType: "personal",
    category: "fullstack",
    image: mlbStatsImg,
    tags: ["PHP", "MySQL", "Modelo-Vista-Controlador (MVC)", "Data Analytics", "Sabermetrics"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\MlbStats",
    categoryLabel: { es: "Proyecto Personal • PHP & MySQL", en: "Personal Project • PHP & MySQL" },
    title: {
      es: "MLB Stats — Analítica de Béisbol & Tablas de Posiciones",
      en: "MLB Stats — Baseball Analytics & Standings",
    },
    shortDesc: {
      es: "Sistema de analítica deportiva para las Grandes Ligas de Béisbol (MLB) desarrollado en PHP nativo / MVC con MySQL y cálculo sabermétrico.",
      en: "Sports analytics platform for Major League Baseball (MLB) engineered with native PHP / MVC, MySQL, and automated sabermetric calculations.",
    },
    role: { es: "Full Stack Creator", en: "Full Stack Creator" },
    overview: {
      es: "Aplicación web completa desarrollada para procesar y visualizar estadísticas de béisbol de las Grandes Ligas (MLB). Implementada bajo el patrón arquitectónico Modelo-Vista-Controlador (MVC) en PHP con base de datos relacional MySQL. El sistema calcula automáticamente métricas sabermétricas avanzadas para bateadores (AVG, OBP, SLG, OPS) y lanzadores (ERA, WHIP, K/9), además de generar tablas de posiciones divisionales en tiempo real.",
      en: "End-to-end sports analytics web application engineered to parse and compute Major League Baseball (MLB) team and player statistics. Built upon the Model-View-Controller (MVC) architectural pattern using PHP and a relational MySQL database. Computes advanced sabermetric formulas (AVG, OBP, SLG, OPS, ERA, WHIP) and manages divisional standings.",
    },
    architectureHighlights: {
      es: [
        "Arquitectura limpia Modelo-Vista-Controlador (MVC) en PHP sin dependencias pesadas.",
        "Modelo relacional en MySQL con tablas normalizadas para equipos, jugadores, partidos y estadísticas.",
        "Algoritmos matemáticos implementados en backend para cálculo de fórmulas sabermétricas.",
        "Consultas SQL optimizadas con índices para generación rápida de tablas clasificatorias.",
      ],
      en: [
        "Clean Model-View-Controller (MVC) architecture in PHP without bulky frameworks.",
        "Relational MySQL schema with normalized entities for franchises, rosters, games, and box scores.",
        "Custom backend algorithms calculating complex baseball sabermetric equations.",
        "Optimized indexed SQL queries for sub-second divisional standings table generation.",
      ],
    },
    keyFeatures: {
      es: [
        "Tablas de Posiciones de la MLB: División Este, Central y Oeste de Liga Americana y Nacional.",
        "Líderes Estadísticos: Rankings de cuadrangulares, promedio de bateo, ponches y efectividad.",
        "Perfiles de Jugadores: Historial de rendimiento por temporada con comparativas.",
        "Panel de Carga y Registro: Módulo administrativo para actualizar resultados de juegos.",
      ],
      en: [
        "MLB Divisional Standings: American and National League division races.",
        "Statistical Leaders: League rankings for home runs, batting average, strikeouts, and ERA.",
        "Player Profiles: Career trajectory, seasonal breakdown, and head-to-head metrics.",
        "Administrative Scoring Portal: Internal module for box-score data ingestion.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Backend", en: "Backend" }, value: { es: "PHP (Patrón MVC)", en: "PHP (MVC Pattern)" } },
      { label: { es: "Base de Datos", en: "Database" }, value: { es: "MySQL Relacional", en: "Relational MySQL" } },
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "HTML5 + JavaScript + CSS3", en: "HTML5 + JavaScript + CSS3" } },
      { label: { es: "Cálculo", en: "Computation" }, value: { es: "Fórmulas Sabermétricas (OPS, ERA, WHIP)", en: "Sabermetric Formulas (OPS, ERA, WHIP)" } },
    ],
  },
  {
    id: "personal-tenantflow",
    projectType: "personal",
    category: "fullstack",
    image: tenantflowImg,
    tags: ["Laravel", "Vue.js", "MySQL", "PropTech", "Multi-tenant", "Clean Architecture"],
    repoPath: "C:\\Users\\pelie\\source\\repos\\TenantFlow",
    categoryLabel: { es: "Proyecto Personal • Laravel & Vue", en: "Personal Project • Laravel & Vue" },
    title: {
      es: "TenantFlow — Plataforma SaaS de Gestión Inmobiliaria",
      en: "TenantFlow — Property & Rental Management SaaS",
    },
    shortDesc: {
      es: "Solución PropTech para la administración integral de propiedades en alquiler, contratos de arrendamiento, control de cobros e incidencias.",
      en: "PropTech SaaS platform for complete rental property administration, lease agreements, tenant billing, and maintenance tracking.",
    },
    role: { es: "Full Stack Creator", en: "Full Stack Creator" },
    overview: {
      es: "Plataforma de gestión de propiedades y alquileres (PropTech) diseñada para propietarios y administradores de condominios. Desarrollada con Laravel en el backend y Vue.js en el frontend, TenantFlow automatiza el ciclo de vida de los arrendamientos: registro de propiedades y unidades residenciales, asignación de inquilinos, generación automática de cuotas mensuales de renta, registro de pagos y seguimiento de reportes de mantenimiento.",
      en: "Comprehensive PropTech platform designed for landlords and property management agencies. Engineered with Laravel on the backend and Vue.js on the frontend, TenantFlow automates the entire leasing lifecycle: property and unit inventory, tenant profiling, recurring rent billing, payment receipt generation, and maintenance ticketing.",
    },
    architectureHighlights: {
      es: [
        "Desarrollo full stack desacoplado: API REST robusta en Laravel y frontend reactivo en Vue.js.",
        "Modelado de base de datos con Eloquent ORM, migraciones automáticas y claves foráneas en MySQL.",
        "Manejo de reglas de negocio para cálculo de mora, fechas de corte y depósitos de garantía.",
        "Módulo de reportes financieros con exportación de balances de ingresos y egresos.",
      ],
      en: [
        "Decoupled full stack architecture: robust Laravel REST API powering a reactive Vue.js SPA.",
        "Relational schema using Eloquent ORM, database migrations, and strict referential integrity in MySQL.",
        "Automated business rules calculating late payment fees, billing cycles, and security deposits.",
        "Financial ledger and operational reporting module exporting revenue and maintenance balances.",
      ],
    },
    keyFeatures: {
      es: [
        "Inventario de Inmuebles: Registro de edificios, apartamentos, tarifas y estado de ocupación.",
        "Control de Contratos: Fechas de inicio/vencimiento, depósito y cláusulas de arrendamiento.",
        "Cobranza y Facturación: Emisión de recibos de pago con alerta de cuotas atrasadas.",
        "Gestión de Incidencias: Registro y seguimiento de reparaciones y solicitudes de inquilinos.",
      ],
      en: [
        "Property & Unit Inventory: Detailed tracking of buildings, units, rental rates, and occupancy.",
        "Lease Agreement Management: Start/end dates, security deposit escrow, and contract rules.",
        "Billing & Invoicing: Automatic rent payment receipt generation and delinquent account flags.",
        "Maintenance Ticket Tracker: Inbound repair requests and resolution workflow monitoring.",
      ],
    },
    technicalSpecs: [
      { label: { es: "Backend", en: "Backend" }, value: { es: "Laravel (PHP)", en: "Laravel (PHP)" } },
      { label: { es: "Frontend", en: "Frontend" }, value: { es: "Vue.js", en: "Vue.js" } },
      { label: { es: "Base de Datos", en: "Database" }, value: { es: "MySQL", en: "MySQL" } },
      { label: { es: "Sector", en: "Domain" }, value: { es: "PropTech / Real Estate SaaS", en: "PropTech / Real Estate SaaS" } },
    ],
  },
];

export const certificatesTranslations = {
  es: {
    subtitle: "Acreditaciones & Logros",
    heading: "Diplomas & Certificaciones",
    description: "Certificaciones oficiales y acreditaciones técnicas que avalan mis competencias en desarrollo web full stack, arquitectura de software y diseño multimedia.",
    viewCredentialBtn: "Ver Credencial",
    bannerTitle: "Curriculum Vitae Disponible",
    bannerDesc: "Revisa mi expediente profesional completo con detalles de formación académica, experiencia laboral y proyectos.",
    bannerBtn: "Visualizar & Descargar CV",
    modalVerified: "Credencial Verificada",
    modalIssuer: "Institución Emisora",
    modalDate: "Fecha de Emisión",
    modalCode: "Código de Identificación",
    modalScope: "Alcance & Contenido",
    modalSkills: "Competencias Acreditadas",
    modalOfficialLink: "Ver Certificado Oficial en LinkedIn",
    modalSkillsLink: "Ver Habilidades Asociadas",
    modalDone: "Listo",
  },
  en: {
    subtitle: "Accreditations & Honors",
    heading: "Diplomas & Certifications",
    description: "Official technical credentials and accreditations validating my competencies across full stack web engineering, software architecture, and multimedia design.",
    viewCredentialBtn: "View Credential",
    bannerTitle: "Curriculum Vitae Available",
    bannerDesc: "Review my full professional profile with detailed educational background, work experience, and production systems.",
    bannerBtn: "View & Download CV",
    modalVerified: "Verified Credential",
    modalIssuer: "Issuing Organization",
    modalDate: "Issue Date",
    modalCode: "Credential ID",
    modalScope: "Scope & Syllabus",
    modalSkills: "Accredited Competencies",
    modalOfficialLink: "View Official Certificate on LinkedIn",
    modalSkillsLink: "View Associated Skills",
    modalDone: "Done",
  },
};

export const certificatesDataI18n: CertificateItemI18n[] = [
  {
    id: "cert-indotel-fullstack",
    title: {
      es: "Desarrollo Web Full Stack - Intermedio",
      en: "Full Stack Web Development - Intermediate",
    },
    issuer: {
      es: "Instituto Dominicano de las Telecomunicaciones - INDOTEL",
      en: "Dominican Institute of Telecommunications - INDOTEL",
    },
    date: "2023",
    credentialId: "INDOTEL-CERT-395967868",
    verifyUrl: "https://www.linkedin.com/in/eliezer-alberto-pena-zabala-ab4aa82b1/overlay/Certifications/395967868/treasury/?profileId=ACoAAEsXLigB0xc0wQExZwEH10Vk86biepzEMyM",
    skillsUrl: "https://www.linkedin.com/in/eliezer-alberto-pena-zabala-ab4aa82b1/overlay/395967868/skill-associations-details/",
    category: { es: "Certificación Oficial • Full Stack", en: "Official Certification • Full Stack" },
    description: {
      es: "Certificación oficial en Desarrollo Web Full Stack avalada por el Instituto Dominicano de las Telecomunicaciones (INDOTEL). Capacitación exhaustiva en diseño UX/UI, Node.js, arquitectura web, integración de APIs RESTful y tecnologías web modernas.",
      en: "Official Full Stack Web Development credential certified by the Dominican Institute of Telecommunications (INDOTEL). Comprehensive training in UX/UI design, Node.js backend development, web architecture, and RESTful API engineering.",
    },
    skills: ["Diseño UX/UI", "Node.js", "JavaScript/TypeScript", "Frontend & Backend", "APIs REST"],
  },
  {
    id: "cert-fabio-amable-mota",
    title: {
      es: "Bachiller Técnico (BTech) en Diseño de Páginas Web & Recursos Multimedia",
      en: "Bachelor of Technology (BTech) in Web Design & Digital Resources",
    },
    issuer: {
      es: "Instituto Tecnológico Fabio Amable Mota",
      en: "Instituto Tecnológico Fabio Amable Mota",
    },
    date: "Ago 2023 – May 2025",
    credentialId: "ITFAM-BTECH-984592155",
    verifyUrl: "https://www.linkedin.com/in/eliezer-alberto-pena-zabala-ab4aa82b1/details/education/edit/forms/984592155/",
    skillsUrl: "https://www.linkedin.com/in/eliezer-alberto-pena-zabala-ab4aa82b1/overlay/984592155/skill-associations-details/",
    category: { es: "Grado Técnico Profesional", en: "Vocational Technical Degree" },
    description: {
      es: "Título de Bachiller Técnico en Informática, Diseño de Páginas Web y Recursos Multimedia. Formación en instalación y configuración de equipos informáticos, desarrollo de interfaces web, diseño multimedia y administración de sistemas.",
      en: "Vocational Technical Degree in Computing, Web Design, and Digital Multimedia Resources. Hands-on education covering computer hardware installation, web layout engineering, multimedia assets, and network systems.",
    },
    skills: ["Equipos Informáticos", "Instalación de Equipos", "Diseño Web", "Multimedia", "Mantenimiento"],
  },
  {
    id: "cert-onion-dotnet",
    title: {
      es: ".NET 8 Onion Architecture & Clean Architecture",
      en: ".NET 8 Onion Architecture & Clean Architecture",
    },
    issuer: {
      es: "Enterprise Software & Clean Architecture Specialization",
      en: "Enterprise Software & Clean Architecture Specialization",
    },
    date: "2024",
    credentialId: "NET-ONION-2024-8849",
    category: { es: "Backend & Arquitectura", en: "Backend & Architecture" },
    description: {
      es: "Especialización avanzada en arquitectura concéntrica (Onion Architecture de 4 capas: Domain, Application, Infrastructure, API), desacoplamiento de capas, inversión de dependencias (IoC), Entity Framework Core y diseño de microservicios con ASP.NET Core.",
      en: "Advanced specialization in 4-tier concentric Onion Architecture (Domain, Application, Infrastructure, API), domain decoupling, dependency inversion (IoC), Entity Framework Core, and ASP.NET Core microservices.",
    },
    skills: ["C#", ".NET 8", "Onion Architecture", "EF Core", "Domain-Driven Design"],
  },
  {
    id: "cert-angular-enterprise",
    title: {
      es: "Angular Enterprise Applications & Feature-Based Architecture",
      en: "Angular Enterprise Applications & Feature-Based Architecture",
    },
    issuer: {
      es: "Frontend Masters & Angular Specialization",
      en: "Frontend Masters & Angular Specialization",
    },
    date: "2024",
    credentialId: "ANG-ENT-7732",
    category: { es: "Frontend Engineering", en: "Frontend Engineering" },
    description: {
      es: "Desarrollo de aplicaciones de gran escala con componentes modulares, arquitectura basada en características (feature-based), manejo reactivo con RxJS y optimización de experiencia de usuario.",
      en: "Large-scale application engineering with feature-based modular architectures, reactive state with RxJS streams, and UX optimization.",
    },
    skills: ["Angular", "TypeScript", "RxJS", "Feature-Based Architecture", "CoreUI"],
  },
  {
    id: "cert-sql-server-ef",
    title: {
      es: "Bases de Datos Relacionales: PostgreSQL & Microsoft SQL Server",
      en: "Relational Databases: PostgreSQL & Microsoft SQL Server",
    },
    issuer: {
      es: "Database Systems & Architecture Institute",
      en: "Database Systems & Architecture Institute",
    },
    date: "2023",
    credentialId: "DB-DATA-9182",
    category: { es: "Bases de Datos & Persistencia", en: "Database & Persistence" },
    description: {
      es: "Modelado de bases de datos relacionales, optimización de consultas complejas en PostgreSQL y SQL Server, transacciones ACID, índices y migraciones de datos con Supabase y Entity Framework Core.",
      en: "Relational database schema modeling, complex query tuning in PostgreSQL and SQL Server, ACID transactions, indexing strategies, and data migrations using Supabase and EF Core.",
    },
    skills: ["PostgreSQL", "SQL Server", "Supabase", "T-SQL", "Transacciones ACID"],
  },
];

export const timelineTranslations = {
  es: {
    subtitle: "Trayectoria & Experiencia",
    heading: "Experiencia Laboral",
    description: "Un desglose cronológico de mi evolución profesional en empresas de tecnología (Nurbansoft, Precisa Group, DETP) y mis roles formativos fuera del área de tecnología.",
    tabAll: "Toda la Trayectoria",
    tabTech: "💻 Experiencia Tech (Nurbansoft, Precisa, DETP)",
    tabOther: "🌐 Experiencia Operativa & Comercial",
    badgeTech: "Desarrollo de Software",
    badgeOther: "Experiencia Fuera del Área",
  },
  en: {
    subtitle: "Career & Milestones",
    heading: "Work Experience",
    description: "A chronological overview of my career evolution across tech companies (Nurbansoft, Precisa Group, DETP) and formative commercial/operational roles.",
    tabAll: "Full Career History",
    tabTech: "💻 Tech Experience (Nurbansoft, Precisa, DETP)",
    tabOther: "🌐 Operations & Commercial Roles",
    badgeTech: "Software Engineering",
    badgeOther: "Out-of-Area Experience",
  },
};

export const timelineDataI18n: TimelineEntryI18n[] = [
  {
    id: "precisa-job",
    type: "tech",
    date: { es: "", en: "" },
    title: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    subtitle: {
      es: "Precisa Group · Collecta Web, Portal Gerencial & HRIS",
      en: "Precisa Group · Collecta Web, Management Portal & HRIS",
    },
    location: {
      es: "Santo Domingo, Rep. Dom.",
      en: "Santo Domingo, Dominican Republic",
    },
    description: {
      es: "Desarrollo integral de plataformas empresariales: Collecta Web (React + Express), Portal Web Gerencial (KPIs, agentes de call center, ventas con Supabase y PostgreSQL) y Sistema de Recursos Humanos (HRIS).",
      en: "Full-stack development of enterprise platforms: Collecta Web (React + Express email API), Executive Management Portal (call center KPIs, agent presence, sales tracking via Supabase/PostgreSQL), and Human Resources (HRIS).",
    },
    bullets: {
      es: [
        "Portal Web Gerencial: Dashboard de gestión y métricas con monitoreo de agentes de call center (activos, volumen de llamadas, tarjetas vendidas) procesando datos del sistema principal mediante ETL.",
        "Sistema de Recursos Humanos: Plataforma integral para la administración centralizada de colaboradores, solicitudes, contratos e interfaces tanto frontend como backend.",
        "Collecta Web: Aplicación web corporativa en React con API en Express.js para despacho y recepción de correos y solicitudes.",
        "Persistencia y modelado sobre Supabase y PostgreSQL con diseño de APIs RESTful modulares.",
      ],
      en: [
        "Executive Management Portal: Operational KPI dashboard tracking call center agents (active states, call volume, card sales) via automated ETL from the corporate platform.",
        "Human Resources System: Comprehensive HR platform managing employee records, contracts, and workforce administrative workflows across frontend and backend.",
        "Collecta Web: Corporate web application built in React supported by an Express.js API dedicated to transactional email communications.",
        "Relational database modeling on Supabase & PostgreSQL with modular RESTful APIs.",
      ],
    },
    skills: ["React", "Express.js", "Supabase", "PostgreSQL", "APIs REST", "Data Processing", "ETL"],
    icon: faCode,
    iconBg: "#5000ca",
  },
  {
    id: "nurbansoft-job",
    type: "tech",
    date: { es: "", en: "" },
    title: {
      es: "Junior Software Developer",
      en: "Junior Software Developer",
    },
    subtitle: {
      es: "Nurbansoft · Tiempo Completo",
      en: "Nurbansoft · Full-time",
    },
    location: {
      es: "Santo Domingo, Rep. Dom.",
      en: "Santo Domingo, Dominican Republic",
    },
    description: {
      es: "Desarrollo de APIs en ASP.NET para sistemas empresariales ERP y POS aplicando una arquitectura Onion de 4 capas (Domain, Application, Infrastructure y API) para asegurar escalabilidad y mantenibilidad.",
      en: "Development of ASP.NET APIs for ERP and POS enterprise systems, applying a 4-tier Onion architecture (Domain, Application, Infrastructure, and API) to ensure scalability and maintainability.",
    },
    bullets: {
      es: [
        "Desarrollo de APIs en ASP.NET para sistemas empresariales ERP y POS, aplicando una arquitectura Onion de 4 capas (Domain, Application, Infrastructure y API).",
        "Implementación de funcionalidades backend como autenticación, gestión de roles, control de accesos y lógica de negocio.",
        "Desarrollo frontend en Angular utilizando una arquitectura basada en características (feature-based), creando módulos organizados y reutilizables.",
        "Construcción de un sistema de gestión de usuarios con ASP.NET en el backend y Blazor en el frontend, incluyendo gestión de usuarios, roles y permisos.",
        "Aplicación de mejores prácticas de desarrollo, principios de Clean Architecture y código mantenible, evitando el hardcoding y promoviendo soluciones escalables.",
      ],
      en: [
        "Development of ASP.NET APIs for ERP and POS enterprise systems, applying a 4-tier Onion architecture (Domain, Application, Infrastructure, and API) to ensure scalability and maintainability.",
        "Implementation of backend functionalities such as authentication, role management, access control, and business logic.",
        "Frontend development in Angular using a feature-based architecture, creating organized, reusable modules focused on a positive user experience.",
        "Building a user management system with ASP.NET on the backend and Blazor on the frontend, including user, role, and permission management.",
        "Application of best development practices, Clean Architecture principles, and maintainable code, avoiding hardcoding and promoting scalable solutions.",
      ],
    },
    skills: ["ASP.NET Web API", "Arquitectura Onion", "Angular", "Blazor", "C#", "SQL Server", "Clean Architecture"],
    icon: faLayerGroup,
    iconBg: "#7b2cbf",
  },
  {
    id: "detp-job",
    type: "tech",
    date: { es: "", en: "" },
    title: {
      es: "Trainee Software Developer",
      en: "Trainee Software Developer",
    },
    subtitle: {
      es: "Dirección de Educación Técnico Profesional (DETP) · Medio Tiempo",
      en: "Dirección de Educación Técnico Profesional (DETP) · Part-time",
    },
    location: {
      es: "Santo Domingo, Rep. Dom.",
      en: "Santo Domingo, Dominican Republic",
    },
    description: {
      es: "Participación en el desarrollo de una plataforma para conectar estudiantes de institutos técnicos con empresas y facilitar la gestión de pasantías, así como la administración de materiales, finanzas y matrículas.",
      en: "Contributed to developing a platform connecting vocational institute students with companies for internship placement, material inventory tracking, and center finances.",
    },
    bullets: {
      es: [
        "Desarrollo de plataforma de vinculación entre estudiantes de institutos técnicos y empresas para gestión ágil de pasantías.",
        "Sistema administrativo para centros educativos: seguimiento de entrada/salida de materiales, gestión de registros financieros y monitoreo de matrícula.",
        "Desarrollo utilizando Laravel para el backend y Vue.js para el frontend bajo el patrón Modelo-Vista-Controlador (MVC).",
        "Implementación de funcionalidades clave y estructuración general del sistema en equipo colaborativo.",
      ],
      en: [
        "Participated in the development of a platform connecting students from technical institutes with companies to facilitate internship management.",
        "Administrative center platform managing educational centers: tracking entry/exit of materials, managing financial records, and monitoring student enrollment.",
        "Developed using Laravel for backend and Vue.js for frontend under the Model-View-Controller (MVC) pattern.",
        "Implemented key business features and overall system structure in an agile collaborative team.",
      ],
    },
    skills: ["Vue.js", "Laravel", "PHP", "MySQL", "Modelo-Vista-Controlador (MVC)", "APIs REST"],
    icon: faBriefcase,
    iconBg: "#3c096c",
  },
  {
    id: "callcenter-cobros-ops",
    type: "other",
    date: { es: "", en: "" },
    title: {
      es: "Agente de Call Center — Gestión de Cobros",
      en: "Call Center Agent — Debt Collection & Account Recovery",
    },
    subtitle: {
      es: "Servicios Financieros & Recuperación de Cartera",
      en: "Financial Services & Delinquent Account Recovery",
    },
    location: {
      es: "Santo Domingo, Rep. Dom.",
      en: "Santo Domingo, Dominican Republic",
    },
    description: {
      es: "Gestión telefónica de cobranzas de cuentas vencidas, negociación de acuerdos y compromisos de pago, y manejo de objeciones bajo cumplimiento de metas operativas.",
      en: "Outbound and inbound telephone collection for delinquent accounts, payment agreements negotiation, balance reconciliation, and customer dispute resolution under strict recovery quotas.",
    },
    bullets: {
      es: [
        "Negociación asertiva con clientes para la estructuración y cumplimiento de promesas de pago.",
        "Manejo de objeciones, comunicación efectiva y resolución de discrepancias en estados de cuenta bajo alta presión.",
        "Experiencia operativa directa que permitió comprender a fondo la dinámica de los agentes de call center, KPIs y flujos de cobranza, aplicada posteriormente al desarrollar el Portal Gerencial en Precisa Group y módulos de software financiero.",
      ],
      en: [
        "Assertive negotiation with clients to establish structured payment promises and debt settlement agreements.",
        "Objection handling, effective conflict mediation, and reconciling account statement balances under pressure.",
        "Direct operational field experience providing deep understanding of call center KPIs, agent presence, and payment reconciliation—later applied directly in software solutions for Precisa Group and financial software modules.",
      ],
    },
    skills: ["Gestión de Cobros", "Negociación Asertiva", "Manejo de Objeciones", "Métricas de Call Center", "Atención Telefónica"],
    icon: faHeadset,
    iconBg: "#0284c7",
  },
];

export const contactTranslations = {
  es: {
    heading: "Contáctame",
    subtitle: "¿Tienes un proyecto por realizar o una vacante para colaborar? ¡Hagámoslo realidad!",
    nameLabel: "Tu Nombre",
    namePlaceholder: "¿Cuál es tu nombre?",
    nameError: "Por favor ingresa tu nombre",
    emailLabel: "Correo / Teléfono",
    emailPlaceholder: "¿Cómo puedo contactarte?",
    emailError: "Por favor ingresa tu correo electrónico o teléfono",
    msgLabel: "Mensaje",
    msgPlaceholder: "Escribe tu consulta o propuesta...",
    msgError: "Por favor ingresa tu mensaje",
    sendBtn: "Enviar Mensaje",
  },
  en: {
    heading: "Contact Me",
    subtitle: "Have a project waiting to be realized or an engineering role to discuss? Let's collaborate!",
    nameLabel: "Your Name",
    namePlaceholder: "What's your name?",
    nameError: "Please enter your name",
    emailLabel: "Email / Phone",
    emailPlaceholder: "How can I reach you?",
    emailError: "Please enter your email or phone number",
    msgLabel: "Message",
    msgPlaceholder: "Send me any inquiries, proposals, or questions...",
    msgError: "Please enter your message",
    sendBtn: "Send Message",
  },
};

export const footerTranslations = {
  es: {
    text: "Desarrollado y diseñado por Eliezer Peña — Nurbansoft · Precisa Group · DETP 🚀",
  },
  en: {
    text: "Engineered and designed by Eliezer Peña — Nurbansoft · Precisa Group · DETP 🚀",
  },
};

export const cvTranslations = {
  es: {
    modalTitle: "Curriculum Vitae Profesional",
    printBtn: "Imprimir / Guardar PDF",
    closeBtn: "Cerrar",
    profileTitle: "Perfil Profesional",
    profileText: "Desarrollador de Software Full Stack. Actualmente me desempeño en Precisa Group desarrollando plataformas corporativas (Collecta Web, Portal Gerencial y HRIS). Cuento con más de 2 años de experiencia previa en Nurbansoft construyendo sistemas empresariales ERP y POS con ASP.NET Web API (Arquitectura Onion de 4 capas), Angular y Blazor, además de plataformas en la DETP con Laravel y Vue.js. Especialista en arquitecturas limpias, código modular y bases de datos relacionales (PostgreSQL, SQL Server, MySQL).",
    eduTitle: "Educación Académica & Técnica",
    eduDegree: "Ingeniería de Software / Sistemas",
    eduStatus: "En curso",
    eduInst: "Universidad del Caribe (UNICARIBE) — Santo Domingo, Rep. Dom.",
    eduDesc: "Formación académica superior en ciencias de la computación, arquitectura de software, principios SOLID, modelado relacional y metodologías ágiles.",
    btechTitle: "Bachelor of Technology (BTech) — Diseño Web y Recursos Digitales",
    btechInst: "Instituto Tecnológico Fabio Amable Mota",
    btechDesc: "Formación técnica especializada en diseño web, recursos multimedia, equipos informáticos e instalación de sistemas.",
    mescytTitle: "Inglés por Inmersión para la Educación Superior",
    mescytInst: "Ministerio de Educación Superior, Ciencia y Tecnología (MESCYT)",
    mescytDesc: "Nivel B1 / C1 Profesional — Fluidez conversacional, redacción técnica y comunicación corporativa en inglés.",
    languagesTitle: "Idiomas & Comunicación",
    langSpanish: "Español: Nativo (C2)",
    langEnglish: "Inglés: Nivel B1 / C1 (Inglés por Inmersión - MESCYT)",
    techExpTitle: "Experiencia Laboral en Tecnología",
    outAreaTitle: "Experiencia Multidisciplinaria & Fuera del Área",
    skillsTitle: "Competencias Técnicas",
    certsTitle: "Diplomas & Certificaciones",
  },
  en: {
    modalTitle: "Professional Curriculum Vitae",
    printBtn: "Print / Save as PDF",
    closeBtn: "Close",
    profileTitle: "Professional Summary",
    profileText: "Full Stack Software Developer currently working at Precisa Group engineering corporate platforms (Collecta Web, Management Portal, and HRIS). Features 2+ years of prior enterprise experience at Nurbansoft building ERP and POS systems with ASP.NET Web API (4-tier Onion Architecture), Angular, and Blazor, alongside educational platforms at DETP with Laravel and Vue.js. Specialist in Clean Architecture, modular services, and relational databases (PostgreSQL, SQL Server, MySQL).",
    eduTitle: "Higher & Technical Education",
    eduDegree: "Software Systems Engineering",
    eduStatus: "In Progress",
    eduInst: "Universidad del Caribe (UNICARIBE) — Santo Domingo, Dominican Republic",
    eduDesc: "Higher academic degree in computer science, software architecture, SOLID principles, relational data persistence, and agile workflows.",
    btechTitle: "Bachelor of Technology (BTech) — Web Design & Digital Resources",
    btechInst: "Instituto Tecnológico Fabio Amable Mota",
    btechDesc: "Vocational technical degree covering web layout design, digital multimedia resources, computer hardware, and system installation.",
    mescytTitle: "English Immersion Program for Higher Education",
    mescytInst: "Ministry of Higher Education, Science and Technology (MESCYT)",
    mescytDesc: "B1 / C1 Professional Level — Spoken fluency, technical documentation, and international business communication.",
    languagesTitle: "Languages & Communication",
    langSpanish: "Spanish: Native (C2)",
    langEnglish: "English: B1 / C1 Level (English Immersion Program - MESCYT)",
    techExpTitle: "Technical Software Experience",
    outAreaTitle: "Multidisciplinary & Out-of-Area Experience",
    skillsTitle: "Technical Competencies",
    certsTitle: "Diplomas & Certificaciones",
  },
};
