import React, { Component } from 'react';

class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLineOutput: '',
      secondLineOutput: ''
     }
     this.timer = this.timer.bind(this);
  }
  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
    this.addLetter();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
  }

  addLetter() {
    this.setState({
      firstLineOutput: this.props.lines[0],
      secondLineOutput: this.props.lines[1]
    });
  }

  render() {


    return (
      <div className="typer-wrapper">
        <span>{this.state.firstLineOutput}</span>
        <span>{this.state.secondLineOutput}</span>
      </div>
      );
  }
}

export default Typer;