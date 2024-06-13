import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dailyGenerationData from '../data/dailyGenerationData';

const calculateCumulativeGeneration = (data) => {
  let cumulative = 0;
  return data.map(entry => {
    cumulative += entry.generation;
    return { ...entry, cumulativeGeneration: cumulative };
  });
};

const dataWithCumulative = calculateCumulativeGeneration(dailyGenerationData);

const MonthlyGenerationGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dataWithCumulative}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="generation" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="cumulativeGeneration" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlyGenerationGraph;