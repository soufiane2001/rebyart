import React, { useEffect, useState } from 'react';
import reby1 from '../assets/reby1.jpg';
import reby2 from '../assets/reby2.jpg';
import reby3 from '../assets/reby3.jpg';
import reby4 from '../assets/reby4.jpg';
import Slider from 'react-slick';
import { AnimatePresence, motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrow from '../assets/arrow.png';
import ger from '../assets/Germany.png';
import fran from '../assets/fran.png';
import bateau from '../assets/7.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import './style.css'; // Import the CSS file



const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
      
  const breathingAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  };

  const clickAnimation = {
    scale: [1, 0.9, 1.1, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 1,
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // For fade animation
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const slides = [
    {
      title: 'Vita',
      text: [
        {
          title: "* 1989 à Bielefeld, vit et travaille à Munich et Perpignan",
          content: "",
        },
        ,
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
          title: "Université de Nantes, Nantes, 2011 - 1012",
          content: "Études ERASMUS",
        },
      ],
      img: reby1, // Replace with actual image path
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
      img: reby2, // Replace with actual image path
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
          content: '"Salon d Automne", exposition collective de l ARG (Association Artistique d Argelès)',
        }, {
          title: "Espace Jules Pams, Argelès-sur-Mer, 2023",
          content: '"28ème Salon de Valmy", exposition collective de l ARG (Association Artistique d Argelès)',
        }, {
          title: "Académie des beaux-arts, Munich, 2023",
          content: '"Comme chez Van Gogh, ça suffit", exposition annuelle de la classe Hildebrandt',
        },
        {
          title: "Lenbach Palais, Munich, 2023",
          content: '"I ll be the wind, the rain and the sunset", exposition collective',
        },
        {
          title: "Maison au Lützowplatz, Berlin, 2023",
          content: '"Mein trübes Wasser wurde klar" (Mon eau trouble est devenue limpide), exposition collective de la classe Hildebrandt ',
        },
        {
          title: "LOTHUS optic, Munich, 2023",
          content: '"Rendre l invisible visible", exposition individuelle',
        }
        ,
        {
          title: "Undconsorten, Munich, 2022",
          content: '„Sechs Monde Zeit“ (Six lunes de temps), exposition collective de la classe Hildebrandt ',
        },
        {
          title: "Linklaters, Munich, 2022",
          content: '"Like me Later", exposition de groupe de la classe Hildebrandt ',
        },
        {
          title: "Académie des Beaux-Arts, Munich, 2022",
          content: '"Big Sandwich", exposition annuelle de la classe Hildebrandt',
        },
        {
          title: "Artist’s Space, New York City, 2022",
          content: '"Minds are Magnets", exposition de groupe',
        },
        {
          title: "Padova Kunsthalle, Munich, 2022",
          content: '„Die Kunst aus den Nebenflügeln des weißen Hauses“ (L art des ailes secondaires de la Maison Blanche), exposition individuelle',
        },
        {
          title: "Association artistique, Soest, 2021",
          content: '"Entre figuration et abstraction : l art jeune en dialogue avec le modernisme classique", exposition collective',
        },
        {
          title: "",
          content: '',
        },
        {
          title: "",
          content: '',
        },
        {
          title: "",
          content: '',
        }
      
      ],
      img: reby3, // Replace with actual image path
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

 

  const handleNavigation = (index) => {
    setCurrentSlide(index);
  };
 
  return ( 
  <div className="hero" >
      <h1 id="hero">A propos de moi</h1>
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
{slides.map((x,index)=>{
  return(
    <div
            key={index}
            className={`${index === currentSlide ? 'active' : ''}`}
            style={{
              display: index === currentSlide ? 'block' : 'none',
             
            }}
          >
  <div className='card' style={{backgroundImage:`url(${x.img})`, backgroundPosition:index==1  ? 'top':'center'}}>
        <div className='over'></div>
        <div className='content'>
               <h1>{x.title}</h1>

               {x.text.map((y)=>{
                return(
               <div className='gr'>
                <div>
                 <h2>. {y.title}</h2>
                 <p>{y.content}</p>
               </div></div>
)
               })}

         


</div>

  </div>
  </div>
)
})}

</div>
<div className='arrow'>
<motion.button
            animate={clicked ? clickAnimation : breathingAnimation}
            onClick={() => {
            }}
            onAnimationComplete={() => setClicked(false)}
      
          >

<Link
          to="tbl"
          smooth={true}
          duration={1000}
          offset={-50} // Ajustez si nécessaire pour le décalage
        >
            <img style={{width:30}} className='arrowimg' src={arrow} alt="Arrow" /></Link>
          </motion.button>

</div>
  </div>
  


);
};

export default Hero;
