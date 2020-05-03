import React, { Component } from 'react';
import './static/styles/imports.scss'

import Header from './containers/Header';
import Welcome from './containers/Welcome';
import ProfileList from './containers/ProfileList';

class App extends Component{
  render(){
    return(
      <>
        <Header />
        <div className="main-row grow-1">
          <Welcome />
          <ProfileList />
        </div>
      </>
    )
  }
}

export default App;
