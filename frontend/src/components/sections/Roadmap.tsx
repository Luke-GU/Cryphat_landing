import React from 'react';
import '../../styles/Roadmap.css';
import { motion } from 'framer-motion';

const roadmapItems = [
  { date: '2025 Q3', text: 'MVP 개발 및 기획 구체화' },
  { date: '2025 Q4', text: 'MVP 개발 완료' },
  { date: '2026 상반기', text: '앱 개발 완료 및 서비스 배포 착수' },
  { date: '2026 하반기', text: '추가 투자 유치 및 동아시아 → 미국 시장 진출' },
  { date: '2027 이후', text: '세계 10대 거래소 협업 및 시장 점유율 10% 이상 달성' },
];

const Roadmap: React.FC = () => {
  return (
    <section id="section1" className="roadmap-container">
      <h2 className="roadmap-title">Project Roadmap</h2>
      <div className="roadmap-timeline">
        {roadmapItems.map((item, index) => (
          <motion.div
            className="roadmap-entry"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <div className="roadmap-point" />
            <div className="roadmap-content">
              <h3>{item.date}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
