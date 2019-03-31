# React Typer

This is my take on creating a two-lines typer - a React component taking in an array prop, which is then displaying them (or rather *typing* them out) starting from the first element on the first line, then the next one the second line and, in case there are more, erase line number two's contents and type the upcoming line, and so on.

Check it out in action - [**DEMO**](https://jstrebeyko.github.io/typer/)


## Props

Name | Type | Default | Usage
---|---|---|---
`lines`| *Array* | -- | Entry point for the strings to be typed in
`typingSpeed` | *Number* | `500` | Determine how fast the characters should be inputted
`deletingSpeed` | *Number* | `200` | Control the speed of deletion
`eternal` | *Boolean* | `false` | Switches on the eternal mode, meaning the second row will keep on being deleted and typed in


## TODO:

- [x] finish the main functionality by adding removal
- [x] add `eternal` functionality
- [x] create a demo
- [ ] add `textCursor` functionality
- [ ] tests

## Contributing

To be able to painlessly contribute to the project, [please see the contribution guide here](https://github.com/JStrebeyko/typer/blob/master/CONTRIBUTING.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

