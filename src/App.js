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
        'kto tam?',
        'chico...'
      ],
      lineToAdd: '',
      eternal: true,

    }
  }

  addTag = () => {
    if (this.state.lineToAdd === '') {
      return false
    }
    this.setState({
      lines: [...this.state.lines, this.state.lineToAdd],
      lineToAdd: ''
    })
  }

  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.addTag();
    }
  }

  handleChange = (e) => {
    this.setState({
      lineToAdd: e.target.value
    })
  }

  toggleEternal = () => {
    this.setState({
      eternal: !this.state.eternal
    })
  }

  deleteTag = (index) => {
    if (this.state.lines.length === 1) {
      alert("Typer needs text!");
    } else {
      const arr2splice = [...this.state.lines];
      arr2splice.splice(index,1)
      this.setState({
        lines: arr2splice
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Typer lines={this.state.lines} eternal={this.state.eternal}/>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="controls">
            <input value={this.state.lineToAdd} onChange={this.handleChange} onKeyUp={this.handleKeyUp} placeholder="Add your text..."/>
            <button onClick={this.addTag}>add</button>
            <br/>
            <label>
              eternal mode
              <input type="checkbox" checked={this.state.eternal} onChange={this.toggleEternal}/>
            </label>
            <br/>

            {this.state.lines.map((x,i) => (<span key={i}>{x} | <span onClick={e => this.deleteTag(i)}>x</span></span>))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
