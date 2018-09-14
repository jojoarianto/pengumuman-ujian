import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// import library material component
// install with "npm install @material-ui/core"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    nopes: ''
  }

  // handle change of nopes input
  handleChange = nopes => event => {
    this.setState({
      [nopes]: event.target.value,
    });
  };

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

          <TextField
            id="nopes"
            label="Nomer Peserta"
            className="Nopes"
            value={this.state.nopes}
            onChange={this.handleChange('nopes')}
            margin="normal"
          />
          <Button variant="contained" color="primary" size="large">
            Lihat Hasil
          </Button>

          <p className="footer-msg">Develope with love at <a href="https://olimpiade.id">Olimpiade.id</a></p>
      </div>
    );
  }
}

export default App;
