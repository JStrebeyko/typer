# React Typer

This is my take on creating a two-lines typer - a React component taking in an array prop, which is then displaying them (or rather *typing* them out) starting from the first element on the first line, then the next one the second line and, in case there are more, erase line number two's contents and type the upcoming line, and so on.


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
- [] add `textCursor` functionality
- [] tests
- [] create a demo



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

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
