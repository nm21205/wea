// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 확대/축소 기능 비활성화
document.addEventListener('wheel', (event) => {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
    event.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);