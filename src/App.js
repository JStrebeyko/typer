import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typer from './components/Typer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      lines: [
        'puk puk',
        'kto tam?'
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Typer lines={this.state.lines} interval={500}/>
        </header>
      </div>
    );
  }
}

export default App;
