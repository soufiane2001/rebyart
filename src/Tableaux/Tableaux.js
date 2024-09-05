import React, { useRef } from 'react';
import './style.css';

export default function Tableaux() {
  const slideRef = useRef(null);

  const handleNext = () => {
    if (slideRef.current) {
      const firstItem = slideRef.current.firstChild;
      slideRef.current.appendChild(firstItem);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lastItem = slideRef.current.lastChild;
      slideRef.current.insertBefore(lastItem, slideRef.current.firstChild);
    }
  };

  const slides = [
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668186265649-1BE1MHO4KSKWV81ULMTT/891A5E58-63D1-422F-B65C-C2C2FF283F85.jpg?format=1000w",
      name: "Natures mortes",
      description: "Dans ma peinture, je renonce aux médias modernes. Je me limite aux matériaux classiques comme la toile ou le papier. Les scènes simples de la vie quotidienne m'intéresse et je les représente certes comme telles, mais sans perfection naturaliste - ce serait trop mathématique et rationnel pour moi. L'art académique, tel qu'il est enseigné dans les écoles d'art, me semble parfois trop élitiste. Il crée une distance par rapport à la réalité, surtout par le biais d'une intellectualité contemplative. Ce qui me fascine en revanche, c'est la possibilité, en un coup de pinceau insouciant, de faire la place à l'éphémère et à la légèreté dans l'expérience et la réflexion sur l'art. "
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668258650447-NJQQWLBIGQGBNSRMNB9N/IMG_1136.jpg?format=1000w",
      name: "Dans le Midi",
      description: "Je suis convaincue que l'art peut créer un sentiment de non-visibilité et de transcendance, et c'est pourquoi je travaille aussi beaucoup avec des rêves de mes nuits. Dans le rêve, lorsque l'intellect est en grande partie désactivé, nous nous rapprochons de l'inconscient et de notre intuition. La peinture est pour moi un dialogue avec les images intérieures rêvées et les actions et lieux que l'on peut effectivement trouver physiquement, mais surtout le sud de la France avec ses couleurs chaudes et sa lumière vive."
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668264179515-8X0O5IGZ5KF3E2GWCAR6/Arbeit-3_Reby.jpg?format=1000w",
      name: "Paysages",
      description: "Avec mes tableaux, je souhaite faire rêver les spectateurs. Pour moi, la naïveté, c'est l'originalité, l'absence de préjugés, l'authenticité. Et, oui, aussi, la foi dans le Bien."
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668258746107-45HBI86GUTEQ5AGDEOHP/IMG_4756.jpg?format=1000w",
      name: "Mer",
      description: "La mer est pour moi une source d'inspiration constante. Dans mon travail, je souhaite également attirer l'attention sur la nécessité de protéger les mers."
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668186664499-DM95PZ36B5L5XA7NE0AF/IMG_6220.jpg?format=1000w",
      name: "Dessins",
      description: "Dessiner pour comprendre et appréhender le monde"
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668263143995-8V0IQJRFM6ZTB8E26SRZ/MDS00063.jpg?format=1000w",
      name: "Nus",
      description: ""
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688376048993-N4DVFS5VNPEBYQAOZM68/IMG_6627.jpg?format=1000w",
      name: "Céramiques",
      description: ""
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688556395034-R6O4WYDUVJI646R11YPT/IMG_8318.jpg?format=1000w",
      name: "Abstrait",
      description: ""
    },
  ];

  return (
    <div>
      <h1 className='tbl'>Tableaux</h1>
      {
    <div className="container" >
      <div id="slide" ref={slideRef} >
        {slides.map((slide, index) => (
          <div className="item"id="tbl" key={index} style={{ backgroundImage: `url(${slide.img})` }}>
            <div className="content">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.description}</div>
              <button>Explorer</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrev}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNext}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>}
    </div>
  );
}
