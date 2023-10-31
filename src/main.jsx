import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import "./styles/global.scss";
import "./styles/typography.scss";
import "./styles/button.scss";
import "./styles/container.scss";
import "./styles/modules/pageBox.module.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
