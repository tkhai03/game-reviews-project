import React from 'react';
import "./components/reset.css"
import axios from 'axios'
import Navbar from './components/Navbar'
import List from './components/List'

import AddGame from "./components/AddGame"
import './App.css';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <AddGame />
      <List />
    </div>
  );
}

export default App;
