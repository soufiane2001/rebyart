 import React from 'react'
import atelier from '../assets/atelier.jpg'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Atelier() {



  AOS.init({
    duration: 1200, // Duration of animation in milliseconds
    once: true, // Whether animation should happen only once
  });


  return (
    <div>
      
    <h4>AtelierArc-en-ciel </h4>
    <div className='atelier' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
        
        <div className='atelier1'>
          <h1>Atelier Arc-en-ciel</h1>
          <h2>"C'est l'enfance de l'art"</h2>
          <div className='ateliercontenu scroll-container'>
            <h3>L'art avec les enfants 
            à l'hôpital</h3>
            <p className=''>
            "C'est l'enfance de l'art" ne signifie pas, comme une traduction littérale pourrait le laisser croire, "c'est l'enfance de l'art". "L'enfance de l'art" n'est pas un terme d'histoire de l'art, mais signifie l'art du commencement. Commencer et percevoir quelque chose avec un regard sur le monde qui dépasse la routine de l'habitude, qui est ludique et léger comme un enfant ("l'enfance").

Je retrouve cette spontanéité dans mon travail avec les enfants. En tant que responsable d'ateliers et de projets, je fais de l'art avec des enfants à l'hôpital. La force créatrice des enfants et leur joie, voire leur volonté de créer, m'inspirent énormément. Quel que soit leur handicap ou leur pathologie, les enfants que je rencontre ne s'identifient pas à leur maladie, mais sont entièrement absorbés par le processus artistique. 

Cet oubli de soi-même au moment de la création artistique se perd souvent à l'adolescence. Les adultes ont parfois l'air sérieux, sûrs d'eux et de leur savoir, mais ce sont les enfants dans leur jeu imaginatif qui me passionnent. Que se passe-t-il lorsqu'un enfant devient adulte ? La perte de la joie de vivre et de l'éclat dans les yeux doit-elle nécessairement aller de pair avec le passage à l'âge adulte ? Dans un monde où tout est question de croissance et de performance, il faut de la force et du courage pour retrouver la légèreté. En travaillant avec les petits patients dans les hôpitaux pédiatriques, j'en fais régulièrement l'expérience.
            </p>
          </div>
        </div>
      <img className='atelierimg' src={atelier} />

</div>
    </div>   )
}

export default Atelier;
