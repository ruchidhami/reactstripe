import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import logo from './logo.svg';
import './App.css';


// Theme
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <form>
            <RaisedButton type='submit' label='Submit' primary />
            </form>
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
