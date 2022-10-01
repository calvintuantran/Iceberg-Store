import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

//Styling
import { makeStyles } from "@mui/styles";

interface BannerProps {
  title: string;
  image: string;
  description: string;
}

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 500,
    maxHeight: 500,
    margin: "2rem",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    maxWidth: 360,
  },
  media: {
    height: "22rem",
  },
}));

export default function Banner(props: BannerProps) {
  const classes = useStyles();
  const { title, image, description } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          sx={{ height: "18rem", objectPosition: "top" }}
          className={classes.media}
          component="img"
          height="140"
          image={image}
          alt="post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
