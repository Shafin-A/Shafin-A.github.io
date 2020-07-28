import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Container from '@material-ui/core/Container';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    wrapIcon: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    iconSize: {
        fontSize: 65,
        padding: 10
    },
    container: {
        marginBottom: '8rem',
    },

}));

export default function Contact() {
	const classes = useStyles()

	return (
		<Container className={classes.container}>
          	<Typography variant="h2" >
                <Box fontWeight="fontWeightBold" >
                    CONTACT
                    <hr />
                </Box>
            </Typography>
            <Grid 
                container
                direction="row"
                alignItems="stretch"
                spacing={2}
            >
                <Grid item xs={12} sm={4} >
                    <Typography variant="h5" className={classes.wrapIcon}>
                        <EmailIcon className={classes.iconSize} /> kazishafin@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Typography variant="h5" className={classes.wrapIcon}>
                        <EmailIcon className={classes.iconSize} /> kazi.s.ahmed@mail.mcgill.ca
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Typography variant="h5" className={classes.wrapIcon}>
                        <PhoneIcon className={classes.iconSize} /> +1 (514) 238-9348
                    </Typography>
                </Grid>
            </Grid>
        </Container>
	);
}

