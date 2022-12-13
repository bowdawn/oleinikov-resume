import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/pages/ResumePage';
import "./core/style/css/App.css"
import './core/static/locales/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


