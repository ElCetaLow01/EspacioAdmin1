// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa la versión correcta de ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Importa reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>
);

reportWebVitals(); // Llama a reportWebVitals después de renderizar