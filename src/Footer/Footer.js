import React from 'react';
import './style.css'; // External CSS for styling

const Footer= () => {
  return (
    <footer className="footer-legal">
    <div className="footer-content">
      <h3>Mentions légales</h3>
      <p>
        <strong>Responsable de ces pages au sens du § 6 TDG / § 6 MDStV</strong><br />
        Michèle Reby<br />
        c/o COCENTER<br />
        Koppoldstr. 1<br />
        86551 Aichach<br /><br />

        Adresse électronique : info(at)reby-art.com<br /><br />

        Numéro de SIRET : 97947853400014
      </p>
    </div>

    <div className="footer-content">
      <h4>Copyright :</h4>
      <p>
        Le copyright des peintures et objets publiés et créés par l'auteure elle-même reste la propriété exclusive de l'auteure des pages. Toute reproduction ou utilisation de tels graphiques, documents sonores, séquences vidéo et textes dans d'autres publications électroniques ou imprimées est interdite sans l'autorisation expresse de l'auteure.
      </p>

      <h4>Clause de responsabilité :</h4>
      <p>
        Malgré un contrôle minutieux du contenu, nous n'assumons aucune responsabilité pour le contenu des liens externes. Seuls les exploitants de ces sites sont responsables de leur contenu.
      </p>

      <h4>Liberté artistique :</h4>
      <p>
        La liberté artistique est un droit fondamental garanti par l'article 5, paragraphe 3, de la Loi fondamentale. L'activité artistique ainsi que la présentation et la diffusion de l'œuvre d'art sont protégées.
      </p>
    </div>
  </footer>
  );
};

export default Footer;
