import React, {Component} from 'react';

//Component
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    render(){
        return (
            <div>
                <Header handleDrawerOpen={ this.handleDrawerOpen } />
                <Sidebar open={this.state.open} handleDrawerClose={ this.handleDrawerClose } />
            </div>
        )
    }

    handleDrawerOpen = () => this.setState({open: true});
    handleDrawerClose = () => this.setState({open: false});
}

export default Dashboard;