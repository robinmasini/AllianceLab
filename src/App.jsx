import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { supabase } from './lib/supabase';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Production from './components/Production';
import Automatisation from './components/Automatisation';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LockOverlay from './components/LockOverlay';

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
  }, [inputCode, inputRefs]);

  return (
    <div className="app">
      {!isUnlocked && (
        <LockOverlay
          inputCode={inputCode}
          codeError={codeError}
          handleCodeChange={handleCodeChange}
          handleKeyDown={handleKeyDown}
          inputRefs={inputRefs}
        />
      )}

      <div className={!isUnlocked ? 'app-content-blur' : ''}>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main>
          <Hero />
          <About />
          <Services />
          <Production />
          <Automatisation />
          <Community />
          <Contact
            formData={formData}
            handleInputChange={handleInputChange}
            handleContactSubmit={handleContactSubmit}
            formStatus={formStatus}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
