import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Grid from "@mui/material//Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { Card, CardContent } from "@mui/material";

// npm i @emailjs/browser

const ContactMeTest = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y3ggfaq",
        "template_uvbdgts",
        form.current,
        "jvHvIgUXB7KwR7E65"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          //TODO: add success message for end user to front end
        },
        (error) => {
          console.log(error.text);
        }
      );
//reset form after submission
      document.getElementById('contact-form').reset();
      e.preventDefault();
  }

  return (
    <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
            Want to get in touch?
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill out the form below and I'll respond within 2-3 business days.
          </Typography> 
            <form
            id="contact-form"
            ref={form} 
            onSubmit={sendEmail}
            >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" name="firstName" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" name="lastName" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" name="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField label="Message" name="message" multiline minRows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
  );
}

export default ContactMeTest;
