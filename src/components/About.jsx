import React from 'react';

const About = () => {
    return (
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
    );
};

export default About;
