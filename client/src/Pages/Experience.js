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

export default function Experience() {

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

  return (
   <div>
    <Box marginLeft={'150px'} marginRight={'150px'} marginBottom={'100px'} sx={{ flexGrow: 1 }} >
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
        <Grid xs={4}>
          <Item>
            <Typography variant='h6'>
            Degree
            </Typography>
            <Typography>
            University Name
            LaunchCode
            </Typography>
            <br></br>
            <Typography variant='h6'>
            Web Development 
            </Typography>
            <Typography>
            LaunchCode
            </Typography>
            <br></br>
            <Typography variant='h6'>
            Certification
            </Typography>
            <Typography>
            Name of Organization
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    
    <Box marginLeft={'150px'} marginRight={'150px'} sx={{ flexGrow: 1 }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Postion | Company Name
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Postion | Company Name
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Postion | Company Name
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </Box>
    </div>
  )
  }