import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class NopesForm extends React.Component {
	// data nopes
	state = {
		nopes: ''
	}

	// handle change of nopes input
	handleChange = nopes => event => {
	    this.setState({
	      [nopes]: event.target.value,
	    });
	};

	// render nopes form component
	render() {
		return (
			<div>
			<TextField
				id="nopes"
				label="Nomer Peserta"
				className="Nopes"
				value={this.state.nopes}
				onChange={this.handleChange('nopes')}
				margin="normal"
			/>
			<br/>
			<Button color="primary" variant="outlined" size="large">
				Cari Peserta
		    </Button>
			</div>
		)
	}
}

export default NopesForm;