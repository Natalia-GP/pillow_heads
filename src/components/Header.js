import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>Pillow Heads</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="nav__list-item">
            <button onClick={() => props.team.current.scrollIntoView()}>Equipo</button>
            {/* button onClick={() => scollToRef.current.scrollIntoView()}> */}
          </li>
          <li className="nav__list-item">
            <a href="#members">Quiénes somos</a>
          </li>
          <li className="nav__list-item">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
