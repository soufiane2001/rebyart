import React, { useState } from 'react';
import './style.css'; // Importing external CSS for styling
import { useLanguage } from '../LanguageContext'; // Importing the useLanguage hook for language context

const Contact = () => {
  const { language } = useLanguage(); // Get the current language

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://example.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(language === 'fr' ? 'Message envoyé avec succès!' : 'Nachricht erfolgreich gesendet!');
      } else {
        alert(language === 'fr' ? 'Erreur lors de l\'envoi du message.' : 'Fehler beim Senden der Nachricht.');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  // Define content for both French (fr) and German (de)
  const content = {
    fr: {
      heading: 'Contactez-nous',
      nomLabel: 'Nom',
      prenomLabel: 'Prénom',
      emailLabel: 'Email',
      sujetLabel: 'Sujet',
      messageLabel: 'Message',
      submitButton: 'Envoyer'
    },
    de: {
      heading: 'Kontaktieren Sie uns',
      nomLabel: 'Name',
      prenomLabel: 'Vorname',
      emailLabel: 'E-Mail',
      sujetLabel: 'Betreff',
      messageLabel: 'Nachricht',
      submitButton: 'Senden'
    }
  };

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>{content[language].heading}</h2>

        <div className="input-group">
          <label htmlFor="nom">{content[language].nomLabel}</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="prenom">{content[language].prenomLabel}</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">{content[language].emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="sujet">{content[language].sujetLabel}</label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">{content[language].messageLabel}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">{content[language].submitButton}</button>
      </form>
    </div>
  );
};

export default Contact;
