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
      { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/d1e04cb4-2700-40c5-a9c3-16a9d7bda39e/823DD131-F380-42B6-A3A9-BBCE9D1E3877.jpg?format=1000w' },
      { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/ca11e0df-b4d1-4fcf-b78e-0b7f2034d234/CFDFC9A8-FB86-4C7C-BDB7-A8B07A774348.jpg?format=1000w' },
      { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/cd332771-dade-41a8-96bd-c083c2ff7961/IMG_7047.jpg?format=1000w' },
      { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/6d6df30e-1f46-4431-8516-d4cbda2f9340/IMG_7014.jpg?format=1000w' },
      { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/885483d3-f1af-402a-ad61-e089e48210d5/6D7D417F-B68F-4A7C-8EC0-D2D67DDB4DE8.jpg?format=1000w' },
      {id:6,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/d4e551b6-d360-411c-b606-46a6456e21d5/Adjustments+%2846%29.jpg?format=1000w'},
      {id:7,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/bd597aaf-5d00-4fb0-8895-789521b102d9/9A7CED76-C510-47FF-8219-D329B1CB2691.jpg?format=1000w'},
      {id:8,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/d4e551b6-d360-411c-b606-46a6456e21d5/Adjustments+%2846%29.jpg?format=1000w'},
      {id:9,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/2f3f3b3b-8520-4bfb-a4cc-3085d1382add/IMG_2204+2.jpg?format=1000w'},
      {id:10,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/a1b54464-bc9c-4e3d-8b55-02d064221e29/IMG_5319.jpg?format=1000w'},
      {id:11,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/6b8b96e1-e600-48fc-974b-12e060ad0486/0470A1D0-87C1-413F-A483-48E4B5AE8B95.jpeg?format=1000w'},
     
    ]

    ,
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
    
   ,
    [
      { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/2bcff3eb-4338-4533-aa16-be55fd84ce93/Adjustments+%2879%29.jpg?format=2500w' },
      { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/c15afbd7-8ab5-407d-afe2-3e2126788f2f/IMG_8232.jpg?format=300w' },
      { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/b9f1a945-25be-4b36-8c14-7c47ba4fd348/43DFE75C-ADDD-4573-B79C-E412EEB954BC.jpg?format=500w' },
      { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/bab2ff99-2870-46c3-b86a-fe06ed76c041/Bateaujpg.jpg?format=500w' },
      { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/852cf7c3-ef72-4dd1-84ff-c35b012fea08/93C042E4-A9F3-4F80-90F2-6BC24A91F05F.jpg?format=300w' },
      {id:6,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/5a5597dc-18d3-4428-984c-503ef700a95d/C8323420-E2DB-40E8-A8B4-4CA280D384C4.jpg?format=300w'},
      {id:7,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/ae6317fa-f1af-4ef9-af0c-f5a6584b3956/Adjustments+%2875%29.jpg?format=300w'},
      {id:8,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668261417865-V8HP3IIMCJRONDBTMWLZ/IMG_3039%2B2.jpg?format=500w'},
      {id:9,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/617e3844-b3e6-41c4-afb5-9f964de2557b/IMG_8329.jpg?format=300w'},
      {id:10,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668261460608-N4VI05GKVZE31T1CPQIR/img_4468.jpg?format=500w'},
      {id:11,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/0cadacca-0596-40d4-93e6-5ce60a1c2472/IMG_4472.jpg?format=500w'},
      {id:12,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1668261541504-LSOVF244AZAM4K6SRDV5/IMG_8004.jpg?format=500w'},
    ],[
      { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/4b3f252b-6ad5-4391-a4bf-b36c57dec280/IMG_7456.jpg?format=1000w' },
      { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688377619489-0NHK70JKZ9UCZBGXTMWY/IMG_7023.jpg?format=1000w' },
      { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/b5b4c585-19c1-42eb-bf90-725ed22f7629/IMG_0243.jpg?format=1000w' },
      { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/1688377687343-1B876UAMQDJKLKPS9UAR/IMG_7011.jpg?format=1000w' },
      { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/c34e659f-69d3-43f5-8f99-4211a0bd0ce3/IMG_7540.jpg?format=1000w' },
      {id:6,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/431a0d77-d686-44d6-a1b1-1c57fce017e6/IMG_3251.jpg?format=1000w'},
      {id:7,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/98ba2aaa-c840-4cb4-ad8e-39b91e7c8ad0/IMG_6999.jpg?format=1000w'},
     
    ]
    ,
    [
      { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/17cf5eb2-84ce-4dd4-bdb1-69a2644d5b3f/IMG_3253.jpg?format=2500w' },
      { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/cabcd16b-c596-4d4c-ad46-781ffc2b41cc/81CA3635-6410-4556-BFAD-26729DB0278D.jpg?format=2500w' },
      { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/3cd858e6-07f4-4150-b980-dbe34124d0fd/IMG_7535.jpg?format=1000w' },
      { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/93bf7046-8a9a-47f1-a0d9-4765ec3c63ff/0FEAE0A8-DC12-4148-8BBD-3F5975B3035F.jpg?format=1000w' },
      { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/7a2ddb0d-d090-4c04-8bdc-fbb12704a148/IMG_7840.jpg?format=1000w' },
      {id:6,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/2e9fe3d0-d40d-4b8a-be68-0f7a4310511e/B0534FAD-0071-4356-AC41-07B71EA3A33A.jpg?format=1000w'},
      {id:7,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/cc97eba7-6558-4189-a3e2-896b351f500b/IMG_7406.jpg?format=1000w'},
      {id:8,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/8b233be5-321d-4e11-aa89-a6d5254175d7/8EBCEBE5-1684-4768-BBE3-86B7F04A005B.jpg?format=1000w'},
      {id:9,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/f2fb1394-c3a7-4cab-843c-9e774ab7550b/93789E2B-79DE-46A3-AF33-9F1EBEE589A5.jpg?format=1000w'},
      {id:10,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/61be20ef-9b07-456a-ac96-fe807f9fe365/IMG_7293.jpg?format=1000w'},
      {id:11,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/bf90e347-1d56-4cbb-aa2b-1d1cb3400aa0/IMG_7449.jpg?format=1000w'},
      {id:12,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/2b9c74ca-cf67-4bd7-b2ac-acdf5b7b8da9/13A66F7F-1CA8-4917-9CDF-37175232C1B3.jpg?format=1000w'},
      {id:13,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/16f93573-9cb7-47af-89ab-c6e850695b2a/08085D15-5EE8-48B7-A564-9D6D9A83B64B.jpg?format=1000w'},
      {id:14,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/8869f9a8-4f37-44bb-864b-404daeeac00f/IMG_5322.jpg?format=1000w'},
      {id:15,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/7ebcf01f-5b01-4128-8246-a49af3495f21/IMG_3253.jpg?format=1000w'},
      {id:16,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/ba8bfe06-a860-4093-a73f-6358acd0a43d/36339D33-F65D-47EE-BEEB-93FE6F97A9B1.jpg?format=1000w'},
      {id:17,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/4e6c3919-0c79-4e80-9b9d-22a91d09a2dc/6A237E10-B1E1-4DBA-A668-F46D00FB8893.jpg?format=1000w'},
    ]
   ,[
      { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/82d1a6b5-b964-4f15-8c7b-d203039db411/Bildschirmfoto+20sws22-11-11+um+17.00.jpg?format=1000w' },
      { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/f6ce2302-d5ee-478c-a3c1-471908d0e407/Bildschirmfoto+2022-11-11+um+16.59.jpg?format=1000w' },
      { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/711ac60f-94fd-4de5-8ad6-d2f5f91a2076/Bildschirmfoto+2022-11-11+um+17.01.jpg?format=1000w' },
      { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/314df6ed-7613-453d-b93d-4dc5f5462ddc/Bildschirmfoto+AYAY2022-11-11+um+17.00.jpg?format=1000w' },
      { id: 5, src: 'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/9127044c-a120-4789-b68f-98523a067c98/IMG_4741.jpg?format=1000w' },
      {id:6,src:'https://images.squarespace-cdn.com/content/v1/636a4d461e8e557ea87e1182/c6757077-5a5d-43ba-9631-e1eb916ca3d6/IMG_5764.jpg?format=1000w'},
  
    ],
  
  ];
  








  var [open,setOpen]=useState(false);
 var [indice,setindice]=useState(0)
  return (
    <>
    <PhotoSlide tableaux={tableaux[indice]} index={0} isopen={open} close={()=>{setOpen(!open)}} />
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
              <button onClick={()=>{ setindice(index);setOpen(!open);}}>Explorer</button>
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
