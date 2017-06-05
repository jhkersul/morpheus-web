import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const getData = (data) => {
  if (data.length === 0) return [];

  const formattedData = data.map((tone) => {
    let name;
    if (tone.tone_id === 'anger') {
      name = 'Raiva';
    } else if (tone.tone_id === 'disgust') {
      name = 'Desgosto';
    } else if (tone.tone_id === 'fear') {
      name = 'Medo';
    } else if (tone.tone_id === 'joy') {
      name = 'Alegria';
    } else if (tone.tone_id === 'sadness') {
      name = 'Tristeza';
    }

    return { name, score: tone.score * 100 };
  });

  return formattedData;
};

const BChart = ({ data }) => (
  <BarChart
    width={400}
    height={300}
    data={getData(data)}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Bar dataKey="score" fill="#8884d8" color="#fff" />
  </BarChart>
);

BChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BChart;
