import React, { useState } from 'react';

const Production = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            image: '/assets/production.png',
            text: "Notre centre de production utilise les dernières machines de fraisage et d'impression 3D pour garantir une fidélité absolue à la prescription du dentiste."
        },
        {
            image: '/assets/production.png', // Placeholder or use another relevant asset if available
            text: "Chaque aligner est soigneusement poli et contrôlé par nos experts pour assurer un confort maximal."
        },
        {
            image: '/assets/production.png', // Placeholder
            text: "Nous utilisons des matériaux biocompatibles de haute qualité, certifiés pour un usage orthodontique prolongé."
        }
    ];

    return (
        <section id="production" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2>Production</h2>
                </div>
                <div className="production-layout grid">
                    <div className="production-image">
                        <img src={slides[activeSlide].image} alt={`Production Lab Slide ${activeSlide + 1}`} />
                        <div className="slider-dots flex">
                            {slides.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${activeSlide === index ? 'active' : ''}`}
                                    onClick={() => setActiveSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                    <div className="production-text">
                        <p>{slides[activeSlide].text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Production;
