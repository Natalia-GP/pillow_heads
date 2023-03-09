import { HashScroll } from 'react-hash-scroll';
const Team = (props) => {
  return (
    <HashScroll hash="#team" position='start'>
      <article className="team" id="team">
        <h2 className="team__title">Equipo</h2>
        <p className="team__text">
          <span className="team__text__italic">
            ¿Qué os llevarías a una isla desierta? Una almohada.
          </span>
          Una pregunta y una respuesta que rompieron el hielo y nos sacaron una
          carcajada a los 5 minutos de conocernos. En un momento lleno de
          nervios, nos unimos y buscamos apoyo unas en otras. Un apoyo que a día
          de hoy se mantiene.
        </p>
        <p className="team__text">
          Personas diferentes con vidas y recorridos muy distintos, pero a las
          que nos une las mismas ganas de reinventarnos, de crecer y de
          conseguir hacer de la programación nuestro futuro. En definitiva,
          cuatro mujeres que anhelaban sus almohadas a las ocho de la mañana.
        </p>
      </article>
    </HashScroll>
  );
};

export default Team;
