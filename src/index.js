import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Token from './Token';
import FeedHome from './FeedHome';
import InstaFeed from './InstaFeed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/token" element={<Token/>}/>
      <Route path="/feed" element={<FeedHome/>}/>
      <Route path="/instaFeed" element={<InstaFeed/>}/>
    </Routes>
  </BrowserRouter>
    
  
);


