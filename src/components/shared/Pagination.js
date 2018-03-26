import React, { Component } from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Remove from 'material-ui/svg-icons/content/remove';

class Pagination extends Component {
  render () {
    return (
      <GridList cellHeight={55}>
        <GridTile></GridTile>
        <GridTile>
          <Paper zDepth={1}>
            <BottomNavigation>
              <BottomNavigationItem
                label="Previous"
                icon={<ChevronLeft />}
                onClick={ () => this.props.gotoPreviousPage() }
              />
              <BottomNavigationItem
                label="Active"
                icon={<Remove />}
              />
              <BottomNavigationItem
                label="Next"
                icon={<ChevronRight />}
                onClick={ () => this.props.gotoNextPage() }
              />
            </BottomNavigation>
          </Paper>
        </GridTile>
      </GridList>
    )
 }
}

export default Pagination;