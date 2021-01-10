import './App.css';
import React from "react";
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar'
import BigLogo from './components/BigLogo'
import DropdownButton from './components/DropdownButton'

function App() {
  return (
    <Router>
      <div style={mainStyle}>
        <NavBar />
        <Switch>
          <Route path="/about">
            <div>
              About.
            </div>
          </Route>
          <Route path="/resume">
            <div>
              Resume.
            </div>
          </Route>
          <Route path="/">
            <div style={centerContainer}>
              <div style={{color: "white", marginBottom: "20px"}}>
                Still in Development.
              </div>
              <BigLogo />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const centerContainer = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
}

const mainStyle = {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  paddingTop: '80px',
  
  backgroundColor: 'rgb(0,0,20)',
}

export default App;
