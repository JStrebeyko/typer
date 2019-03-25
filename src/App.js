import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typer from './components/Typer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Typer lines={['puk puk', 'kto tam?']} interval={500}/>
        </header>
      </div>
    );
  }
}

export default App;
