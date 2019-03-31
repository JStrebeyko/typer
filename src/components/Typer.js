import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordCounter: 0,
      letterCounter: 0,
      firstLineOutput: '',
      secondLineOutput: '',
      timePassed: 0,
      lettersPassed: 0,
    }
  }

  static defaultProps = {
    typingSpeed: 500,
    deletingSpeed: 500,
    eternal: false
  }

  componentDidMount() {
    // setting up time-tracking:
    this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => {
    let intervalId = setInterval(this.type, this.props.typingSpeed);
    this.setState({
      intervalId: intervalId,
      // lettersToType: this.props.lines.join(" ").split('')
    })
  }

  stopTimer = () => {
    clearInterval(this.state.intervalId);
  }

  type = () => {
    const {wordCounter, secondLineOutput} = this.state;
    const word = this.props.lines[wordCounter];

    const whichLine = wordCounter < 1 ? 'firstLineOutput' : 'secondLineOutput';

    const isTheLineComplete = this.state[whichLine] === word;


    // business logic scenarios:

    // 1. In case it all has been written:
    // (meaning wordCounter equals num. of lines and letter counter is equal to the last line's length)
    if ((this.state.wordCounter === this.props.lines.length) ) {

      // a) is the eternal mode on?
      // keep on going or finish
      if (this.props.eternal) {
        this.eraseSecondLine();
        this.setState({
          wordCounter: 1
        })
        // this.eraseSecondLine()
      } else {
        this.stopTimer();
        console.log('stopped');
      }

    // 2. In case there are still lines to write
    // but the current one is complete:
    } else if (isTheLineComplete) {
      this.setState({
        wordCounter: wordCounter + 1,
        letterCounter: 0,
      })
      console.log(`Number of words already written: ${wordCounter}`)
      if (this.state.wordCounter > 1 && this.state.wordCounter !== this.props.lines.length) {
        this.eraseSecondLine();
      }
    } else {
      this.addLetter(word, whichLine);
    }
  }

  addLetter = (what, where) => {
    const {wordCounter, letterCounter} = this.state;

      this.setState({
        [where]: this.state[where] + what[letterCounter],
        letterCounter: letterCounter + 1
      })
  }

  doesTheSecondLineNeedClearing = () => {

  }

  eraseSecondLine = () => {
    this.stopTimer()
    this.erasingInterval = setInterval(() => {
      if (this.state.secondLineOutput === "") {
        clearInterval(this.erasingInterval);
        console.log('start writing');
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
      <span>words: {this.state.wordCounter}</span>
      <span>letters: {this.state.letterCounter}</span>
        <span>{this.state.firstLineOutput}</span>
        <span>{this.state.secondLineOutput}</span>
      </div>
      );
  }
}

export default Typer;

Typer.propTypes = {
  lines: PropTypes.array
};
