import React from 'react';
import ReactDOM from 'react-dom';


import {BrowserRouter} from "react-router-dom"
import { Routes } from './components/routes/Routes'
import UnitsProvider, {UnitsData} from './context/Units';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
  <UnitsProvider value={UnitsData}>
    <Routes/>
  </UnitsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

