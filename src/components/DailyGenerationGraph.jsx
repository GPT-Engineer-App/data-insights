import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import hourlyGenerationData from '../data/hourlyGenerationData';

const calculateCumulativeGeneration = (data) => {
  let cumulative = 0;
  return data.map(entry => {
    cumulative += entry.generation;
    return { ...entry, cumulativeGeneration: cumulative };
  });
};

const calculateAverageGeneration = (data) => {
  let totalGeneration = 0;
  return data.map((entry, index) => {
    totalGeneration += entry.generation;
    const averageGeneration = totalGeneration / (index + 1);
    return { ...entry, averageGeneration: averageGeneration };
  });
};

const dataWithCumulativeAndAverage = calculateAverageGeneration(calculateCumulativeGeneration(hourlyGenerationData));

const DailyGenerationGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dataWithCumulativeAndAverage}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="generation" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="cumulativeGeneration" stroke="#82ca9d" />
        <Line type="monotone" dataKey="averageGeneration" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DailyGenerationGraph;