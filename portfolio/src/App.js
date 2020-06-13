import React from 'react';
import Main from './Components/Main';
import { Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
    	<Switch>
    		<Route exact path = "/" component = {Main} />
    	</Switch>
    </div>
  );
}

export default App;
