import React from 'react';
import ReactDOM from 'react-dom';
//Css imports
import './css-imports'
import './index.css';
import $ from 'jquery';
import './js-imports';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


window.Jquery = window.$ = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
