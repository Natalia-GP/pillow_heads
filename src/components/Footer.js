const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">Pillow Heads © 2022</h4>
      <ul className="footer__links">
        <li className="footer__links--li">
          <a href="./index.html#equipo">Equipo</a>
        </li>
        <li className="footer__links--li">
          <a href="./index.html#quienes">Quiénes somos</a>
        </li>
        <li className="footer__links--li">
          <a href="./contact.html">Contacto</a>
        </li>
      </ul>
      {/* <img  alt="Logo Adalab" className="logo-adalab" /> */}
    </footer>
  );
};
export default Footer;
