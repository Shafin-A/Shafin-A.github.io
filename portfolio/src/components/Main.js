import React from 'react';
import NavBar from './NavBar';
import TopHome from './TopHome';
import Projects from './Projects';

export class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
      	<NavBar />
        <TopHome />
        <Projects />
      </React.Fragment>
    );
  }
}

export default Main;
