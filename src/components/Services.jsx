import React from 'react';

const Services = () => {
    return (
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
    );
};

export default Services;
