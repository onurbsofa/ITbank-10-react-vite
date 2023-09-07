import "./Footer.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer (){
  return (
    <footer>
      <div className="footer-social-icons">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ color: "#ffffff" }} />
      </a>

      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#ffffff" }} />
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#ffffff" }} />
      </a>
      </div>
      <div className="footer-links">
        <Link to="/about">Acerca de ITBANK</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/faq">Preguntas Frecuentes</Link>
      </div>
      <div className="footer-links">
        <Link to="/privacy">Política de Privacidad</Link>
        <Link to="/terms">Términos y Condiciones</Link>
      </div>
      <div className="copyright">
        © 2023 ITBank. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
