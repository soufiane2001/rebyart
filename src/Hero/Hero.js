import React, { useEffect, useState } from 'react';
import reby1 from '../assets/reby1.jpg';
import reby2 from '../assets/reby2.jpg';
import reby3 from '../assets/reby3.jpg';
import Slider from 'react-slick';
import { AnimatePresence, motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrow from '../assets/arrow.png';
import { Link } from 'react-scroll';
import './style.css'; // Import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../LanguageContext';

const slidesContent = {
  fr: [
    {
      title: 'Vita',
      text: [
        {
          title: "* 1989 à Bielefeld, vit et travaille à Munich et Perpignan",
          content: "",
        },
        {
          title: "Académie des Beaux-Arts, Munich, depuis 2021",
          content: "Études de diplôme : Art libre dans la classe du professeur Gregor Hildebrandt",
        },
        {
          title: "Académie des beaux-arts, Nuremberg, 2020 - 2021",
          content: "Études de diplôme : Peinture libre dans la classe du professeur Kerstin Brätsch",
        },
        {
          title: "Université Ludwig Maximilian, Munich, 2008 - 2018",
          content: "Master en littérature allemande moderne, philosophie et français, dramaturgie de théâtre et de film de fiction",
        },
        {
          title: "École d'art et de design Lignes & Formations, Paris, 2012 - 2017",
          content: "Formation de graphiste à distance",
        },
        {
          title: "Université de Nantes, Nantes, 2011 - 2012",
          content: "Études ERASMUS",
        },
      ],
      img: reby1,
    },
    {
      title: 'Bourses et prix',
      text: [
        {
          title: "Deuxième place au concours artistique 'Mitten im Mix' (Au milieu du mélange), 2021",
          content: "Degin e.V., Nuremberg",
        },
        {
          title: "Nomination pour le prix d'encouragement 'Junge Kunst' (Jeune Art), 2021",
          content: "Association artistique de Soest",
        },
        {
          title: "Nomination pour le prix Renate Hendricks et Valentine Rothe, 2021",
          content: "Musée des femmes de Bonn",
        },
        {
          title: "Bourse de stage de l'université Ludwig-Maximilians, 2017",
          content: "Soutien financier pour l'activité d'assistante de mise en scène au 'Theater Toolbox'",
        },
        {
          title: "Ministère fédéral de l'éducation et de la recherche, 2015 - 2016",
          content: "Boursière d'Allemagne de la 'Fondation Rosa-Schneider'",
        },
      ],
      img: reby2,
    },
    {
      title: 'Expositions',
      text: [
        {
          title: "MünchenerHyp, Munich, 2024",
          content: "'Images thermiques', exposition de groupe de la classe Hildebrandt",
        },
        {
          title: "Maison Vila, Palau-del-Vidre, 2024",
          content: "'Frank Vila', exposition collective de l'ARG (Association Artistique d'Argelès)",
        },
        {
          title: "Galerie Marianne, Argelès-sur-Mer, 2023",
          content: "'Salon d'Automne', exposition collective de l'ARG (Association Artistique d'Argelès)",
        },
        // Additional content...
      ],
      img: reby3,
    },
  ],
  de: [
    {
      title: 'Vita',
      text: [
        {
          title: "* 1989 in Bielefeld, lebt und arbeitet in München und Perpignan",
          content: "",
        },
        {
          title: "Akademie der Bildenden Künste, München, seit 2021",
          content: "Diplomstudium: Freie Kunst in der Klasse von Professor Gregor Hildebrandt",
        },
        {
          title: "Akademie der Bildenden Künste, Nürnberg, 2020 - 2021",
          content: "Diplomstudium: Freie Malerei in der Klasse von Professor Kerstin Brätsch",
        },
        {
          title: "Ludwig-Maximilians-Universität, München, 2008 - 2018",
          content: "Master in Moderner deutscher Literatur, Philosophie, Französisch, Theater und Filmdramaturgie",
        },
        {
          title: "Lignes & Formations Kunst- und Designschule, Paris, 2012 - 2017",
          content: "Fernstudium in Grafikdesign",
        },
        {
          title: "Universität Nantes, Nantes, 2011 - 2012",
          content: "ERASMUS-Studium",
        },
      ],
      img: reby1,
    },
    {
      title: 'Stipendien und Auszeichnungen',
      text: [
        {
          title: "Zweiter Platz im Kunstwettbewerb 'Mitten im Mix', 2021",
          content: "Degin e.V., Nürnberg",
        },
        {
          title: "Nominierung für den 'Junge Kunst' Förderpreis, 2021",
          content: "Kunstverein Soest",
        },
        {
          title: "Nominierung für den Renate Hendricks und Valentine Rothe Preis, 2021",
          content: "Frauenmuseum Bonn",
        },
        {
          title: "Praktikumsstipendium der Ludwig-Maximilians-Universität, 2017",
          content: "Finanzielle Unterstützung für die Assistenzregie beim 'Theater Toolbox'",
        },
        {
          title: "Bundesministerium für Bildung und Forschung, 2015 - 2016",
          content: "Deutschlandstipendium der 'Rosa-Schneider-Stiftung'",
        },
      ],
      img: reby2,
    },
    {
      title: 'Ausstellungen',
      text: [
        {
          title: "MünchenerHyp, München, 2024",
          content: "'Thermische Bilder', Gruppenausstellung der Klasse Hildebrandt",
        },
        {
          title: "Maison Vila, Palau-del-Vidre, 2024",
          content: "'Frank Vila', Gemeinschaftsausstellung der ARG (Künstlervereinigung Argelès)",
        },
        {
          title: "Galerie Marianne, Argelès-sur-Mer, 2023",
          content: "'Salon d'Automne', Gemeinschaftsausstellung der ARG (Künstlervereinigung Argelès)",
        },
        // Additional content...
      ],
      img: reby3,
    },
  ],
};

const Hero = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = slidesContent[language] || slidesContent['fr']; // Default to 'fr'

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animation in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleNavigation = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id='vita'  className="hero" data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="900">
      <h1 id="hero">{language === 'de' ? 'Über Mich' : 'À propos de moi'}</h1>
      <nav className="navigation">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`nav-link ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleNavigation(index)}
          >
            {slide.title}
          </button>
        ))}
      </nav>

      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className='card' style={{ backgroundImage: `url(${slide.img})`, backgroundPosition: index === 1 ? 'top' : 'center' }}>
              <div className='over'></div>
              <div className='content'>
                <h1>{slide.title}</h1>
                {slide.text.map((item, idx) => (
                  <div className='gr' key={idx}>
                    <div>
                      <h2>. {item.title}</h2>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
