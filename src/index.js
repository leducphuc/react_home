import './ReactotronConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
//import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
//import configureStore from './redux/configureStore';
//import rootSaga from './redux/sagas';
//import getRoutes from './routes';;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
