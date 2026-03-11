import React from 'react';

const Automatisation = () => {
    return (
        <section id="automatisation" className="services-section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>Automatisation</h2>
                    <p>Un flux de travail numérique optimisé pour une efficacité maximale.</p>
                </div>
                <div className="auto-grid grid">
                    <div className="auto-card">
                        <img src="/assets/automatisation.png" alt="Automatisation Dentiste" />
                        <div className="overlay-text">Dentiste</div>
                        <div className="card-content-overlay">
                            <p>Scan intraoral et prescription digitale en un clic.</p>
                        </div>
                    </div>
                    <div className="auto-card">
                        <img src="/assets/hero-bg.png" alt="Automatisation Patient" style={{ filter: 'brightness(0.7)' }} />
                        <div className="overlay-text">Patient</div>
                        <div className="card-content-overlay">
                            <p>Suivi personnalisé et visualisation des résultats en 3D.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Automatisation;
