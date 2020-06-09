import React from 'react';
import NavBar from './NavBar';

export class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      	<NavBar />
      </React.Fragment>
    );
  }
}

export default Main;
