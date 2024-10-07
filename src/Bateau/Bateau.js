import React, { useState } from 'react';
import Header from '../Header/Header';
import './style.css';
import Footer from '../Footer/Footer';

function Bateau() {
  const [language, setLanguage] = useState('fr'); // State to manage the selected language

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'de' : 'fr'));
  };

  return (
    <div className="bg">
      <Header />
      <button onClick={toggleLanguage} className="toggle-btn">
        {language === 'fr' ? 'Passer à l\'allemand' : 'Wechseln Sie zu Französisch'}
      </button>
      <div className="bt">
        {language === 'fr' ? (
          <p>
            Il s'agit d'une marque protégée. Un bateau en papier sur la plage face aux embruns. Artistique Signature et
            métaphore de la mer et pourtant bien plus encore : symbole de l'enfance et de l'innocence, de la simplicité
            et de la joie de vivre, du jeu et de la fragilité, et donc du respect et de l'attention.
          </p>
        ) : (
          <p>
            Dies ist eine geschützte Marke. Ein Papierboot am Strand vor der Gischt. Künstlerische Signatur und Metapher
            für das Meer und doch noch viel mehr: Symbol für Kindheit und Unschuld, für Einfachheit und Lebensfreude,
            für Spiel und Zerbrechlichkeit und damit für Respekt und Achtsamkeit.
          </p>
        )}
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/eeecc161-1b56-49f7-8d15-0bc31ea24f3c/ba.jpg?format=750w"
          alt="Bateau en papier"
        />
      </div>

      <div className="tbl">
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/2c2e6bbc-1770-49b5-8735-dfcc3dcf2929/IMG_6038.jpg?format=750w"
          alt="Image 1"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/0fcf2a1d-4367-4029-af6f-eb5750b7fdfa/92603024-07FF-4960-8C79-32D19A805ED4.jpg?format=1000w"
          alt="Image 2"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/66570dfe-815e-453d-bb74-13a738973a33/IMG_8574.jpg?format=750w"
          alt="Image 3"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/50023728-d0f1-47ec-80d5-1df207f73a59/34DBA270-76B1-419C-A803-0A1A0DA0ACB2.jpg?format=1000w"
          alt="Image 4"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/83d0da1c-5676-4a79-afc3-446a29a0dcde/IMG_8821.jpg?format=750w"
          alt="Image 5"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/c91b39c9-f42e-4038-925a-d7ae5535bb73/IMG_8551.jpg?format=750w"
          alt="Image 6"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/24fc7162-917b-4e05-9208-389e1c14bebc/IMG_8822.jpg?format=1000w"
          alt="Image 7"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/b41d16bf-11ca-44ec-b7c3-a4646bfbc9ec/IMG_5756.jpg?format=2500w"
          alt="Image 8"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Bateau;
