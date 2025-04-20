import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import '../../styles/Tokenomics.css';

const data = [
  { name: 'Community', value: 72 },
  { name: 'Airdrop', value: 18 },
  { name: 'Liquidity', value: 5 },
  { name: 'Team', value: 3 },
  { name: 'Marketing', value: 2 },
];

const COLORS = ['#50e6e6', '#32b7cc', '#68f0f0', '#3399cc', '#4466aa'];

const Tokenomics: React.FC = () => {
  return (
    <section id="section3" className="tokenomics-section">
      <h2 className="tokenomics-title">Tokenomics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
        <Pie
  data={data}
  cx="50%"
  cy="50%"
  innerRadius={60}
  outerRadius={120}
  fill="#8884d8"
  paddingAngle={3}
  dataKey="value"
  label={({ name, percent }) =>
    `${name} ${(percent * 100).toFixed(0)}%`
  }  isAnimationActive={true} // 애니메이션 활성화
>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Tokenomics;
