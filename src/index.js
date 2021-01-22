import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <BrowserRouter>

    <Routes/>

  </BrowserRouter>,
  

 
  document.getElementById('root')
);


reportWebVitals();
