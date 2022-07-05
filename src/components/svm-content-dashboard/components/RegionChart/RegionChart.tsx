import React from 'react';
import data from '../../data/data';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    Tooltip, 
    ChartDataLabels
);

const dataLabel='14 - 20 Mar';
const horChartLabel = []; 
const revenueData = []; 
for(let i=0; i< data.revenueByDistrict.length; i++) {
    horChartLabel[i] = data.revenueByDistrict[i].title;
    revenueData[i] = data.revenueByDistrict[i].value;
}

const chartData: any = {
    labels: horChartLabel,
    datasets: [
        {
            data: revenueData,
            type: 'bar',
            backgroundColor: '#D4EDFB',
            barThickness: 14,
            order: 1,
        }
    ]
};

const chartOptions: any = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }, 
        datalabels: {
            display: true, 
            anchor: 'end',
            align: 'right'
        },
        tooltip: {
            callbacks: {
                title: (tooltipTitle: any) => {return dataLabel},
                label: (tooltipTitle: any) => {return ''},
            }
        }
    },
    scales: {
        x: {
            grid: {
                display: true, 
                borderDash: [10, 5]
            }
        },
        y: {
            grid: {
                display: false,
            }
        }
    }
}

const SaleChart = () => {
  return (
    <Bar data={chartData} plugins={[ChartDataLabels]} options={chartOptions}/>
  )
};

export default SaleChart;