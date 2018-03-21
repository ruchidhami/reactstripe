import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Pets from 'material-ui/svg-icons/action/pets';
import Redeem from 'material-ui/svg-icons/action/redeem';
import Reorder from 'material-ui/svg-icons/action/reorder';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import {closeSidebar} from '../../actions/dashboardAction';

// Material Component
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

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
            open={this.props.dashboard.isSidebarOpen}
            onRequestChange={ this.props.closeSidebar }>
                <Menu>
                    <MenuItem primaryText="Product" leftIcon={<Pets />} />
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
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar);;