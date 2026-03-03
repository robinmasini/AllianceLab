import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { supabase } from './lib/supabase';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: null });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isUnlocked, setIsUnlocked] = useState(localStorage.getItem('alliancelab_unlocked') === 'true');
  const [inputCode, setInputCode] = useState(['', '', '', '']);
  const [codeError, setCodeError] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setFormStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setFormStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setFormStatus({ loading: false, success: false, error: 'Une erreur est survenue. Veuillez réessayer.' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCodeChange = (index, value) => {
    if (isNaN(value)) return;

    const newCode = [...inputCode];
    newCode[index] = value.substring(value.length - 1);
    setInputCode(newCode);
    setCodeError(false);

    // Auto-focus next
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !inputCode[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  useEffect(() => {
    if (inputCode.every(digit => digit !== '')) {
      const fullCode = inputCode.join('');
      if (fullCode === '4321') {
        localStorage.setItem('alliancelab_unlocked', 'true');
        setTimeout(() => setIsUnlocked(true), 500);
      } else {
        setCodeError(true);
        setTimeout(() => setInputCode(['', '', '', '']), 500);
        setTimeout(() => inputRefs[0].current.focus(), 600);
      }
    }
  }, [inputCode]);

  return (
    <div className="app">
      {!isUnlocked && (
        <div className="glass-overlay">
          <div className="liquid-glass-card">
            <img src="/assets/logo.png" alt="AllianceLab Logo" />
            <h2>Site en construction</h2>
            <p>Veuillez saisir le code d'accès pour prévisualiser le site.</p>

            <div className="code-input-container">
              {inputCode.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  className={`code-field ${codeError ? 'error' : ''}`}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                />
              ))}
            </div>

            {inputCode.join('') === '4321' && (
              <p className="unlock-msg">Accès autorisé. Chargement...</p>
            )}
          </div>
        </div>
      )}

      <div className={!isUnlocked ? 'app-content-blur' : ''}>
        {/* ... header remains same ... */}
        <header className="header flex align-center justify-between">
          <div className="logo">
            <img src="/assets/logo.png" alt="AllianceLab Logo" />
          </div>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="flex">
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>À propos</a></li>
              <li><a href="#aligners" onClick={() => setIsMenuOpen(false)}>Nos aligners</a></li>
              <li><a href="#production" onClick={() => setIsMenuOpen(false)}>Production</a></li>
              <li><a href="#automatisation" onClick={() => setIsMenuOpen(false)}>Automatisation</a></li>
              <li><a href="#community" onClick={() => setIsMenuOpen(false)}>Communauté</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={isMenuOpen ? 'close' : ''}></span>
          </div>
        </header>

        {/* ... hero remains same ... */}
        <section className="hero flex align-center">
          <div className="hero-content">
            <h1 className="hero-title">Votre Marque,<br />Notre savoir faire</h1>
            <div className="hero-cta">
              <button className="btn">Videocall</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-img">
              <img src="/assets/hero-bg.png" alt="Hero Lab" />
            </div>
          </div>
        </section>

        {/* ... about remains same ... */}
        <section id="about" className="about grid">
          <div className="about-text">
            <h2>À propos de nous</h2>
            <p>AllianceLab est à la pointe de l'innovation dentaire. Notre mission est d'allier expertise artisanale et technologies de pointe pour offrir des solutions d'alignement dentaire d'une précision inégalée.</p>
            <p>Nous croyons en une automatisation intelligente qui sert le talent de nos prothésistes, permettant une production fluide et des résultats constants.</p>
          </div>
          <div className="about-image">
            <img src="/assets/renaud.png" alt="Renaud - Expert Lab" />
            <span className="caption">Renaud - Expert Laboratoire</span>
          </div>
        </section>

        {/* Services Section */}
        <section id="aligners" className="services-section bg-light">
          <div className="container">
            <div className="section-header">
              <h2>Nos Aligners</h2>
              <p>Une technologie invisible pour un sourire parfait.</p>
            </div>
            <div className="service-grid grid">
              <div className="service-item">
                <img src="/assets/aligner.png" alt="Aligner" />
              </div>
              <div className="service-text">
                <h3>Précision & Discrétion</h3>
                <p>Nos aligners sont conçus sur mesure à l'aide de scans 3D haute résolution. Chaque étape de la fabrication est contrôlée pour assurer un confort optimal au patient et une efficacité clinique maximale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Production Section */}
        <section id="production" className="services-section">
          <div className="container">
            <div className="section-header">
              <h2>Production</h2>
            </div>
            <div className="production-layout grid">
              <div className="production-image">
                <img src="/assets/production.png" alt="Production Lab" />
                <div className="slider-dots flex">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="production-text">
                <p>Notre centre de production utilise les dernières machines de fraisage et d'impression 3D pour garantir une fidélité absolue à la prescription du dentiste.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Automatisation Section */}
        <section id="automatisation" className="services-section bg-light">
          <div className="container">
            <div className="section-header">
              <h2>Automatisation</h2>
            </div>
            <div className="auto-grid grid">
              <div className="auto-card">
                <img src="/assets/automatisation.png" alt="Automatisation" />
                <div className="overlay-text">Dentiste</div>
              </div>
              <div className="auto-card">
                <div className="card-placeholder">
                  <p>Intégration fluide entre le cabinet dentaire et notre laboratoire.</p>
                </div>
                <div className="overlay-text">Patient</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="community">
          <div className="container">
            <h2 className="text-center">Communauté</h2>
            <div className="community-grid grid">
              <div className="community-item">
                <div className="circle-img"></div>
                <h3>Professionnels</h3>
                <p>Rejoignez un réseau d'experts dédiés à l'excellence.</p>
              </div>
              <div className="community-item">
                <div className="circle-img"></div>
                <h3>Clients</h3>
                <p>Des cabinets dentaires satisfaits dans toute l'Europe.</p>
              </div>
              <div className="community-item">
                <div className="circle-img"></div>
                <h3>Spécialistes</h3>
                <p>Une expertise partagée pour des cas complexes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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

        {/* Footer */}
        <footer className="footer">
          <div className="container flex justify-between align-center">
            <div className="footer-info">
              <img src="/assets/logo.png" alt="Logo" style={{ height: '30px' }} />
              <p>&copy; 2026 AllianceLab. Tous droits réservés.</p>
            </div>
            <div className="footer-links flex">
              <a href="#">Politique de confidentialité</a>
              <a href="#">Mentions légales</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;
