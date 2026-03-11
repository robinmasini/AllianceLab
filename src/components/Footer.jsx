import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;
