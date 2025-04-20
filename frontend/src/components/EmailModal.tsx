import React, { useState } from 'react';
import '../styles/EmailModal.css';

interface EmailModalProps {
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('이메일 전송:', email); // 나중에 axios.post로 백엔드에 전송 가능
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Join the Beta</h2>
        <p>크립헷의 가상자산 변동성 완화 서비스 베타에 참여하세요.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
