import React from "react";

//Material UI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

interface FeaturedPostProps {
  title: string;
  award: string;
  description: string;
  image: string;
  imageDescription: string;
}
const FeaturedPosts = (props: FeaturedPostProps) => {
  return (
    <Grid item xs={3} md={6}>
      <CardActionArea href="/Products" sx={{ width: "80%", marginLeft: "4rem" }}>
        <Card sx={{ display: "flex", maxHeight: 300, minHeight: 300 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.award}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 200, display: { xs: "none", sm: "block" } }}
            image={props.image}
            alt={props.imageDescription}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedPosts;
