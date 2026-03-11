import React from 'react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
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
    );
};

export default Header;
