import React from 'react';
import logo from './logo.svg';
import Main from './Components/Main';
import Resume from './Components/Resume';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    	<Switch>
    		<Route exact path = "/" component = {Main} />
    		<Route path = "/resume" component = {Resume} />
    	</Switch>
    </div>
  );
}

export default App;
