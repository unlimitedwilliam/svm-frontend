import React, { useState } from 'react';
import data from '../../data/data';
import './SaleChart.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Legend,
    Tooltip
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import Box from '../Box/Box';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Legend,
    Tooltip
);

const chartLabel = []; 
const revenueData = []; 
const saleData= [38, 80, 60, 90, 120, 85, 110, 140, 132, 139];
for(let i=0; i< data.revenueByMonth.length; i++) {
    chartLabel[i] = data.revenueByMonth[i].month;
    revenueData[i] = data.revenueByMonth[i].revenue;
}

const chartData: any = {
    labels: chartLabel,
    datasets: [
        {
            data: saleData,
            type: 'line',
            borderColor: '#4A90E2',
            borderWidth: 2,
            fill: false,
            order: 0,
            yAxisID: 'y1',
        },
        {   
            data: revenueData,
            type: 'bar',
            backgroundColor: '#D4EDFB',
            barThickness: 20,
            order: 1,
            yAxisID: 'y2'
        }
    ]
};

const chartOptions: any = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: false,
        },
    },
    scales: {    
        x: {
            grid: {
                display: false
            }
        },
        y1: {
            type: 'linear',
            position: 'left', 
            labels: [0, 40, 80, 120],
            title: {
                display: true, 
                text: 'Sản phẩm',
                align: 'center',
                padding: 15
            },      
            grid: {
                drawOnChartArea: false,
            },
        },
        y2: {
            type: 'linear',
            position: 'right',
            labels: [0, 10000, 20000, 30000, 40000],
            title: {
                display: true, 
                text: 'Doanh Thu',
                align: 'center',
                padding: 15
            },
            color: '#A3CDFF'
        }
    }
}

const SaleChart = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleChange = (dates: any) => {
    const [start, end] = dates; 
    setStartDate(start);
    setEndDate(end);
  }
    
  return (
    <div className="sale">
        <div className="sale__heading">
          <div className="sale__heading__title">
            Thống kê doanh thu bán hàng
          </div>
          <div className='sale__heading__func'>
            <div className="sale__heading__calendar">
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
            <div className="sale__heading__option">
                Tất cả
            </div>
          </div>
          <div className="sale__heading__filter">
            <BiFilterAlt/>
          </div>
        </div>
        <div className="sale__body">
            <div className="sale__body__chart">
                <Chart type='bar' data={chartData} options={chartOptions}/>
            </div>
        <div className="sale__body__box">
            <Box/>
        </div>
        </div>
    </div>
  )
};

export default SaleChart;