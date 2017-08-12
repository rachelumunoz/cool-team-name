import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class TopAppBar extends React.Component {

  render() {
    return (
      <div>
        <AppBar
          title="WalMart"
          style={{ backgroundColor: {blue500} }}
        >
        </AppBar>
      </div>
    );
  }
}

export default TopAppBar;