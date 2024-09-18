import React, { useState } from 'react';
import './style.css'; // Importing external CSS for styling

const Contact = () => {
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
            alert('Message envoyé avec succès!');
          } else {
            alert('Erreur lors de l\'envoi du message.');
          }
        } catch (error) {
          console.error('Erreur:', error);
        }
      };
    
      return (
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contactez-nous</h2>
    
            <div className="input-group">
              <label htmlFor="nom">Nom</label>
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
              <label htmlFor="prenom">Prénom</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="sujet">Sujet</label>
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
    
            <button type="submit">Envoyer</button>
          </form>
        </div>
      );
};

export default Contact;
