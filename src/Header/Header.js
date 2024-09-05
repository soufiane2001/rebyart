import React from 'react'
import './style.css'
import bateau from '../assets/7.png';
import logo from '../assets/Logo.png';
import inst from '../assets/ins.png';
import email from '../assets/email.png';
import arrow from '../assets/arrow.png';
import ger from '../assets/Germany.png';
import fran from '../assets/fran.png';
import { motion } from 'framer-motion';
import { useState, useRef ,useEffect} from 'react';




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const colorheader = '#333'; // Example color, replace with your actual color
  const [selectedImage,setSelectedImage] =useState(fran); // Replace with the path to your selected image
  const options = [
    { value: 'option1', imgSrc: fran},
    { value: 'option2', imgSrc: ger },
  ]; // Replace with your actual options

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (option) => {
    // Handle the selection of an option
    setSelectedImage(option.imgSrc)
    
  };

  const containerAnimation = {
    rotate: isOpen ? 90 : 0, // Example animation, adjust as needed
  };

  return (
    <header >
    {/* Logo or Image on the Left */}
    <img className='logo' src={logo} alt="Logo" style={{ width: isMobile ? '80px' : '100px' }} />

    {/* Navigation List and Burger Menu on the Right */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {isMobile ? (
        <div className='br' onClick={() => setIsOpen2(!isOpen2)} style={{ cursor: 'pointer' }}>
          {/* Burger Menu Icon */}
          <motion.div
            style={{
              width: '30px',
              height: '3px',
              backgroundColor: 'white',
              marginRight: '90px',
              borderRadius: '2px',
            }}
            animate={containerAnimation}
          />
          <motion.div
            style={{
              width: '30px',
              height: '3px',
              backgroundColor: 'white',
              margin: '6px 0',
              borderRadius: '2px',
            }}
            animate={containerAnimation}
          />
          <motion.div
            style={{
              width: '30px',
              height: '3px',
              backgroundColor: 'white',
              margin: '6px 0',
              borderRadius: '2px',
            }}
            animate={containerAnimation}
          />
        </div>
      ) : (
        <ul style={{ color: colorheader, display: 'flex', alignItems: 'center' }}>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
           
          >
            À propos de moi
          </motion.li>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
           
          >
            Tableaux
          </motion.li>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
           
          >
            Atelier Arc-en-ciel
          </motion.li>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
           
          >
            Contact
          </motion.li>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <motion.div
                onClick={() =>{ setIsOpen(!isOpen)}}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#6200ea',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
                animate={containerAnimation}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '50px',
                    borderRadius: '5px',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {options.map((option) => (
                    <motion.div
                      key={option.value}
                      onClick={() =>{ handleSelect(option);setIsOpen(!isOpen)}}
                      style={{
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        marginTop:'10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={option.imgSrc}
                        alt="Option"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%',
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.li>
        </ul>
      )}
    </div>
    {isMobile && isOpen2 && (
      <ul style={{ color: colorheader, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        
        >
          À propos de moi
        </motion.li>
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
         
        >
          Tableaux
        </motion.li>
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
         
        >
          Atelier Arc-en-ciel
        </motion.li>
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
         
        >
          Contact
        </motion.li>
        <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <motion.div
                onClick={() => setIsOpen(true)}
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#6200ea',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
                animate={containerAnimation}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: 'absolute',
                    top: '110%',
                    left: 0,
                    width: '50px',
                    borderRadius: '5px',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {options.map((option) => (
                    <motion.div
                      key={option.value}
                      onClick={() => { handleSelect(option);setIsOpen(false)}}
                      style={{
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        marginTop:'5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={option.imgSrc}
                        alt="Option"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%',
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.li>
      </ul>
    )}
  </header>
  );
};

export default Header;