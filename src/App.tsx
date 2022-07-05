import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Cardview from './components/svm-content-cardview/Cardview.components';
import Dashboard from './components/svm-content-dashboard/Dashboard.components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Cardview/>}/>
          <Route path='/trang-chu' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
