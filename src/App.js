import './App.css';
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import NavBar from './components/NavBar'
import SmallLogo from './components/SmallLogo'
import BigLogo from './components/BigLogo'

function App() {
  return (
    <Router>
      <div style={mainStyle}>
        <NavBar />
        <div style={centerContainer}>
          <div style={{color: "white", marginBottom: "20px"}}>
            Still in Development.
          </div>
          <BigLogo />
        </div>
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
  overflowY: 'hidden',
  backgroundColor: 'rgb(0,0,20)',
}

export default App;
