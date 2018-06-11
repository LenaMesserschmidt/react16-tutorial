import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Assignment from './components/Assignment4/Assignment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
