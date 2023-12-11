import React from 'react';
import './App.css';
import ContactForm from './myportofolio/ContactForm';
import Aboutme from './myportofolio/Aboutme';
import MyProjects from './myportofolio/MyProjects';

function App() {
  const Projets = [
    {
      title: 'Projet 1',
      description: 'Projet 1 : Création d une application gestion de congé.',
      link: 'lien-vers-le-projet-1',
    },
  ];
  const Profile = {
    image: '../assets/image1.jpg',
    name: 'Ilhem Boubaker',
    bio: 'Je suis développeure web avec des expériences et des projets dans le développement web ',
    email: 'ilhem.boubaker580@gmail.com',
    
  };
  return (
    
    <div className="App">
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Mon Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>Projets</h2>
          <ul>
        {Projets.map((Projets, index) => (
          <li key={index}>
            <MyProjects
              title={Projets.title}
              description={Projets.description}
              link={Projets.link}
            />
          </li>
        ))}
      </ul>
          
        </section>
        <section>
          <h2>À propos de moi</h2>
          <Aboutme
          name={Profile.name}
          bio={Profile.bio}
          email={Profile.email}
          />
        </section>
        <section>
          <h2>Contact</h2>
         <ContactForm/>
        </section>
      </main>
    </div>
  );
}

export default App;
