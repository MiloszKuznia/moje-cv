import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { BasicInformations } from './components/BasicInformations/BasicInformations';

function App() {
  return (
    <div className="App">
     <BasicInformations />
     <MainPage />
    </div>
  );
}

export default App;
