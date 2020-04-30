import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function CountryChart(props) {
    // Destructuring props to related data
    const {deaths, recovered, critical} =  props

    const data = {
        labels: [
            'Deaths',
            'Recovered',
            'Critical'
        ],
        datasets: [{
            data: [deaths, recovered, critical],
            backgroundColor: [
                '#fc393e',
                '#b29e89',
                '#ff8829'
            ],
            hoverBackgroundColor:[
                '#bd272c',
                '#808c3f',
                '#ec7d27'
                
            ] 
        }]
    };
    return (
        <Doughnut data={data} />
    )
}

export default CountryChart
