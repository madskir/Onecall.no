import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Icon from './components/Chat';
import Index from './components/Index';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <Index></Index>
      <Icon></Icon>
    </div>
  );
}

export default App;
