// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"

const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot method
const root = ReactDOM.createRoot(rootElement);

// Render the App component using the new root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
