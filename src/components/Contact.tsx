
//Components
import Footer from "./mainpage/Footer";

//Images
import illustration from "../images/undraw_online_test_re_kyfx.svg";

//Material Ui
import { Typography, Paper, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./styling/contact.css";

const useStyles = makeStyles({
  formText: {
    margin: "2rem 1.5rem 0",
    width: "85%",
  },
  marginText: {
    margin: "0 1.5rem",
    width: "93%",
  },
  buttonStyles: {
    margin: "1rem 1.5rem",
    width: "93%",
  },
});
const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className="title">
        Contact Us
      </Typography>
      <div className="underline" />
      <div className="contact_container">
        <div className="left_contact">
          <img src={illustration} alt="illustration" />
        </div>
        <div className="right_contact">
          <Paper elevation={5}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  required
                  className={classes.formText}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  required
                  className={classes.formText}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  required
                  className={classes.marginText}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  placeholder="Please Type Your Message Here...."
                  minRows={8}
                  className={classes.buttonStyles}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className={classes.marginText}
            >
              Send
            </Button>
          </Paper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
