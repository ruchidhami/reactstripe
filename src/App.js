import React, { Component } from 'react';

// Material Component
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
        <div>
          <AppBar title="React Stripe App" onLeftIconButtonClick = { this.handleDrawerOpen } />

          <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={ this.handleDrawerClose }>
            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
