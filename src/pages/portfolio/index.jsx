import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { projects } from '../../data/data';
import { useStyles } from './styles/portfolio';

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Portfolio
      </Typography>
      <Grid container justify="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={project.id}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.projectName}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.projectDescription}
                >
                  {project.description}
                </Typography>
                {project.tools.map((tool) => (
                  <Chip
                    size="small"
                    label={tool}
                    key={tool}
                    color="secondary"
                    className={classes.chip}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
