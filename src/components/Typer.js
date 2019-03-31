import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineCounter: 0,
      charCounter: 0,
      firstLineOutput: '',
      secondLineOutput: '',
    }
  }

  static defaultProps = {
    typingSpeed: 500,
    deletingSpeed: 200,
    eternal: false
  }

  componentDidMount() {

    // setting up time-tracking, if there is the line props provided
    // and if its first element is not falsy:
    if (this.props.lines) {
      this.props.lines[0] && this.startTimer()
    }
  }
  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => {
    let intervalId = setInterval(this.type, this.props.typingSpeed);
    this.setState({
      intervalId: intervalId,
    })
  }

  stopTimer = () => {
    clearInterval(this.state.intervalId);
  }

  type = () => {
    const {lineCounter} = this.state;
    const word = this.props.lines[lineCounter];
    const whichLine = lineCounter < 1 ? 'firstLineOutput' : 'secondLineOutput';
    const isTheLineComplete = this.state[whichLine] === word;

    // business logic scenarios:

    // 1. In case it all has been written:
    // (meaning lineCounter equals num. of lines and character counter is equal to the last line's length)
    if (this.state.lineCounter === this.props.lines.length) {

      // a) is the eternal mode on?
      // keep on going or finish
      if (this.props.eternal) {
        this.eraseSecondLine();
        this.setState({
          lineCounter: 1
        })
      } else {
        this.stopTimer();
        console.log('Typer stopped.');
      }

    // 2. In case there are still lines to write
    // but the current one is complete:
    } else if (isTheLineComplete) {
      this.setState({
        lineCounter: lineCounter + 1,
        charCounter: 0,
      })
      if (this.state.lineCounter > 1 && this.state.lineCounter !== this.props.lines.length) {
        this.eraseSecondLine();
      }
    // 3. Business as usual
    } else {
      this.addLetter(word, whichLine);
    }
  }

  addLetter = (what, where) => {
    const {charCounter} = this.state;

      this.setState({
        [where]: this.state[where] + what[charCounter],
        charCounter: charCounter + 1
      })
  }

  eraseSecondLine = () => {
    this.stopTimer()
    this.erasingInterval = setInterval(() => {
      if (this.state.secondLineOutput === "") {
        clearInterval(this.erasingInterval);
        this.startTimer();
      }
      this.setState({
        secondLineOutput: this.state.secondLineOutput.slice(0, this.state.secondLineOutput.length-1)
      })
    }, this.props.deletingSpeed)
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

Typer.propTypes = {
  lines: PropTypes.array,
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  eternal: PropTypes.bool,
};
