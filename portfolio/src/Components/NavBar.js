import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import NavDrawer from './NavDrawer';
import MyAvatarPng from '../graphics/myAvatar.png';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundImage: "linear-gradient(to right, #304352, #000000)"
  }
});

export class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false
    };
  }

  toggleDrawer = booleanValue => () => {
   this.setState({
     drawerOpened: booleanValue
   });
  };

  render() {
    const { classes } = this.props; 
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar className={classes.appbar} position='sticky'>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer(true)}> 
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit" >
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Avatar alt="Shafin Ahmed" src={MyAvatarPng} />
              </Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Box fontWeight="fontWeightBold" m={1}>
                Shafin Ahmed
              </Box>
            </Typography>
          </Toolbar>
        </AppBar>
        <NavDrawer
          drawerOpened={this.state.drawerOpened}
          toggleDrawer={this.toggleDrawer}
        />
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
