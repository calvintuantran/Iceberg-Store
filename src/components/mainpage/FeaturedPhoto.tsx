
//Material UI
import { Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const FeaturedPhoto = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 42%",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        backgroundImage: `url(https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?cs=srgb&dl=pexels-pixabay-86405.jpg&fm=jpg)`,
        m: "2rem",
        borderRadius: "25px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
          borderRadius: "25px",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{ mb: "2rem" }}
            >
              Welcome to the IceBerg Store!
            </Typography>
            <Typography variant="h5" color="inherit">
              Find the latest and greatest merchandise. So coool that everyone
              wants it!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FeaturedPhoto;
