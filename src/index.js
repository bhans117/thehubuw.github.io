import React from 'react';
import ReactDOM from 'react-dom';
import App from './controllers/App';
import registerServiceWorker from './registerServiceWorker';
require('./css/main.css');
require('./css/bootstrap.css');
require('./css/bootstrap-grid.css');
require('./css/bootstrap-reboot.css');
require('./font-awesome/css/font-awesome.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
