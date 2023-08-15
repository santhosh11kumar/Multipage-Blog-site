import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextApiProvider from './Context/ContextApi';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </BrowserRouter>
);
