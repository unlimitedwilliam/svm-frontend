import React, { useState } from 'react';
import './ProductsChart.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import data from '../../data/data';
import DatePicker from 'react-datepicker';
import {AiOutlineCalendar} from 'react-icons/ai';

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutLabels = []; 
const percentData = []; 
const doughnutColors= [];
for(let i=1; i< data.totalSale.length; i++) {
    doughnutLabels[i-1] = data.totalSale[i].title;
    percentData[i-1] = data.totalSale[i].percent;
    doughnutColors[i-1] = data.totalSale[i].color;
}
  
const doughnutData = {
    labels: doughnutLabels,
    datasets: [
      {
        data: percentData,
        backgroundColor: doughnutColors,
        borderColor: doughnutColors,
        borderWidth: 1,
      },
    ],
};

const doughnutOptions: any = {
    maintainAspectRatio: false,
    layout: {
        padding: 25
    },
    plugins: {
        legend: {
            display: true,
            position: 'right', 
            align: 'center'
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
            offset: 7
        },
    }
};

const doughnutLabelsLine = [{
    id: 'doughnutLabelsLine',
    afterDraw(chart: any, args: any, options: any) {
        const {ctx, chartArea: {top, bottom , left, right, width, height}} = chart;
        chart.data.datasets.forEach((dataset: any, index: number) => {
            chart.getDatasetMeta(index).data.forEach((datapoint: any, i: number) => {
                console.log(chart.getDatasetMeta(index).data[i]);
                if (chart.getDatasetMeta(index).data[i].circumference > 0) {
                    const {x, y} = datapoint.tooltipPosition(); 
                    const halfWidth = width/2 + 25; 
                    const halfHeight = height/2 + 25;

                    const a = x > halfWidth ? x - halfWidth : halfWidth - x; 
                    const b = y > halfHeight ? y - halfHeight : halfHeight - y;
    
                    const xLine = x > halfWidth ? x + a + 10: x - a -10;
                    const yLine = y > halfHeight ? y + b + 10 : y - b - 10;
    
                    ctx.beginPath();
                    ctx.moveTo(x,y);
                    ctx.lineTo(xLine, yLine);
                    ctx.strokeStyle = dataset.backgroundColor[i];
                    ctx.stroke();
                }
            })
        })
    }
}]

const ProductsChart = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleChange = (dates: any) => {
    const [start, end] = dates; 
    setStartDate(start);
    setEndDate(end);
  }

  return (
    <div className="report__content__product">
        <div className="report__content__product__heading">
        <div className="report__content__product__heading__title">
            Tổng số sản phẩm bán ra
        </div>
        <div className='report__content__product__heading__filter'>
            <div className="report__content__product__heading__calendar">
                <DatePicker 
                    placeholderText='Thời gian' 
                    dateFormat='dd/MM/yyyy'
                    closeOnScroll={true} 
                    selected={startDate} 
                    onChange={handleChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                />
                <AiOutlineCalendar/>
            </div>
            <div className="report__content__product__heading__option">
                Tất cả
            </div>
        </div>
        </div>
        <div className="report__content__product__body">
        <div className='report__content__product__body__chart'>
            <Pie data={doughnutData} options={doughnutOptions} plugins={doughnutLabelsLine}/>
        </div>
        </div>
    </div>

  )
}

export default ProductsChart