import React, { useRef, useState } from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PhotoSlide from '../PhotoSlide/PhotoSlide';
import { useLanguage } from '../LanguageContext';

export default function Tableaux() {
  const slideRef = useRef(null);
  const { language } = useLanguage();
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
      name: {
        fr: "Natures mortes",
        en: "Still Lifes",
        de: "Stilleben",
      },
      description: {
        fr: "Dans ma peinture, je renonce aux médias modernes. Je me limite aux matériaux classiques comme la toile ou le papier. Les scènes simples de la vie quotidienne m'intéressent et je les représente certes comme telles, mais sans perfection naturaliste - ce serait trop mathématique et rationnel pour moi. L'art académique, tel qu'il est enseigné dans les écoles d'art, me semble parfois trop élitiste. Il crée une distance par rapport à la réalité, surtout par le biais d'une intellectualité contemplative. Ce qui me fascine en revanche, c'est la possibilité, en un coup de pinceau insouciant, de faire la place à l'éphémère et à la légèreté dans l'expérience et la réflexion sur l'art.",
        en: "In my painting, I renounce modern media. I limit myself to classical materials like canvas or paper. Simple scenes from everyday life interest me, and I represent them as such, but without naturalistic perfection—it would be too mathematical and rational for me. Academic art, as taught in art schools, sometimes seems too elitist to me. It creates a distance from reality, especially through a contemplative intellectuality. What fascinates me, however, is the possibility, with a carefree brushstroke, to make room for the ephemeral and lightness in the experience and reflection on art.",
        de: "In meiner Malerei verzichte ich auf moderne Medien. Ich beschränke mich auf klassische Materialien wie Leinwand oder Papier. Einfache Szenen aus dem Alltag interessieren mich, und ich stelle sie so dar, wie sie sind, jedoch ohne naturalistische Perfektion – das wäre mir zu mathematisch und rational. Akademische Kunst, wie sie in Kunstschulen gelehrt wird, erscheint mir manchmal zu elitär. Sie schafft eine Distanz zur Realität, insbesondere durch eine kontemplative Intellektualität. Was mich jedoch fasziniert, ist die Möglichkeit, mit einem sorglosen Pinselstrich Raum für das Ephemere und die Leichtigkeit in der Erfahrung und Reflexion über Kunst zu schaffen."
      }
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668258650447-NJQQWLBIGQGBNSRMNB9N/IMG_1136.jpg?format=1000w",
      name: {
        fr: "Dans le Midi",
        en: "In the South",
        de: "Im Süden",
      },
      description: {
        fr: "Je suis convaincue que l'art peut créer un sentiment de non-visibilité et de transcendance, et c'est pourquoi je travaille aussi beaucoup avec des rêves de mes nuits. Dans le rêve, lorsque l'intellect est en grande partie désactivé, nous nous rapprochons de l'inconscient et de notre intuition. La peinture est pour moi un dialogue avec les images intérieures rêvées et les actions et lieux que l'on peut effectivement trouver physiquement, mais surtout le sud de la France avec ses couleurs chaudes et sa lumière vive.",
        en: "I am convinced that art can create a feeling of non-visibility and transcendence, which is why I also work a lot with dreams from my nights. In dreams, when the intellect is largely disabled, we get closer to the unconscious and our intuition. Painting is for me a dialogue with the dreamed inner images and the actions and places that can actually be found physically, especially in the south of France with its warm colors and bright light.",
        de: "Ich bin überzeugt, dass Kunst ein Gefühl von Unsichtbarkeit und Transzendenz erzeugen kann, weshalb ich auch viel mit meinen nächtlichen Träumen arbeite. Im Traum, wenn der Intellekt weitgehend deaktiviert ist, kommen wir dem Unbewussten und unserer Intuition näher. Malerei ist für mich ein Dialog mit den inneren Traumbildern und den Handlungen und Orten, die man tatsächlich physisch finden kann, insbesondere im Süden Frankreichs mit seinen warmen Farben und dem hellen Licht."
      }
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668264179515-8X0O5IGZ5KF3E2GWCAR6/Arbeit-3_Reby.jpg?format=1000w",
      name: {
        fr: "Paysages",
        en: "Landscapes",
        de: "Landschaften",
      },
      description: {
        fr: "Avec mes tableaux, je souhaite faire rêver les spectateurs. Pour moi, la naïveté, c'est l'originalité, l'absence de préjugés, l'authenticité. Et, oui, aussi, la foi dans le Bien.",
        en: "With my paintings, I want to make spectators dream. For me, naivety is originality, the absence of prejudice, authenticity. And, yes, also faith in the Good.",
        de: "Mit meinen Gemälden möchte ich die Zuschauer träumen lassen. Für mich ist Naivität Originalität, die Abwesenheit von Vorurteilen, Authentizität. Und ja, auch der Glaube an das Gute."
      }
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668258746107-45HBI86GUTEQ5AGDEOHP/IMG_4756.jpg?format=1000w",
      name: {
        fr: "Mer",
        en: "Sea",
        de: "Meer",
      },
      description: {
        fr: "La mer est pour moi une source d'inspiration constante. Dans mon travail, je souhaite également attirer l'attention sur la nécessité de protéger les mers.",
        en: "The sea is for me a constant source of inspiration. In my work, I also want to draw attention to the need to protect the seas.",
        de: "Das Meer ist für mich eine ständige Inspirationsquelle. In meiner Arbeit möchte ich auch auf die Notwendigkeit hinweisen, die Meere zu schützen."
      }
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668186664499-DM95PZ36B5L5XA7NE0AF/IMG_6220.jpg?format=1000w",
      name: {
        fr: "Dessins",
        en: "Drawings",
        de: "Zeichnungen",
      },
      description: {
        fr: "Dessiner pour comprendre et appréhender le monde.",
        en: "Drawing to understand and grasp the world.",
        de: "Zeichnen, um die Welt zu verstehen und zu begreifen."
      }
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668263143995-8V0IQJRFM6ZTB8E26SRZ/MDS00063.jpg?format=1000w",
      name: {
        fr: "Nus",
        en: "Nudes",
        de: "Aktbilder",
      },
      description: {
        fr: "",
        en: "",
        de: ""
      }
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688376048993-N4DVFS5VNPEBYQAOZM68/IMG_6627.jpg?format=1000w",
      name: {
        fr: "Céramiques",
        en: "Ceramics",
        de: "Keramiken",
      },
      description: {
        fr: "",
        en: "",
        de: ""
      }
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688556395034-R6O4WYDUVJI646R11YPT/IMG_8318.jpg?format=1000w",
      name: {
        fr: "Abstrait",
        en: "Abstract",
        de: "Abstrakt",
      },
      description: {
        fr: "",
        en: "",
        de: ""
      }
    },
  ];
  
 
  const tableaux = [
    [
      { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/17c7f0aa-5e79-46d6-9f55-53d395fa07d6/IMG_3040+2.jpg?format=2500w' },
      { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/e8a9ae3a-98cc-4bdd-975b-b529a3195f1c/IMG_8231.jpg?format=1000w' },
      { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/3976d250-7ef5-4ed9-ad34-3ad40b8b1dda/C03A0E17-3598-4AC2-8103-D3B3D990A71B.jpg?format=1000w' },
      { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/9017c8dd-cc8d-4439-b114-4206ea876705/C863EC5C-197E-4FD3-9364-6AD4CDD27FEF.jpg?format=1000w' },
      { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/6d351be7-b130-4afc-bdb9-566700882b65/00A1DF80-9E2E-420A-A7B6-6F387F1D0CF9.jpg?format=1000w' },
      { id: 6, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/58aad607-1993-4f4c-acd7-1eb31f76f77b/8E8612D2-6CF1-4A1F-96EB-C16A214EC48E.jpg?format=1000w' },
      { id: 7, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/4ed0cb4d-8379-4348-a672-11604517b5f1/11D9FCDE-4A7A-447C-BF9E-23B6153F7004.jpg?format=1000w' },
      { id: 8, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/4ed0cb4d-8379-4348-a672-11604517b5f1/11D9FCDE-4A7A-447C-BF9E-23B6153F7004.jpg?format=1000w' },
      { id: 9, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/8b82033d-6a45-4fb8-b4a8-76e6bc9cc622/F4E453C8-6BC4-4984-A3A0-062EEEDC66BF.jpg?format=1000w' },
    ],
    // You can add more groups of tableaux as needed
  ];

  var [open,setOpen]=useState(false);

  return (
    <>
    <PhotoSlide tableaux={tableaux[1]} index={0} isopen={open} close={()=>{setOpen(!open)}} />
    <div style={{marginTop:100}}data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="900" >
     
      <h1 className='tbl'>Tableaux {language}</h1>
      {
    <div className="container" >
      <div id="slide" ref={slideRef} >
        {slides.map((slide, index) => (
          <div className="item"id="tbl" key={index} style={{ backgroundImage: `url(${slide.img})`,borderRadius:15 }}>
            <div className="content">
              <div className="name">{slide.name[language]}</div>
              <div className="des">{slide.description[language]}</div>
              <button onClick={()=>{ setOpen(!open)}}>Explorer</button>
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
  </>
  );
}
