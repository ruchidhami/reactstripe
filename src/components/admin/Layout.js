import React, {Component} from 'react';

//Component
import Header from './Header';
import Sidebar from './Sidebar';

class Layout extends Component {

  render(){
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    )
  }

}

export default Layout;