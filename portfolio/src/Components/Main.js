import React from 'react';
import NavBar from './NavBar';
import TopHome from './TopHome'

export class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
      	<NavBar />
        <TopHome />
      </React.Fragment>
    );
  }
}

export default Main;
