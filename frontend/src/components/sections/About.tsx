import React from 'react';
import '../../styles/About.css';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="section2" className="about-section">
      <div className="about-container">
      <motion.div
  className="about-text"
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: false, amount: 0.3 }}
>
  <h2>About Cryphat</h2>
  <p>
    Despite the growing adoption of cryptocurrencies, extreme volatility still hinders their use as actual currency.
    Cryphat addresses this issue by integrating blockchain-based algorithms and hedging strategies to mitigate volatility.
    Our mission is to create an environment where long-term crypto holders can use their assets for real-world payments,
    not just speculative investment.
  </p>
</motion.div>


        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src="/img/aboutimg.png" alt="About Cryphat Illustration" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
