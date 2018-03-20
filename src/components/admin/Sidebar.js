import React, {Component} from 'react';

// Material Component
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: props.open,
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
            open={this.state.open}
            onRequestChange={ this.state.handleDrawerClose }>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        )
    }
}

export default Sidebar;