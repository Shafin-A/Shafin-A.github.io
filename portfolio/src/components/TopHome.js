import React from 'react';
import MyAvatarPng from '../graphics/myAvatar.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	avatar: {
  		color: "black",
  		borderRadius: '50%',
  		height: '18em',
  		weight: '12em',
  		boxShadow: '0 0 8px 8px black inset'
  	},
  	paper: {
  	    padding: theme.spacing(6),
  	    color: 'white',
  	    backgroundColor: 'black',
  	    opacity: '0.25',
  	},

}));

export default function TopHome() {
	const classes = useStyles()

	return (
		<div>
			<br />
  			<img className={classes.avatar} src={MyAvatarPng} alt="Shafin Ahmed" />
  			<Grid container>
  				<Grid item xs={1}/>
  				<Grid item xs={10}>
  			        <Paper className={classes.paper}>
  			        	<h1 style={{fontSize: '3.5em'}}> SHAFIN AHMED </h1>
  			        	<hr/>
  			        	<h1> HTML/CSS | JavaScript | Java | Python | C | C# | OCaml | SQL </h1>
  			        </Paper>
  			    </Grid>
  			    <Grid item xs={1}/>
  			</Grid>
  		</div>
		);
	}

