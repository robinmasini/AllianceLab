import React from 'react';

const LockOverlay = ({ inputCode, codeError, handleCodeChange, handleKeyDown, inputRefs }) => {
    return (
        <div className="glass-overlay">
            <div className="liquid-glass-card">
                <div className="card-header">
                    <img src="/assets/logo.png" alt="AllianceLab Logo" className="logo-anim" />
                    <div className="badge">Coming Soon</div>
                </div>

                <h2>Accès Privé</h2>
                <p>AllianceLab prépare sa nouvelle expérience digitale.<br />Entrez votre code pour prévisualiser.</p>

                <div className="code-input-wrapper">
                    <div className="code-input-container">
                        {inputCode.map((digit, index) => (
                            <input
                                key={index}
                                ref={inputRefs[index]}
                                type="text"
                                inputMode="numeric"
                                className={`code-field ${codeError ? 'error' : ''} ${digit ? 'filled' : ''}`}
                                value={digit}
                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                maxLength={1}
                                placeholder="•"
                            />
                        ))}
                    </div>
                </div>

                {inputCode.join('') === '4321' ? (
                    <div className="unlock-status authorized">
                        <span className="icon">✓</span> Accès autorisé. Bienvenue.
                    </div>
                ) : codeError ? (
                    <div className="unlock-status denied">
                        Code incorrect. Veuillez réessayer.
                    </div>
                ) : null}

                <div className="card-footer">
                    <p>© 2026 AllianceLab - Excellence in Aligners</p>
                </div>
            </div>
        </div>
    );
};

export default LockOverlay;
