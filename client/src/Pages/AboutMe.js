import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../Components/Header';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function aboutMe(){

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

return(
<>

<Header></Header>

<Box height={400} width={200} my={4} display="flex" alignItems="center" gap={4} p={2} sx={{ border: '2pxsolid grey'}}>
    <Item>
    You might be surprised to learn that the Writing Robin is not in fact a bird at all- but a woman.

For the past 10 years I’ve been writing, learning, and working in the education field. While I have loved fostering the young minds of America’s youth, I also have a deep yearning for learning myself. I never thought that I would be capable of learning to code or understanding the nuances of software development- which made it that much more of a challenge.

Hi, I’m Brittany Robinson- and I love a challenge.

In 2023 I started a coding bootcamp through a St. Louis non-profit; LaunchCode. The extent of my software knowledge at the time began and ended with opening the task manager. I became an English teacher because I love creating worlds from words. Soon, I realized that you can do the same thing with code. JavaScript taught me to create forms and designs with syntax. Who knew I could control a computer with words and symbols? Through LaunchCode I learned how to leverage not only JavaScript, but also Java as well as frameworks such as React and Spring Boot to create full-stack applications.

Since graduating from the Web Development Bootcamp in February of 2024, I have been working on personal projects and learning all that I can. Sometimes it is hard to balance a demanding career like teaching while also being a mom and being on the job hunt, but my passion for learning keeps me focused.

Check out the other pages on this site to see some of my references, recent projects, and what I’ve been learning. Happy Writing!
    </Item>
Y

</Box>
<div name="aboutMePicture">
// ToDo: Take a professional picture.
<img src="https://www.facebook.com/photo.php?fbid=2292729607453557&set=pb.100001496198284.-2207520000&type=3" alt= "Brittany Robinson 2024"/>
</div>
</>
)
};