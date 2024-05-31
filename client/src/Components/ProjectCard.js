import React from 'react';
import { projects } from '../Helpers/projectData';
import { 
  Card, Container, CardActions, CardContent, CardMedia, 
  Button, Typography, 
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';

export default function ProjectCard() {
  return (
  <div>
    <Container>
      <Grid container spacing={3}>
        {projects.map((project) => 
        <Grid key={project.title} xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
          component="img"
          alt={project.altText}
          height="400"
          image={`${project.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          />
          <CardContent>
            <Typography component="div">
              {project.title}
            </Typography>
            <Typography variant="body2">
              {project.subtitle}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
            <a href={project.hyperlink} target="_blank" rel="noopener noreferrer">
              test
            </a>
            </Button>
         </CardActions>
        </Card> 
        </Grid>
      )}
      </Grid>
    </Container>
  </div> 

  );
}



