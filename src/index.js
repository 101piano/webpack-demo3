import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var arr=[
   <h1>Hi, world!</h1>,
   <p>It's a nice day!</p>
];

ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('root2')
);
