import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/#hero">Pillow Heads</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <Link to="/#team">Equipo</Link>
          </li>
          <li className="header__nav__list__item">
            <Link to="/#members">Quiénes somos</Link>
          </li>
          <li className="header__nav__list__item">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
