import React from 'react';

const Community = () => {
    const members = [
        {
            title: "Professionnels",
            description: "Rejoignez un réseau d'experts dédiés à l'excellence.",
            icon: "👨‍⚕️"
        },
        {
            title: "Clients",
            description: "Des cabinets dentaires satisfaits dans toute l'Europe.",
            icon: "🏢"
        },
        {
            title: "Spécialistes",
            description: "Une expertise partagée pour des cas complexes.",
            icon: "🔬"
        }
    ];

    return (
        <section id="community" className="community">
            <div className="container">
                <h2 className="text-center">Communauté</h2>
                <div className="community-grid grid">
                    {members.map((member, index) => (
                        <div key={index} className="community-item">
                            <div className="circle-img flex align-center justify-center" style={{ fontSize: '3rem' }}>
                                {member.icon}
                            </div>
                            <h3>{member.title}</h3>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
