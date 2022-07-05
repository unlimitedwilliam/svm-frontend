import React from 'react';
import './PaymentChart.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const PieData = {
    labels: ['Khu vực Hà Nội', 'Khu vực Hà Nội', 'Khu vực Hà Nội'],
    datasets: [{
        label: 'By payment types',
        data: [8, 7, 6, 40],
        backgroundColor: ['#FF4C54','#F5A623','#4A90E2', '#03BD5B'],
        borderCorlor: ['#FF4C54','#F5A623','#4A90E2', '#03BD5B'],
        borderWidth: 0,
    }],
}

const PieOption: any = {
    maintainAspectRatio: false,
    responsive: true,
    layout: {
        padding: 25
    },
    plugins: {
        legend: {
            display: true,
            position: 'right',
            align: 'end',
            labels: {
                usePointStyle: true, 
                pointStyle: 'circle',
            },
        },
        datalabels: {
          display: function (context: any) {
            return context.dataset.data[context.dataIndex];
          },
          formatter: (val: any, ctx: any) => {
            let totalDataSum = 0; 
            for (let i = 0; i < ctx.chart.data.datasets[ctx.datasetIndex].data.length; i++) {
              if(ctx.chart.getDataVisibility(i) === true) {
                totalDataSum += ctx.chart.data.datasets[ctx.datasetIndex].data[i];
              }
            };
            const percentage = val * 100 / totalDataSum;
            const roundedPercentage = Math.round(percentage * 100) / 100
            return `${roundedPercentage}%`
          },
          anchor: 'end',
          align: 'end',
          offset: 1
        },
        events: ['click']
    }
}

const PaymentChart = () => {
  return (
    <Pie data={PieData} plugins={[ChartDataLabels]} options={PieOption}/>
  )
}

export default PaymentChart