import React from 'react';
import ReactDOM from 'react-dom';
import Diact from './lib/react/index';
import './index.css';
import App from './App';

/** @jsx Diact.createElement */
const element = (
  <div id="fooss" value="222">
    <a>bar</a>
    <b />
  </div>
)

console.log(element)

Diact.render(
  element,
  document.getElementById('root')
);
