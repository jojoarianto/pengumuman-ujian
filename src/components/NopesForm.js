import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class NopesForm extends React.Component {
	// data nopes
	state = {
		nopes: '',
		age: '',
	    name: 'hai'
	}

	// handle change of nopes input
	handleChange = nopes => event => {
	    this.setState({
	      [nopes]: event.target.value,
	    });
	};

	// handle changet of select event
	handleChangeEvent = event => {
	    this.setState({ [event.target.name]: event.target.value });
	};

	// render nopes form component
	render() {
		return (
			<div>
				<InputLabel htmlFor="age-simple">Event Name</InputLabel>
				<Select
		            value={this.state.age}
		            onChange={this.handleChangeEvent}
		            inputProps={{
		              name: 'age',
		              id: 'age-simple',
		            }}
		            margin="normal"
		         >
		            <MenuItem value={10}>Ten</MenuItem>
		            <MenuItem value={20}>Twenty</MenuItem>
		            <MenuItem value={30}>Thirty</MenuItem>
		        </Select>
				<br/>
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