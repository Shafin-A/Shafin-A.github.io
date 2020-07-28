import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ProjectCard from './ProjectCard'
import flashpointpng from '../graphics/flashpoint.png';
import TwoSpheresPlaneReflection from '../graphics/TwoSpheresPlaneReflection.png';
import LWR_title_screen from '../graphics/LWR_title_screen.png';
import mcgill from '../graphics/mcgill.png';
import CGOS from '../graphics/CGOS.png';
import compiler from '../graphics/compiler.png';

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: '8rem',
    },
}));

export default function Projects() {
	const classes = useStyles()

	return (
		<Container className={classes.container}>
            <Typography variant="h2" >
                <Box fontWeight="fontWeightBold" >
                    PROJECTS
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
                    <ProjectCard 
                        title='Flashpoint: Fire Rescue'
                        image={flashpointpng}
                        description='Co-op/online multiplayer board game where you must play together as firefighters trying to rescue victims from a burning house.'
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <ProjectCard 
                        title='Ray Tracer'
                        image={TwoSpheresPlaneReflection}
                        description='A 3D ray tracer that renders scenes from XML file inputs. 
                        Can render many different shapes including unique ones such as metaballs and quadric surfaces.'
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <ProjectCard 
                        title='Lost With Robot'
                        image={LWR_title_screen}
                        description="A 2D local cooperative puzzle game.
                        Help a child find and repair their robot's parts by solving puzzles and getting to the rocket ship at the end of each level."
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <ProjectCard 
                        title='McGill Course Visualizer'
                        image={mcgill}
                        description='A small script to display a graphical visualization of how all courses at a given program at McGill University are related.'
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <ProjectCard 
                        title='GoLite Compiler'
                        image={compiler}
                        description='A compiler for a significant subset of the Go programming language that generates equivalent executable Java code from the GoLite input.'
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <ProjectCard 
                        title='Cruise Grocery Ordering System (CGOS)'
                        image={CGOS}
                        description='An application for managing a Cruise Grocery Ordering System (CGOS) database.'
                    />
                </Grid>               
            </Grid>
  	    </Container>
	);
}

