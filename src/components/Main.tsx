import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// 1. Importa la imagen con una ruta válida usando barras diagonales
import portfolioImg from "../assets/images/portfolioImg.jpg";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* 2. Usa la variable de la imagen importada entre llaves */}
          <img src={portfolioImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Eliezeruni-env"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Eliezer Peña</h1>
          <p>Full Stack Engineer</p>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/Eliezeruni-env"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
