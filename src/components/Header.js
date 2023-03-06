const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <a href="./index.html"> Pillow Heads</a>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="nav__list-item">
            <a href="./index.html#equipo">Equipo</a>
          </li>
          <li className="nav__list-item">
            <a href="./index.html#quienes">Quiénes somos</a>
          </li>
          <li className="nav__list-item">
            <a href="./contact.html">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
