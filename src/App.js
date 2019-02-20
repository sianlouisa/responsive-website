import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Nav/NavBar';
import Header from './Components/Header';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
