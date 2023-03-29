import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import anaPhoto from '../images/ana.jpg';
import brunaPhoto from '../images/bruna.jpeg';
import sofiaPhoto from '../images/foto-sofia.jpg';
import nataliaPhoto from '../images/natalia3.jpg';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Skills from './Skills';
import Team from './Team';
import Members from './Members';
import Contact from './Contact';

function App() {

  const [statusMessage, setStatusMessage] = useState("");
  const [telInput, setTelInput] = useState('');
  const [telInputMessage, setTelInputMessage] = useState('');

  const pillows = [
    {
      name: 'Ana Vellisco',
      description:
        'Ex-trabajadora del sector social. Me apasionan los retos y estar en continua formación de diversas áreas. Me considero una persona  minuciosa y paciente, a la que le gusta trabajar en equipo. Mi nuevo reto es ser desarrolladora web, gracias a Adalab.',
      twitter: '',
      github: 'https://github.com/avbbs',
      email: 'ana.vellisco@gmail.com',
      photo: anaPhoto,
      class: 'left'
    },

    {
      name: 'Bruna Da Silva',
      description:
        'Las personas y los idiomas son mi pasión. Soy curiosa, disfruto aprendiendo cosas nuevas y le echo ganas a todo aquello en lo que tengo interés. Tengo ganas de saber qué futuro me espera como programadora.',
      twitter: 'https://twitter.com/brunadasilvabz',
      linkedin: 'https://www.linkedln.com/in/bruna-da-silva-barrozo-b6064923a/',
      github: 'https://github.com/brunadasilvabz',
      email: 'brunadasilvabz98@gmail.com',
      photo: brunaPhoto,
      class: 'right',
    },

    {
      name: 'Natalia Gómez',
      description:
        'Soñadora por vocación, decidí cambiar de profesión por una que además de un reto, pudiese dar rienda suelta a mi creatividad. Mil caminos se me presentan, mil oportunidades que aprovechar y un nuevo mundo que descubrir.',
      twitter: 'https://twitter.com/kyrhia',
      linkedin: 'https://www.linkedin.com/in/natalia-gomez-perez/',
      github: 'https://github.com/Natalia-GP',
      email: 'natgp86@gmail.com',
      photo: nataliaPhoto,
      class: 'left'
    },
    {
      name: 'Sofía Gracia',
      description:
        'Apasionada de la fotografía desde chiquitina descubrí que se me acababa el horizonte en el sector audiovisual, así que decidí cambiar de perspectiva. Deseando encontrar un nuevo camino.',
      twitter: 'https://twitter.com/calpurniax_',
      linkedin: 'https://www.linkedin.com/in/sofia-gracia-pe%C3%B1a/',
      github: 'https://github.com/Calpurniax',
      email: 'sofia.gracia@gmail.com',
      photo: sofiaPhoto,
      class: 'right',
    },
  ]
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              <Team />
              <Skills />
              <Members pillows={pillows} />
            </>
          }
        />
        <Route path="/contact" element={<Contact statusMessage={statusMessage} setStatusMessage={setStatusMessage} />}></Route>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
