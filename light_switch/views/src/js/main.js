import React from 'react';
import ReactDOM from 'react-dom';
import LightSwitch from './components/lightSwitch';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

ReactDOM.render(
  <div>
    <LightSwitch />
  </div>
  ,document.getElementById('main'));
