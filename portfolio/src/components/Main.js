import React from 'react';
import NavBar from './NavBar';
import TopHome from './TopHome';
import Projects from './Projects';
import Contact from './Contact'

export class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
      	<NavBar />
        <TopHome />
        <Projects />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Main;
