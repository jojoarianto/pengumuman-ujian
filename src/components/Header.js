import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
	render () {
		return (
			<AppBar position="static" color="primary" className="App-bar">
	            <Toolbar variant="dense">
	            	<Typography variant="title" color="inherit">
	            	Sistem Pengumuman
	            	</Typography>
	            </Toolbar>
	        </AppBar>
		);
	}
}

export default Header;