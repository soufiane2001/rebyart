import React from 'react'
import logo from '../assets/Logo.png';
import inst from '../assets/ins.png';
import email from '../assets/email.png';
import arrow from '../assets/arrow.png';
import ger from '../assets/Germany.png';
import fran from '../assets/fran.png';
import bateau from '../assets/7.png';
import Header from '../Header/Header';
import './style.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef } from 'react';
function About({sectionRef,updtecolorheader}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
      const [clicked, setClicked] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState(fran);
    
      const options = [
        { value: '2', label: 'Option 2', imgSrc: fran },
        { value: '1', label: 'francais', imgSrc: ger },
      ];
    
    
      
    
      const handleSelect = (option) => {
        setSelectedImage(option.imgSrc);
        setIsOpen(false);
      };
    
      const containerAnimation = {
        scale: isOpen ? 1.05 : 1,
        transition: {
          duration: 0.6,
          type: 'spring',
          stiffness: 200,
        },
      };
    
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
  return (
  <>
      <div className="all">
        <div className="background-image">
           <Header/>
          <div className="overlayt"></div>
          
          <div className="info" style={{display:'flex',width:'100%',flexWrap:'wrap',position:'relative',zIndex:45}}>
            <div>
             
          <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.7 }}
            >
              Michèle Reby
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              Naïveté par rébellion
            </motion.p>
            <div className="social">
              <motion.img
                src={email}
                alt="Email"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.7 }}
              />
              <motion.img
                src={inst}
                alt="Instagram"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.9 }}
              />
            </div>
          </div>
          <motion.img 
                className='bt'
                src={bateau}
                alt="bateau"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.9 }}
              />
        </div>
        </div>







        <div className="arrow">
          <motion.button
            animate={clicked ? clickAnimation : breathingAnimation}
            onClick={() => {
            }}
            onAnimationComplete={() => setClicked(false)}
         
          >
               <Link
          to="me"
          smooth={true}
          duration={1000}
          offset={-50} // Ajustez si nécessaire pour le décalage
        >
            <img src={arrow} style={{width:'30px'}} alt="Arrow" /></Link>
          </motion.button>
        </div>




        
      </div>
  </>
  )
}

export default About