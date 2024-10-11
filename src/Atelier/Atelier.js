import React from 'react';
import atelier from '../assets/atelier.jpg';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook

function Atelier() {
  const { language, switchLanguage } = useLanguage(); // Get the current language and the switchLanguage function

  AOS.init({
    duration: 1200,
    once: true,
  });

  // Define text content for both French (fr) and German (de)
  const content = {
    fr: {
      title: "Atelier Arc-en-ciel",
      subtitle: '"C\'est l\'enfance de l\'art"',
      sectionTitle: "L'art avec les enfants à l'hôpital",
      text: `"C'est l'enfance de l'art" ne signifie pas, comme une traduction littérale pourrait le laisser croire, "c'est l'enfance de l'art". "L'enfance de l'art" n'est pas un terme d'histoire de l'art, mais signifie l'art du commencement. Commencer et percevoir quelque chose avec un regard sur le monde qui dépasse la routine de l'habitude, qui est ludique et léger comme un enfant ("l'enfance").
      
Je retrouve cette spontanéité dans mon travail avec les enfants. En tant que responsable d'ateliers et de projets, je fais de l'art avec des enfants à l'hôpital. La force créatrice des enfants et leur joie, voire leur volonté de créer, m'inspirent énormément. Quel que soit leur handicap ou leur pathologie, les enfants que je rencontre ne s'identifient pas à leur maladie, mais sont entièrement absorbés par le processus artistique.

Cet oubli de soi-même au moment de la création artistique se perd souvent à l'adolescence. Les adultes ont parfois l'air sérieux, sûrs d'eux et de leur savoir, mais ce sont les enfants dans leur jeu imaginatif qui me passionnent. Que se passe-t-il lorsqu'un enfant devient adulte ? La perte de la joie de vivre et de l'éclat dans les yeux doit-elle nécessairement aller de pair avec le passage à l'âge adulte ? Dans un monde où tout est question de croissance et de performance, il faut de la force et du courage pour retrouver la légèreté. En travaillant avec les petits patients dans les hôpitaux pédiatriques, j'en fais régulièrement l'expérience.`
    },
    de: {
      title: "Atelier Arc-en-ciel",
      subtitle: '"Es ist die Kindheit der Kunst"',
      sectionTitle: "Kunst mit Kindern im Krankenhaus",
      text: `"Es ist die Kindheit der Kunst" bedeutet nicht, wie eine wörtliche Übersetzung vermuten lässt, "es ist die Kindheit der Kunst". Der Begriff "Kindheit der Kunst" stammt nicht aus der Kunstgeschichte, sondern bedeutet den Beginn der Kunst. Etwas zu beginnen und mit einem Blick auf die Welt wahrzunehmen, der die Routine des Gewohnten überwindet und spielerisch und leicht wie ein Kind ("Kindheit") ist.

Ich finde diese Spontaneität in meiner Arbeit mit Kindern wieder. Als Leiterin von Workshops und Projekten mache ich Kunst mit Kindern im Krankenhaus. Die schöpferische Kraft der Kinder und ihre Freude, ja sogar ihr Wille zu schaffen, inspirieren mich enorm. Unabhängig von ihren Behinderungen oder Krankheiten identifizieren sich die Kinder, die ich treffe, nicht mit ihrer Krankheit, sondern sind ganz in den künstlerischen Prozess vertieft.

Dieses Vergessen des eigenen Ichs im Moment der künstlerischen Schöpfung geht oft in der Jugend verloren. Erwachsene wirken manchmal ernst, selbstsicher und wissend, aber es sind die Kinder in ihrem imaginativen Spiel, die mich faszinieren. Was passiert, wenn ein Kind erwachsen wird? Muss der Verlust der Lebensfreude und des Glanzes in den Augen zwangsläufig mit dem Erwachsenwerden einhergehen? In einer Welt, in der alles auf Wachstum und Leistung ausgerichtet ist, braucht es Kraft und Mut, Leichtigkeit wiederzufinden. Bei der Arbeit mit kleinen Patienten in Kinderkrankenhäusern mache ich diese Erfahrung regelmäßig.`
    }
  };

  return (
    <div>


      {/* Render content dynamically based on selected language */}
      <h4>{content[language].title}</h4>
      <div id="atelier" className='atelier' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
        <div className='atelier1'>
          <h1>{content[language].title}</h1>
          <h2>{content[language].subtitle}</h2>
          <div className='ateliercontenu scroll-container'>
            <h3>{content[language].sectionTitle}</h3>
            <p>{content[language].text}</p>
          </div>
        </div>
        <img className='atelierimg' src={atelier} alt='Atelier'/>
      </div>
    </div>
  );
}

export default Atelier;
