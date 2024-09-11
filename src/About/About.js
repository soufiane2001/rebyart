import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import inst from '../assets/ins.png';
import email from '../assets/email.png';
import arrow from '../assets/arrow.png';
import ger from '../assets/Germany.png';
import fran from '../assets/fran.png';
import bateau from '../assets/7.png';
import Header from '../Header/Header';
import './style.css';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About({ sectionRef }) {
  const [selectedImage, setSelectedImage] = useState(fran);
  const [isOpen, setIsOpen] = useState(false);
  AOS.init({
    duration: 1200, // Duration of animation in milliseconds
    once: true, // Whether animation should happen only once
  });
  const options = [
    { value: '2', label: 'Option 2', imgSrc: fran },
    { value: '1', label: 'francais', imgSrc: ger },
  ];

  const handleSelect = (option) => {
    setSelectedImage(option.imgSrc);
    setIsOpen(false);
  };

  return (
    <>
      <div className="all" >
        <div className="background-image">
          <Header />
          <div className="overlayt"></div>

          <div
            className="info"
            style={{ display: 'flex', width: '100%', flexWrap: 'wrap', position: 'relative', zIndex: 45 }}
          data-aos="slide-up" data-aos-duration="1500" data-aos-delay="500"
          >
            <div>
              <h2 style={{ opacity: 1, transition: 'opacity 1.5s 1.7s' }}>Michèle Reby</h2>
              <p >
                Naïveté par rébellion
              </p>
              <div className="social">
                <img
                  src={email}
                  alt="Email"
                  style={{ opacity: 1, transition: 'opacity 1.5s 1.7s' }}
                />
                <img
                  src={inst}
                  alt="Instagram"
                  style={{ opacity: 1, transition: 'opacity 1.5s 1.9s' }}
                />
              </div>
            </div>
            <img
              className="bt"
              src={bateau}
              alt="bateau"
              style={{ opacity: 1, transition: 'opacity 1.5s 1.9s' }}
            />
          </div>
        </div>

        <div className="arrow">
          <Link
            to="me"
            smooth={true}
            duration={1000}
            offset={-50} // Adjust offset as needed
          >
            <img src={arrow} style={{ width: 21, marginTop: 15 }} alt="Arrow" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
