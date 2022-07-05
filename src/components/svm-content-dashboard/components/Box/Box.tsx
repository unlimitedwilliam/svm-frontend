import React from 'react';
import './Box.scss';
import { AiOutlineArrowUp } from 'react-icons/ai';
import data from '../../data/data';

const Box = () => {
  return (
    <div className='sale-box'>
        <div className="sale-box__title">
            Tổng doanh thu
        </div>
        <div className="sale-box__total">
            <span className='sale-box__total__number'>500.000đ</span>
            <div className="sale-box__total__change">
                <AiOutlineArrowUp color='#08A781'/>
                <span style={{color: '#08A781'}}>20,57%</span>
            </div>
        </div>
        <div className="sale-box__table">
            {
                data.revenueByRegion.map((item: any, index: number) => (
                    <>
                    {item.change === true ? 
                    <div className='sale-box__table__row'>
                        <div key={`cell-${index}`}>
                            {item.title}
                        </div>
                        <div>{item.value}</div>
                        <div className='sale-box__table__row__change'>
                            <AiOutlineArrowUp color='#08A781'/>
                            {item.percent}
                        </div>
                    </div>
                        : 
                    <div className='sale-box__table__row'>    
                        <div key={`cell-${index}`}>
                            {item.title}
                        </div>
                        <div>{item.value}</div>
                    </div>
                    }       
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Box