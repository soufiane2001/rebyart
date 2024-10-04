import React, { useRef, useState } from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PhotoSlide from '../PhotoSlide/PhotoSlide';
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

  const tableaux = [
    [
    { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/17c7f0aa-5e79-46d6-9f55-53d395fa07d6/IMG_3040+2.jpg?format=2500w' },
    { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/e8a9ae3a-98cc-4bdd-975b-b529a3195f1c/IMG_8231.jpg?format=1000w' },
    { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/3976d250-7ef5-4ed9-ad34-3ad40b8b1dda/C03A0E17-3598-4AC2-8103-D3B3D990A71B.jpg?format=1000w' },
    { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/9017c8dd-cc8d-4439-b114-4206ea876705/C863EC5C-197E-4FD3-9364-6AD4CDD27FEF.jpg?format=1000w' },
    { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/6d351be7-b130-4afc-bdb9-566700882b65/00A1DF80-9E2E-420A-A7B6-6F387F1D0CF9.jpg?format=1000w' },
    {id:6,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/58aad607-1993-4f4c-acd7-1eb31f76f77b/8E8612D2-6CF1-4A1F-96EB-C16A214EC48E.jpg?format=1000w'},
    {id:7,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/4ed0cb4d-8379-4348-a672-11604517b5f1/11D9FCDE-4A7A-447C-BF9E-23B6153F7004.jpg?format=1000w'},
    {id:8,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/4ed0cb4d-8379-4348-a672-11604517b5f1/11D9FCDE-4A7A-447C-BF9E-23B6153F7004.jpg?format=1000w'},
    {id:9,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/8b82033a-9896-4c29-afcf-a8878d3427df/Adjustments+%2820%29.jpeg?format=1000w'},

   
  ]
    ,[
      { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/4b3f252b-6ad5-4391-a4bf-b36c57dec280/IMG_7456.jpg?format=1000w' },
      { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688377619489-0NHK70JKZ9UCZBGXTMWY/IMG_7023.jpg?format=1000w' },
      { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/b5b4c585-19c1-42eb-bf90-725ed22f7629/IMG_0243.jpg?format=1000w' },
      { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688377687343-1B876UAMQDJKLKPS9UAR/IMG_7011.jpg?format=1000w' },
      { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/c34e659f-69d3-43f5-8f99-4211a0bd0ce3/IMG_7540.jpg?format=1000w' },
      {id:6,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/431a0d77-d686-44d6-a1b1-1c57fce017e6/IMG_3251.jpg?format=1000w'},
      {id:7,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/98ba2aaa-c840-4cb4-ad8e-39b91e7c8ad0/IMG_6999.jpg?format=1000w'},
     
     

    ]
  ];
  





  var [open,setOpen]=useState(false);

  return (
    <>
    <PhotoSlide tableaux={tableaux[1]} index={0} isopen={open} close={()=>{setOpen(!open)}} />
    <div style={{marginTop:100}}data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="900" >
     
      <h1 className='tbl'>Tableaux</h1>
      {
    <div className="container" >
      <div id="slide" ref={slideRef} >
        {slides.map((slide, index) => (
          <div className="item"id="tbl" key={index} style={{ backgroundImage: `url(${slide.img})`,borderRadius:15 }}>
            <div className="content">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.description}</div>
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
