import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <video autoPlay muted loop className="hero-video-bg">
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay"></div>

            <div className="hero-content">
                <div className="hero-glass-card">
                    <h1 className="hero-title">Votre Marque,<br />Notre savoir faire</h1>
                    <div className="hero-cta">
                        <button className="btn">Videocall</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
