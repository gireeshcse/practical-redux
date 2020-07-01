import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';
import { saveState } from './redux/localStorage';
import throttle from 'lodash/throttle';
import {pilots} from './redux/selectors';

store.subscribe(throttle(()=>{
  saveState({
    pilots: pilots(store.getState())
  });
},1000))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
