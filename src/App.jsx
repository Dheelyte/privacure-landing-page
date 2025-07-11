import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cyberpunk-theme">
      {/* Navigation */}
      <nav className="cyber-nav">
        <div className="logo-container">
          <span className="logo-glitch">Privacure</span>
        </div>
        <div className="nav-links">
          <a href="#contact" className="cta-button">Request Demo</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title glitch">
            <span>SECURING</span>
            <span>AFRICA'S</span>
            <span>HEALTHCARE</span>
            <span>FUTURE</span>
          </h1>
          <p className="hero-subtitle">AI-powered cybersecurity tailored for African hospitals</p>
          <div className="hero-buttons">
            <a href="#solution" className="cta-button primary">Explore Our Solution</a>
            <a href="#contact" className="cta-button secondary">Get Protected</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="cyber-grid"></div>
          <div id="earth"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <div className="section-header">
          <h2>The <span className="highlight">Digital Epidemic</span></h2>
          <p className="section-subtitle">African healthcare's invisible crisis</p>
        </div>
        <div className="problem-content">
          <div className="problem-stats">
            <div className="stat-card">
              <div className="stat-number">73%</div>
              <div className="stat-desc">of African hospitals experienced cyber attacks in 2023</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">48hrs</div>
              <div className="stat-desc">average downtime after ransomware attacks</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$2.5M</div>
              <div className="stat-desc">average cost of healthcare data breaches</div>
            </div>
          </div>
          <div className="problem-details">
            <h3>The Vulnerabilities We Combat:</h3>
            <ul className="cyber-list">
              <li>
                <span className="list-icon">⟫</span>
                <span className="list-text">Outdated security infrastructure in digitizing hospitals</span>
              </li>
              <li>
                <span className="list-icon">⟫</span>
                <span className="list-text">Ransomware locking critical patient records</span>
              </li>
              <li>
                <span className="list-icon">⟫</span>
                <span className="list-text">Insider threats and unauthorized access</span>
              </li>
              <li>
                <span className="list-icon">⟫</span>
                <span className="list-text">Non-compliance with NDPR, HIPAA regulations</span>
              </li>
              <li>
                <span className="list-icon">⟫</span>
                <span className="list-text">Lack of real-time threat monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="section-header">
          <h2>Your <span className="highlight">Cyber Armor</span></h2>
          <p className="section-subtitle">Built for African healthcare realities</p>
        </div>
        <div className="solution-features">
          <div className="feature-card">
            <div className="feature-icon">⎔</div>
            <h3>AI Sentinel</h3>
            <p>Machine learning detects anomalies in real-time, stopping threats before they breach your systems.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⎔</div>
            <h3>Fortified Encryption</h3>
            <p>Military-grade AES-256 encryption for all patient data, at rest and in transit.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⎔</div>
            <h3>Smart Access Control</h3>
            <p>Granular role-based permissions with biometric verification for sensitive records.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⎔</div>
            <h3>Compliance Guardian</h3>
            <p>Automated tools for NDPR, HIPAA compliance with audit-ready reporting.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⎔</div>
            <h3>24/7 Cyber Watch</h3>
            <p>Real-time monitoring dashboard with instant alerts for suspicious activity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⎔</div>
            <h3>African-Ready</h3>
            <p>Optimized for low-bandwidth environments with offline protection capabilities.</p>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section id="why-now" className="urgency-section">
        <div className="urgency-content">
          <h2>The <span className="highlight">Time To Act</span> Is Now</h2>
          <div className="urgency-cards">
            <div className="urgency-card">
              <h3>Regulatory Storm</h3>
              <p>NDPR enforcement is intensifying across Nigeria with heavy penalties for non-compliance.</p>
            </div>
            <div className="urgency-card">
              <h3>Attack Surge</h3>
              <p>Healthcare cyberattacks in Africa increased 320% since COVID-19 began.</p>
            </div>
            <div className="urgency-card">
              <h3>Investor Focus</h3>
              <p>Donors now require proof of data security before funding digital health initiatives.</p>
            </div>
          </div>
          <div className="market-opportunity">
            <h3>Market Opportunity</h3>
            <div className="market-stats">
              <div className="market-stat">
                <div className="stat-value">8K+</div>
                <div className="stat-label">Hospitals & Clinics</div>
              </div>
              <div className="market-stat">
                <div className="stat-value">$700</div>
                <div className="stat-label">Monthly Value</div>
              </div>
              <div className="market-stat">
                <div className="stat-value">First</div>
                <div className="stat-label">Mover Advantage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="traction-section">
        <h2>Our <span className="highlight">Progress</span></h2>
        <div className="milestones">
          <div className="milestone">
            <div className="milestone-date">Q1 2024</div>
            <div className="milestone-dot"></div>
            <div className="milestone-desc">Prototype completed with core AI detection</div>
          </div>
          <div className="milestone">
            <div className="milestone-date">Q2 2024</div>
            <div className="milestone-dot"></div>
            <div className="milestone-desc">Live dashboard with encrypted records</div>
          </div>
          <div className="milestone">
            <div className="milestone-date">Q3 2024</div>
            <div className="milestone-dot"></div>
            <div className="milestone-desc">NDPR compliance framework established</div>
          </div>
          <div className="milestone">
            <div className="milestone-date">Q3 2024</div>
            <div className="milestone-dot"></div>
            <div className="milestone-desc">Pilot programs with 3 teaching hospitals</div>
          </div>
          <div className="milestone future">
            <div className="milestone-date">Q4 2024</div>
            <div className="milestone-dot"></div>
            <div className="milestone-desc">Pan-African expansion</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>The <span className="highlight">Cyber Guardians</span></h2>
        <div className="team-members">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Godwin Abimbola</h3>
            <p>Founder & Strategy Lead</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Team Lead</h3>
            <p>Oyawoye Anuoluwapo</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Backend Developer</h3>
            <p>Delight Olu-Olagbuji</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Sulaimon Taiwo Femi</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Adeniji Adewale</h3>
            <p>Frontend developer</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>AI/ML Engineer</h3>
            <p>Omolaiye Samuel</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Omoike Aimanehi Grace</h3>
            <p>Legal Compliance advisor</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Onyinye Ogbuka</h3>
            <p>Technical writer</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2>Ready to <span className="highlight">Fortify</span> Your Hospital?</h2>
          <p>Schedule a demo or speak with our cybersecurity specialists</p>
          <form className="cta-form">
            <input type="text" placeholder="Hospital Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option>Select Country</option>
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>Kenya</option>
              <option>South Africa</option>
              <option>Other</option>
            </select>
            <button type="submit" className="cta-button primary">Request Consultation</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="cyber-footer">
        <div className="footer-logo">
          <span className="logo-glitch">Privacure</span>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer-copyright">
          © 2023 Privacure. Protecting Africa's healthcare future.
        </div>
      </footer>
    </div>
  );
}

export default App;