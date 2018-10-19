import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import Header from "./components/Header.js";
import Signin from "./components/Signin.js";
import NopesForm from "./components/NopesForm.js";

class App extends Component {
	render() {
	    return (
	    	<div className="App">
	    		<CssBaseline />
	        	<Header/>
	    	</div>
	    );
	}
}

export default App;
