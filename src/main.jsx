import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Store from './components/Store.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>
);