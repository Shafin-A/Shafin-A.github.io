import React from 'react';
import resumePDF from '../graphics/ShafinAhmedCV.pdf'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	container: {
		position: 'relative',
		overflow: 'hidden',
		paddingTop: '56.25%'
	},
	resume: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width: '100%',
		height: '100%'
	}
});


export class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	const { classes } = this.props; 

    return (
      <div className={classes.container}>
        <iframe
        	className={classes.resume}
            src={resumePDF}
        ></iframe>
      </div>
    );
  }
}


Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
