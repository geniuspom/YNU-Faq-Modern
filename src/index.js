import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { browserHistory } from 'react-router'

import './assets/styles/customs/master.scss';

const initialState = window.__INITIAL_STATE__

const AppWithRouter = () => (
    <App history={browserHistory}
      initialState={initialState} />
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
registerServiceWorker();
