import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Nav/NavBar';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default App;
