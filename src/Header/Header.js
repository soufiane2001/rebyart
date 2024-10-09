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
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext'; 
const Header = () => {
  AOS.init({
    duration: 1200, // Duration of animation in milliseconds
    once: true, // Whether animation should happen only once
  });
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // Language dropdown toggle
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Burg
   // Default language is French
  const { language, changeLanguage } = useLanguage(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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
  const languageOptions = [
    { value: 'fr', imgSrc: fran, label: 'French' },
    { value: 'de', imgSrc: ger, label: 'German' },
  ];

 

  // Handle language selection
  const handleSelectLanguage = (option) => {
  
    setSelectedImage(option.imgSrc);
    changeLanguage(option.value)
    setIsLanguageOpen(false);
  };
  
  const containerAnimation = {
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', // Example animation, adjust as needed
  };
  const translations = {
    fr: {
      about: 'À propos de moi',
      bateau: '#bateauenpapier',
      tableaux: 'Tableaux',
      privacy: 'Confidentialité',
      workshop: 'Atelier Arc-en-ciel',
      contact: 'Contact',
    },
    de: {
      about: 'Über mich',
      bateau: '#Papierschiff',
      tableaux: 'Gemälde',
      privacy: 'Datenschutz',
      workshop: 'Regenbogen-Werkstatt',
      contact: 'Kontakt',
    },
  };

  return (
    <header data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
      {/* Logo on the left */}
      <Link style={styles.enabledLink}  to="/">
      <img className="logo" src={logo} alt="Logo" style={{ width: isMobile ? '80px' : '100px' }} />
</Link>
      {/* Navigation and Language Selector */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Navigation Menu */}
        {isMobile ? (
          <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer' }}>
            <div style={{ width: '30px', height: '3px', backgroundColor: '#fff', margin: '6px 0', borderRadius: '2px' }} />
            <div style={{ width: '30px', height: '3px', backgroundColor: '#fff', margin: '6px 0', borderRadius: '2px' }} />
            <div style={{ width: '30px', height: '3px', backgroundColor: '#fff', margin: '6px 0', borderRadius: '2px' }} />
          </div>
        ) : (
          <ul className="nav-list" style={{ display: 'flex', gap: '20px', color: '#333' }}>
         <li>{language === 'fr' ? 'À propos de moi' : 'Über mich'}</li>
        <li>{language === 'fr' ? '#bateauenpapier' : '#Papierschiff'}</li>
        <li>{language === 'fr' ? 'Vita' : 'Lebenslauf'}</li>
        <li>{language === 'fr' ? 'Bourses et prix' : 'Stipendien und Preise'}</li>
        <li>{language === 'fr' ? 'Expositions' : 'Ausstellungen'}</li>
        <li>{language === 'fr' ? 'Contact' : 'Kontakt'}</li>
            <li>
              {/* Language Selector */}
              <div className="language-selector" style={{ position: 'relative' }}>
                <div
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#6200ea',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={selectedImage} alt="Language" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>

                {isLanguageOpen && (
                  <div style={{ position: 'absolute', top: '50px', left: 0, display: 'flex', flexDirection: 'column' }}>
                    {languageOptions.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => handleSelectLanguage(option)}
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
                        <img src={option.imgSrc} alt={option.label} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <ul style={{ position: 'absolute', top: '100px', left: 0, width: '100%', backgroundColor: '#fff', listStyleType: 'none', padding: '10px', zIndex: 1000 }}>
          <li>{translations[language].about}</li>
          <li>{translations[language].bateau}</li>
          <li>{translations[language].tableaux}</li>
          <li>{translations[language].privacy}</li>
          <li>{translations[language].workshop}</li>
          <li>{translations[language].contact}</li>
        </ul>
      )}
    </header>
  );
};
const styles = {
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '10px',
  },
  enabledLink: {
    textDecoration: 'none', // Removes underline
    color: 'white', // Custom link color
    fontWeight: 'bold',
  },
  disabledLink: {
    textDecoration: 'none', // Removes underline
    color: 'grey', // Grey color to indicate it's disabled
    pointerEvents: 'none', // Disables click interaction
    fontWeight: 'bold',
  }
};
export default Header;
