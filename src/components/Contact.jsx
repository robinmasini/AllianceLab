import React from 'react';

const Contact = ({ formData, handleInputChange, handleContactSubmit, formStatus }) => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className="contact-layout grid">
                    <div className="locations-grid grid">
                        <div className="location">
                            <h4>Siège</h4>
                            <p>Noms: AllianceLab HQ</p>
                            <p>Adres: Aix-en-Provence, France</p>
                            <p>Email: contact@laboratoirealliance.com</p>
                        </div>
                        <div className="location">
                            <h4>NL</h4>
                            <p>Noms: NL Branch</p>
                            <p>Adres: Amsterdam, Netherlands</p>
                        </div>
                        <div className="location">
                            <h4>BE</h4>
                            <p>Noms: BE Branch</p>
                            <p>Adres: Brussels, Belgium</p>
                        </div>
                        <div className="location">
                            <h4>Tunisie</h4>
                            <p>Noms: TN Branch</p>
                            <p>Adres: Tunis, Tunisie</p>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleContactSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nom"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={formStatus.loading}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={formStatus.loading}
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            disabled={formStatus.loading}
                        ></textarea>
                        <button type="submit" className="btn" disabled={formStatus.loading}>
                            {formStatus.loading ? 'Envoi...' : 'Envoyer'}
                        </button>
                        {formStatus.success && <p className="success-msg">Message envoyé avec succès !</p>}
                        {formStatus.error && <p className="error-msg">{formStatus.error}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
