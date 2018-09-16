import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// import library material component
// install with "npm install @material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import component ./component
import NopesForm from "./components/NopesForm.js";

class App extends Component {

  render() {
    return (
      <div className="App">

          <AppBar position="static" color="primary" className="App-bar">
            <Toolbar variant="dense">
              <Typography variant="title" color="inherit">
              Sistem Pengumuman
              </Typography>
            </Toolbar>
          </AppBar>

          <br/> <br/> 
          <NopesForm/>

          <p className="footer-msg">Develope with love at <a href="https://olimpiade.id">Olimpiade.id</a></p>
      </div>
    );
  }
}

export default App;
