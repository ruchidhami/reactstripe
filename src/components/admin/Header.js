import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {openSidebar} from '../../actions/dashboardAction';

// Material Component
import AppBar from 'material-ui/AppBar';

class Header extends Component {

  render() {
    return (
      <div>
        <AppBar title="React Stripe App" onLeftIconButtonClick = { this.props.openSidebar } />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openSidebar: openSidebar,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);;;