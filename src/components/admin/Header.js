import React, {Component} from 'react';

// Material Component
import AppBar from 'material-ui/AppBar';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            handleDrawerOpen: props.handleDrawerOpen 
        }
    }
    
    render() {
        return (
            <AppBar title="React Stripe App" onLeftIconButtonClick = { this.state.handleDrawerOpen } />
        )
    }
}

export default Header;