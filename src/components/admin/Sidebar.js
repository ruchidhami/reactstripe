import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionHome from 'material-ui/svg-icons/action/home';
import Pets from 'material-ui/svg-icons/action/pets';
import Redeem from 'material-ui/svg-icons/action/redeem';
import Reorder from 'material-ui/svg-icons/action/reorder';

import { closeSidebar, naviagateTo } from '../../actions/dashboardAction';

// Material Component
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

class Sidebar extends Component {

  componentWillReceiveProps(props) {
    this.setState({open: props.open});
  }

  render() {
    return (
      <Drawer
      docked={false}
      open={this.props.dashboard.isSidebarOpen}
      onRequestChange={ this.props.closeSidebar }>
        <Menu>
          <MenuItem primaryText="Dashboard" leftIcon={<ActionHome />} onClick={() => this.props.naviagateTo('/dashboard')} />
          <MenuItem primaryText="Product" leftIcon={<Pets /> } onClick={() => this.props.naviagateTo('/dashboard/products')} />
          <MenuItem primaryText="SKU" leftIcon={<Reorder />} />
          <MenuItem primaryText="Order" leftIcon={<Redeem />} />
        </Menu>
      </Drawer>
    )
  }
}

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeSidebar: closeSidebar,
    naviagateTo: naviagateTo
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);;