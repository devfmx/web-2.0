import React from 'react';
import ReactDOM from 'react-dom';
//Css imports
import './css-imports'
import './index.css';
import jQuery from 'jquery';
import 'bootstrap';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const $ = jQuery
window.Jquery = window.$ = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
