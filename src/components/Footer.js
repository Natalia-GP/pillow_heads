import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">Pillow Heads © 2022</h4>
      <ul className="footer__link">
        <li className="footer__link__item">
          <Link to="/#team">Equipo</Link>
        </li>
        <li className="footer__link__item">
          <Link to="/#members">Quiénes somos</Link>
        </li>
        <li className="footer__link__item">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
