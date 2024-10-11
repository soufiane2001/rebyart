import React from 'react';
import './style.css'; // External CSS for styling
import { useLanguage } from '../LanguageContext'; // Importing the useLanguage hook for language context

const Footer = () => {
  const { language } = useLanguage(); // Get the current language

  // Define content for both French (fr) and German (de)
  const content = {
    fr: {
      legalTitle: 'Mentions légales',
      responsiblePerson: 'Responsable de ces pages au sens du § 6 TDG / § 6 MDStV',
      name: 'Michèle Reby',
      address: 'c/o COCENTER\nKoppoldstr. 1\n86551 Aichach',
      email: 'Adresse électronique : info(at)reby-art.com',
      siret: 'Numéro de SIRET : 97947853400014',
      phone: 'Telephone: +33 (0) 7 84 60 74 80',

      copyrightTitle: 'Copyright :',
      copyrightContent: `Le copyright des peintures et objets publiés et créés par l'auteure elle-même reste la propriété exclusive de l'auteure des pages. Toute reproduction ou utilisation de tels graphiques, documents sonores, séquences vidéo et textes dans d'autres publications électroniques ou imprimées est interdite sans l'autorisation expresse de l'auteure.`,

      liabilityTitle: 'Clause de responsabilité :',
      liabilityContent: `Malgré un contrôle minutieux du contenu, nous n'assumons aucune responsabilité pour le contenu des liens externes. Seuls les exploitants de ces sites sont responsables de leur contenu.`,

      artisticFreedomTitle: 'Liberté artistique :',
      artisticFreedomContent: `La liberté artistique est un droit fondamental garanti par l'article 5, paragraphe 3, de la Loi fondamentale. L'activité artistique ainsi que la présentation et la diffusion de l'œuvre d'art sont protégées.`
    },
    de: {
      legalTitle: 'Rechtliche Hinweise',
      responsiblePerson: 'Verantwortlich für diese Seiten gemäß § 6 TDG / § 6 MDStV',
      name: 'Michèle Reby',
      address: 'c/o COCENTER\nKoppoldstr. 1\n86551 Aichach',
      email: 'E-Mail-Adresse: info(at)reby-art.com',
      siret: 'SIRET-Nummer: 97947853400014',
      phone: 'Telefon: +33 (0) 7 84 60 74 80',

      copyrightTitle: 'Urheberrecht:',
      copyrightContent: `Das Urheberrecht der von der Autorin selbst erstellten und veröffentlichten Gemälde und Objekte bleibt ausschließlich Eigentum der Autorin dieser Seiten. Jede Vervielfältigung oder Verwendung solcher Grafiken, Tonaufnahmen, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne die ausdrückliche Zustimmung der Autorin nicht gestattet.`,

      liabilityTitle: 'Haftungsausschluss:',
      liabilityContent: `Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.`,

      artisticFreedomTitle: 'Künstlerische Freiheit:',
      artisticFreedomContent: `Die künstlerische Freiheit ist ein Grundrecht, das durch Artikel 5 Absatz 3 des Grundgesetzes garantiert wird. Die künstlerische Tätigkeit sowie die Darstellung und Verbreitung des Kunstwerks sind geschützt.`
    }
  };

  return (
    <footer className="footer-legal">
      <div className="footer-content">
        <h3>{content[language].legalTitle}</h3>
        <p>
          <strong>{content[language].responsiblePerson}</strong><br />
          {content[language].name}<br />
          {content[language].address.split('\n').map((line, index) => (
            <React.Fragment key={index}>{line}<br /></React.Fragment>
          ))}<br />
          {content[language].email}<br /><br />
          {content[language].siret}<br />
          {content[language].phone}
        </p>
      </div>

      <div className="footer-content">
        <h4>{content[language].copyrightTitle}</h4>
        <p>{content[language].copyrightContent}</p>

        <h4>{content[language].liabilityTitle}</h4>
        <p>{content[language].liabilityContent}</p>

        <h4>{content[language].artisticFreedomTitle}</h4>
        <p>{content[language].artisticFreedomContent}</p>
      </div>
    </footer>
  );
};

export default Footer;
