//Material Ui
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";

interface CardProps {
  name: string;
  position: string;
  image: string;
  description: string;
}

const useStyles = makeStyles({
  cardContainer: {
    margin: "2rem 2.5rem 0",
    width: "22rem",
    height: "21rem",
    borderRadius: "15px",
    marginTop: "7rem",
  },
  text: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    bottom: "4.5rem",
    flexDirection: "column",
  },
});

const Card = (props: CardProps) => {
  const { name, position, image, description } = props;
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.cardContainer} elevation={8}>
        <CardMedia
          sx={{
            width: "19rem",
            position: "relative",
            bottom: "5rem",
            left: "1.5rem",
            borderRadius: "15px",
          }}
          component="img"
          height="250"
          image={image}
          alt="Staff Image"
        />
        <div className={classes.text}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h6" sx={{ color: "#3388ff", fontWeight: "500" }}>
            {position}
          </Typography>
          <Typography variant="body1" sx={{ margin: "0 1rem" }}>
            {description}
          </Typography>
        </div>
      </Paper>
    </Box>
  );
};

export default Card;
