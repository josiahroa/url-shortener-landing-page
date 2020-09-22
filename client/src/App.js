import React, {useState, useEffect} from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
