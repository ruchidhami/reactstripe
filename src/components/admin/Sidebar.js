import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeSidebar} from '../../actions/dashboardAction';

// Material Component
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            handleDrawerClose: props.handleDrawerClose
        }
    }

    componentWillReceiveProps(props) {
        this.setState({open: props.open});
    }

    render() {
        return (
            <Drawer
            docked={false}
            width={200}
            open={this.props.dashboard.isSidebarOpen}
            onRequestChange={ this.props.closeSidebar }>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
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
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar);;