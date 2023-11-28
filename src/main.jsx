import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyComponent from "./MyComponent";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
