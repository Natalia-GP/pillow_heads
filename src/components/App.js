import '../styles/App.scss';
import brunaPhoto from '../images/bruna.jpeg';
import sofiaPhoto from '../images/foto-sofia.jpg';
import nataliaPhoto from '../images/natalia3.jpg';
import Header from './Header';
import Footer from './Footer';
import Skills from './Skills';
import Team from './Team';
import Members from './Members';

function App() {
  const bruna = {
    name: 'Bruna Da Silva',
    description:
      'Las personas y los idiomas son mi pasión. Soy curiosa, disfruto aprendiendo cosas nuevas y le echo ganas a todo aquello en lo que tengo interés. Tengo ganas de saber qué futuro me espera como programadora.',
    twitter: 'https://twitter.com/brunadasilvabz',
    linkedin: 'https://www.linkedln.com/in/bruna-da-silva-barrozo-b6064923a/',
    github: 'https://github.com/brunadasilvabz',
    email: 'brunadasilvabz98@gmail.com',
    photo: brunaPhoto,
  };

  const natalia = {
    name: 'Natalia Gómez',
    description:
      'Soñadora por vocación, decidí cambiar de profesión por una que además de un reto, pudiese dar rienda suelta a mi creatividad. Mil caminos se me presentan, mil oportunidades que aprovechar y un nuevo mundo que descubrir.',
    twitter: 'https://twitter.com/kyrhia',
    linkedin: 'https://www.linkedin.com/in/natalia-gomez-perez/',
    github: 'https://github.com/Natalia-GP',
    email: 'natgp86@gmail.com',
    photo: nataliaPhoto,
  };

  const sofia = {
    name: 'Sofía Gracia',
    description:
      'Apasionada de la fotografía desde chiquitina descubrí que se me acababa el horizonte en el sector audiovisual, así que decidí cambiar de perspectiva. Deseando encontrar un nuevo camino.',
    twitter: 'https://twitter.com/calpurniax_',
    linkedin: 'https://www.linkedin.com/in/sofia-gracia-pe%C3%B1a/',
    github: 'https://github.com/Calpurniax',
    email: 'sofia.gracia@gmail.com',
    photo: sofiaPhoto,
  };
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />
      <Skills />
      <Team />
      <Members
        name={bruna.name}
        description={bruna.description}
        twitter={bruna.twitter}
        linkedin={bruna.linkedin}
        github={bruna.github}
        email={bruna.email}
        photo={bruna.photo}
        class={'left'}
      />

      <Members
        name={natalia.name}
        description={natalia.description}
        twitter={natalia.twitter}
        linkedin={natalia.linkedin}
        github={natalia.github}
        emal={natalia.email}
        photo={natalia.photo}
        class={'right'}
      />
      <Members
        name={sofia.name}
        description={sofia.description}
        twitter={sofia.twitter}
        linkedin={sofia.linkedin}
        github={sofia.github}
        email={sofia.email}
        photo={sofia.photo}
        class={'left'}
      />
      <Footer />
    </div>
  );
}

export default App;
