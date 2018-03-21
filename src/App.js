import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

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

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
