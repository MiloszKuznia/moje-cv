import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { BasicInformations } from './components/BasicInformations/BasicInformations';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Divider } from '@mui/material';
import { Links } from './components/Links/Links';

function App() {
  return (
    <div className="App">
     <BasicInformations />
     <MainPage />
     <Divider></Divider>
     <AboutMe />
     <Divider></Divider>
     <Links />
    </div>
  );
}

export default App;
