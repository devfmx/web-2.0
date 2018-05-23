import React from 'react';
import ReactDOM from 'react-dom';
//Css imports
import './css-imports'
import './index.css';
import jQuery from 'jquery';
import 'bootstrap';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';



const $ = jQuery
window.Jquery = window.$ = $;

render(
    <App/>,
    document.getElementById('root')
);

registerServiceWorker();
