import { HashScroll } from 'react-hash-scroll';
const Hero = () => {
  return (
    <HashScroll hash="#hero" position='start'>
      <section className="hero">
        <div className="hero__div">
          <p className="hero__div__text">
            No hay código que se resista a una buena almohada.
          </p>
        </div>
      </section>
    </HashScroll>

  );
};
export default Hero;
