import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { experience, experiences } from '../Helpers/experienceData';
import { certifications } from '../Helpers/educationData';

export default function Experience() {

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

  return (
   <div>
    <Box marginLeft={'150px'} marginRight={'150px'} marginBottom={'80px'} sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid xs={8}> 
        {/* //TODO: Figure out how to make the heights of these two containers match the tallest container */}
          <Item>
            <h1>Brittany Robinson</h1>
            <body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</body>
          </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
              {certifications.map((certification, index) => (
                <div key={index}>
                  <Typography variant="h6">{certification.title}</Typography>
                  <Typography variant="body2">{certification.company}</Typography>
                  <br />
                </div>
              ))}
            </Item>
        </Grid>
      </Grid>
    </Box>
    
    <Box marginLeft={'150px'} marginRight={'150px'} sx={{ flexGrow: 1 }} textAlign='left'>
      {experiences.map((experience, index) => 
      <Accordion key={index} defaultExpanded={index === 0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
         {experience.jobTitle} {" | "}  {experience.company} {" | "} {experience.startDate} {"–"} {experience.endDate} 
        </AccordionSummary>
        <AccordionDetails>
          <ul>
              {experience.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      )}
      </Box>
    </div>
  )
  }