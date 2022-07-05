import React from 'react';
import './Dashboard.scss';
import data from './data/data';
import Card from './components/Card/Card.component';
import { CardProps } from './components/Card/Card.props';
import ProductsChart from './components/ProductsChart/ProductsChart';
import PaymentChart from './components/PaymentChart/PaymentChart';
import SaleChart from './components/SaleChart/SaleChart';
import RegionChart from './components/RegionChart/RegionChart';

const Dashboard = () => {


  return (
    <div className='dashboard'>
        <div className="summary-card">
            {
              data.summary.map((item: CardProps, index: number) => (
                  <Card key={`card-${index}`} title={item.title} value={item.value} background={item.background} />
              ))
            }
        </div>
        <SaleChart/>
        <div className="report">
            <div className="report__content">
              <ProductsChart/>
              <div className="report__content__payment">
                <div className="report__content__payment__heading">
                  <div className="report__content__payment__heading__title">
                    Báo cáo theo hình thức thanh toán
                  </div>
                </div>
                <div className="report__content__payment__body">
                    <PaymentChart/> 
                </div>
                <div className="report__content__payment__footer">
                    <div className="report__content__payment__footer__types">
                      <a style={{color: '#FF2D54'}}>Tiền mặt</a>
                      <div className="divider"></div>
                      <a>Momo</a>
                      <div className="divider"></div>
                      <a>Thẻ ngân hàng</a>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className="regional-report">
          <div className="regional-report__heading">
            <div className="regional-report__heading__title">
              Doanh thu theo khu vực
            </div>
          </div>
          <div className="regional-report__body">
            <RegionChart/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard