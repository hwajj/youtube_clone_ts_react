import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app';
import Youtube from './components/service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
