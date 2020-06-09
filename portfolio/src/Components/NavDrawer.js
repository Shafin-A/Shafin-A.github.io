import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CodeIcon from '@material-ui/icons/Code';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'

const styles = theme => ({
  navdrawer: {
    backgroundImage: "linear-gradient(to bottom, #304352, #000000)",
  }
});

export class NavDrawer extends React.Component {
  render() {
    const { classes } = this.props; 

    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
        classes={{ paper: classes.navdrawer }}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <List style={{width: '20em', color: 'white'}}>
            <ListItem button key="Home">
              <ListItemIcon style={{color: 'white'}}><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="Resume" component={Link} to="/resume" target="_blank">
              <ListItemIcon style={{color: 'white'}}><ReceiptIcon /></ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItem>
            <ListItem button key="Projects">
              <ListItemIcon style={{color: 'white'}}><CodeIcon /></ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button key="Contact">
              <ListItemIcon style={{color: 'white'}}><ContactMailIcon /></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);