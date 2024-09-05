import './style.css';
import reby1 from '../assets/michel.png';

import { useEffect, useState } from 'react';
import arrow from '../assets/arrow.png';
import ger from '../assets/Germany.png';
import fran from '../assets/fran.png';
import bateau from '../assets/7.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

function App({sectionRef}) {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState(fran);

      
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
    
    
      const handleScroll = () => {
        const targetPosition = sectionRef.current.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition;
        const duration = 1000;
        let start = null;
    
        window.requestAnimationFrame(function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const scrollStep = Math.easeInOutQuad(progress, startPosition, distance, duration);
          window.scrollTo(0, scrollStep);
          if (progress < duration) window.requestAnimationFrame(step);
        });
      };
    
      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('text');
      const imageElement = document.getElementById('image');

      if (textElement && imageElement) {
        const textPosition = textElement.getBoundingClientRect().top;
        const imagePosition = imageElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (textPosition < screenPosition) {
          setTextVisible(true);
        }
        if (imagePosition < screenPosition) {
          setImageVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='m'>
      <h3 id='me'>Michèle Reby</h3>
      <div className='me'>
        <motion.div
          className='text'
          id='text'
          initial={{ opacity: 0, y: 50 }}
          animate={textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <p>
            Fille d'un père allemand et d'une mère du sud de la France, j'ai grandi à Munich et près de Collioure, dans Midi de la France. C'est à Collioure qu'est né le fauvisme et je considère que mon travail est enraciné dans cette tradition. Les couleurs méditerranéennes de mes peintures à l'aspect rêveur et ludique respirent la joie de vivre et l'innocence. La nostalgie d'un Sud de la France idéalisé par l'enfance offre le contrepoint d'une société de consommation moderne, rythmée par l'efficacité économique.
          </p>
        </motion.div>

        <motion.div
          className='images'
          id='image'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        >
          <div className="custom-shape-containers">
            <img src={reby1} alt="Image" className="custom-shape-images" />
            <div className="custom-shapes"></div>
          </div>
        </motion.div>
      </div>

      <div className="arrow">
          <motion.button
            animate={clicked ? clickAnimation : breathingAnimation}
            onClick={() => {
            }}
            onAnimationComplete={() => setClicked(false)}
            style={{
              width: '63px',
              height: '63px',
              fontSize: '46px',
              fontWeight: 900,
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'black',
            borderWidth:0,
              borderRadius: '100px',
              outline: 'none',
              zIndex: 666,
              position: 'relative',
            }}
          >
               <Link
          to="hero"
          smooth={true}
          duration={1000}
          offset={-50} // Ajustez si nécessaire pour le décalage
        >
            <img style={{width:30}} className='arrowimg' src={arrow} alt="Arrow" /></Link>
          </motion.button>
        </div>

    </div>
  );
}

export default App;
