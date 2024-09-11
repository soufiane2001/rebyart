import React from 'react';
import './style.css';
import bateau from '../assets/7.png';
import logo from '../assets/Logo.png';
import inst from '../assets/ins.png';
import email from '../assets/email.png';
import arrow from '../assets/arrow.png';
import ger from '../assets/Germany.png';
import fran from '../assets/fran.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  AOS.init({
    duration: 1200, // Duration of animation in milliseconds
    once: true, // Whether animation should happen only once
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const colorheader = '#333'; // Example color, replace with your actual color
  const [selectedImage, setSelectedImage] = useState(fran); // Replace with the path to your selected image
  const options = [
    { value: 'option1', imgSrc: fran },
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
    setSelectedImage(option.imgSrc);
  };

  const containerAnimation = {
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', // Example animation, adjust as needed
  };

  return (
    <header data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
      {/* Logo or Image on the Left */}
      <img className="logo" src={logo} alt="Logo" style={{ width: isMobile ? '80px' : '100px' }} />

      {/* Navigation List and Burger Menu on the Right */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isMobile ? (
          <div className="br" onClick={() => setIsOpen2(!isOpen2)} style={{ cursor: 'pointer' }}>
            {/* Burger Menu Icon */}
            <div
              style={{
                width: '30px',
                height: '3px',
                backgroundColor: 'white',
                marginRight: '90px',
                borderRadius: '2px',
                ...containerAnimation,
              }}
            />
            <div
              style={{
                width: '30px',
                height: '3px',
                backgroundColor: 'white',
                margin: '6px 0',
                borderRadius: '2px',
                ...containerAnimation,
              }}
            />
            <div
              style={{
                width: '30px',
                height: '3px',
                backgroundColor: 'white',
                margin: '6px 0',
                borderRadius: '2px',
                ...containerAnimation,
              }}
            />
          </div>
        ) : (
          <ul style={{ color: colorheader, display: 'flex', alignItems: 'center' }}>
            <li>
              À propos de moi
            </li>
            <li>
              Tableaux
            </li>
            <li>
              Atelier Arc-en-ciel
            </li>
            <li>
              Contact
            </li>
            <li>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div
                  onClick={() => setIsOpen(!isOpen)}
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
                    ...containerAnimation,
                  }}
                >
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {isOpen && (
                  <div
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
                      <div
                        key={option.value}
                        onClick={() => { handleSelect(option); setIsOpen(!isOpen); }}
                        style={{
                          width: '40px',
                          height: '40px',
                          cursor: 'pointer',
                          marginTop: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
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
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        )}
      </div>
      {isMobile && isOpen2 && (
        <ul style={{ color: colorheader, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <li>À propos de moi</li>
          <li>Tableaux</li>
          <li>Atelier Arc-en-ciel</li>
          <li>Contact</li>
          <li>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div
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
                  ...containerAnimation,
                }}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {isOpen && (
                <div
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
                    <div
                      key={option.value}
                      onClick={() => { handleSelect(option); setIsOpen(false); }}
                      style={{
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        marginTop: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
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
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
