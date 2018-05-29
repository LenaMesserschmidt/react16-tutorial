import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Assignment from './Assignment4/Assignment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Assignment />, document.getElementById('root'));
registerServiceWorker();
