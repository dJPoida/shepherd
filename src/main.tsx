import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';
import './index.css';

const headers = new Headers();
headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
