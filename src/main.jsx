import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { PortfolioApp } from './PortfolioApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-portfolio/">
        <PortfolioApp />
    </BrowserRouter>
  </React.StrictMode>
)
