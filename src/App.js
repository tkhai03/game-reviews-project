import React from 'react';
import "./components/reset.css"
import axios from 'axios'
import Navbar from './components/Navbar'
import List from './components/List'


import './App.css';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <List />
    </div>
  );
}

export default App;
