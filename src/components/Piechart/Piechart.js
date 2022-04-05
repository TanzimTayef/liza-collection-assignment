import React from 'react';
import { Pie, PieChart } from 'recharts';

const Piechart = () => {
    const team01 = [
        {
          "name": "Team A",
          "value": 400
        },
        {
          "name": "Team B",
          "value": 300
        },
        {
          "name": "Team C",
          "value": 300
        },
        {
          "name": "Team D",
          "value": 200
        },
        {
          "name": "Team E",
          "value": 278
        },
        {
          "name": "Team F",
          "value": 189
        }
      ];
      const team02 = [
        {
          "name": "Team A",
          "value": 2400
        },
        {
          "name": "Team B",
          "value": 4567
        },
        {
          "name": "Team C",
          "value": 1398
        },
        {
          "name": "Team D",
          "value": 9800
        },
        {
          "name": "Team E",
          "value": 3908
        },
        {
          "name": "Team F",
          "value": 4800
        }
      ];
    return (
        <PieChart width={500} height={250}>
        <Pie data={team01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={team02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>
    );
};

export default Piechart;