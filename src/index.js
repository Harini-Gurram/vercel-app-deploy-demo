import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route} from 'react-router-dom';
import Token from './Token';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
      <Route path="/" element={<App/>}/>
      <Route path="/token" element={<Token/>}/>
 
  </BrowserRouter>
    
  
);


