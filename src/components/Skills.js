const Skills = () => {
  return (
    <article className="skills">
      <div className="square"></div>
      <article className="skills__strength">
        <h3 className="skills__title">Fortalezas</h3>
        <p className="skills__text">
          Desde el primer momento destacó nuestra predisposición a trabajar en
          equipo, ya que siempre ha habido una muy buena comunicación entre
          nosotras y compartíamos las ganas, la motivación y el esfuerzo para
          sacar el proyecto adelante.
        </p>
      </article>

      <article className="skills__weakness">
        <h3 className="skills__title">Debilidades</h3>
        <p className="skills__text">
          Un cambio siempre conlleva un riesgo; y el nuestro es enfrentarnos a
          un sector en el que no tenemos experiencia previa, pero gracias a la
          manera en la que nos complementamos, siempre hemos podido solucionar
          las trabas que nos hemos encontrado en el camino.
        </p>
      </article>
    </article>
  );
};
export default Skills;
