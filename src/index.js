import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './login/App';
import Perfil from './perfil/perfil.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path= '/soft2-Trabajo/' element = {<App/>} />
    <Route path= '/soft2/' element = {<Perfil/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
