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
    if (this.state.timePassed < this.state.letters.length) {
      if (this.state.timePassed < this.props.lines[0].length) {
        this.setState({
          firstLineOutput: this.state.firstLineOutput+this.state.letters[this.state.timePassed]
        })
      } else {
        this.setState({
          secondLineOutput: this.state.secondLineOutput+this.state.letters[this.state.timePassed]
        });
      }
    }

      this.setState({
        timePassed: this.state.timePassed+1
      })
      console.log(this.state.timePassed)
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