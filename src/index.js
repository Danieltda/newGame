import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );



// ReactDOM.render(
//     <Provider store = {store}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );