import './style.css';
import reby1 from '../assets/michel.png';
import { useEffect, useState } from 'react';
import arrow from '../assets/arrow.png';
import ger from '../assets/Germany.png';
import fran from '../assets/fran.png';
import bateau from '../assets/7.png';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../LanguageContext'; // Adjust the import based on your context

function App({ sectionRef }) {
  const { language } = useLanguage(); // Assuming this returns 'fr' or 'de'
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('text');
      const imageElement = document.getElementById('image');

      if (textElement && imageElement) {
        const textPosition = textElement.getBoundingClientRect().top;
        const imagePosition = imageElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (textPosition < screenPosition) {
          setTextVisible(true);
        }
        if (imagePosition < screenPosition) {
          setImageVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='m'>
      <h3 id='me' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">Michèle Reby</h3>
      <div className='me' data-aos="slide-up" data-aos-duration="1500" data-aos-delay="500">
        <div
          className={`text ${textVisible ? 'visible' : ''}`}
          id='text'
          data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="400"
        >
          <p>
            {language === 'fr' ? (
              "Fille d'un père allemand et d'une mère du sud de la France, j'ai grandi à Munich et près de Collioure, dans Midi de la France. C'est à Collioure qu'est né le fauvisme et je considère que mon travail est enraciné dans cette tradition. Les couleurs méditerranéennes de mes peintures à l'aspect rêveur et ludique respirent la joie de vivre et l'innocence. La nostalgie d'un Sud de la France idéalisé par l'enfance offre le contrepoint d'une société de consommation moderne, rythmée par l'efficacité économique."
            ) : (
              "Tochter eines deutschen Vaters und einer Mutter aus dem Süden Frankreichs, wuchs ich in München und in der Nähe von Collioure im Midi de la France auf. In Collioure entstand der Fauvismus, und ich betrachte meine Arbeit als in dieser Tradition verwurzelt. Die mediterranen Farben meiner traumhaften und verspielten Gemälde atmen Lebensfreude und Unschuld aus. Die Nostalgie eines idealisierten Südfrankreichs aus der Kindheit bietet den Kontrapunkt zu einer modernen Konsumgesellschaft, die von wirtschaftlicher Effizienz geprägt ist."
            )}
          </p>
        </div>

        <div
          className={`images ${imageVisible ? 'visible' : ''}`}
          id='image'
        >
          <div className="custom-shape-containers">
            <img src={reby1} alt="Image" className="custom-shape-images" />
            <div className="custom-shapes"></div>
          </div>
        </div>
      </div>

      <div className="arrow">
        <Link to="hero" smooth={true} duration={1000} offset={-50}>
          <img src={arrow} style={{ width: 21, marginTop: 15 }} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
}

export default App;
