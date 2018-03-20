import React, { Component } from 'react';

//Components
import Dashboard from './components/admin/Dashboard'

// Font
import 'typeface-roboto'

// Theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const muiTheme = getMuiTheme(darkBaseTheme);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleDrawerOpen = () => this.setState({open: true});
  handleDrawerClose = () => this.setState({open: false});

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
