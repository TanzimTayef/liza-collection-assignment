import React from 'react';
import BarChart from '../BarChart/BarChart';
import AreaChart from '../Areachart/Areachart';
import "./Chart.css"
import Linechart from '../Linechart/Linechart';
import Piechart from '../Piechart/Piechart';

const Chart = () => {
    return (
        <div className='chart'>
            <BarChart />
            <AreaChart />
            <Linechart />
            <Piechart/>
        </div>
    );
};

export default Chart;