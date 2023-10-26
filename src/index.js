import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const rootElement = document.getElementById('root');
rootElement.style = 'width: 100%; height: 100%';
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
