import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/layout/Header'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'
import './index.css';


ReactDOM.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>,
  document.getElementById('root')
);

