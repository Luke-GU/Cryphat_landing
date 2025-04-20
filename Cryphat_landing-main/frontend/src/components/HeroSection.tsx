import React, { useState } from 'react';
import '../styles/HeroSection.css';
import axios from 'axios';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/email', { email });
      setStatus('Thanks for joining the beta!');
      setEmail('');
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="home" className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="/video/city-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>
          Blockchain <br />
          Hedging <br />
          Service
        </h1>

        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join Beta</button>
        </form>

        {status && <p className="email-status">{status}</p>}
      </div>
    </section>
  );
};

export default HeroSection;
