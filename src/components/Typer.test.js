import React from 'react';
import ReactDOM from 'react-dom';
import Typer from './Typer';
import util from 'util';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Typer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('starts typing after given time', () => {
  const div = document.createElement('div');
  const timeoutPromise = util.promisify(setTimeout);
  const props = {
    typingSpeed: 500,
    lines: ['aaaa', 'bbbb', 'cccc'],
  }

  const typer = ReactDOM.render(<Typer {...props}/>, div);

  timeoutPromise(1000).then( () => {
    expect(typer)
  })
});

