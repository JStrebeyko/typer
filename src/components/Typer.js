import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: '',
      firstLineOutput: '',
      secondLineOutput: '',
      timePassed: 0
    }
  }
  componentDidMount() {
    var intervalId = setInterval(this.AddLetter, this.props.interval);
    this.setState({
      intervalId: intervalId,
      letters: this.props.lines.join(" ").split('')
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  AddLetter = () => {
    const {firstLineOutput, secondLineOutput, letters, timePassed} = this.state;

    // If typing first row
    if (timePassed < letters.length) {
      if (timePassed < this.props.lines[0].length) {
        this.setState({
          firstLineOutput: firstLineOutput+letters[timePassed]
        })
      } else {
        this.setState({
          secondLineOutput: secondLineOutput+letters[timePassed]
        });
      }
    }
    this.setState({
      timePassed: timePassed+1
    })
      console.log(timePassed)
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
  lines: PropTypes.array
};

Typer.defaultProps = {
  interval: 1000
}