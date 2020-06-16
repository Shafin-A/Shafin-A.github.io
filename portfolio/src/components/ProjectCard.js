import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export class ProjectCard extends React.Component {
	constructor(props) {
	  	super(props);
	}

	render() {
		return (
			<Card style={{ height: '100%' }}>
			    <CardActionArea style={{ height: '100%' }}>
			        <CardMedia
			            component="img"
			            alt="Contemplative Reptile"
			            height="150"
			            image={this.props.image}
			            title={this.props.title}
			        />
			        <CardContent style={{height: '100%', backgroundColor: 'black', opacity: '0.45', color:'white'}}>
			            <Typography gutterBottom variant="h5" component="h2" align="left">
			                {this.props.title}
			            </Typography>
			            <Typography variant="body2" component="p" align="left" style={{color: 'lightgrey'}}>
			                {this.props.description}
			            </Typography>
			        </CardContent>
			    </CardActionArea>
			</Card>
		)
	}
}

export default ProjectCard