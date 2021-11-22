import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
