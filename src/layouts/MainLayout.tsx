import React from 'react';
import './MainLayout.scss';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='main'>
        <div className='side-bar'>
            <>sidebar</>
        </div>
        <div className="container">
            <div className="top-nav">
                <>top nav</>
            </div>
            <div className="main-content">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default MainLayout