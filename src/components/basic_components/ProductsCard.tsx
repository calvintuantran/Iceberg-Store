import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


//React Router
import { Link } from "react-router-dom";

// Model
import { ProductsProps } from "../helpers/Modal";

export default function ImgMediaCard(props: ProductsProps) {
  const { id, title, description, price, image } = props;
  return (
    <Link to={`/Products/${id}`} className="link_NoDecoration">
      <Card
        sx={{
          maxWidth: 480,
          minHeight: 450,
          maxHeight: 450,
          marginLeft: ".90rem",
          borderRadius: "5%",
          marginTop: "2rem",
        }}
        elevation={8}
      >
        <CardMedia
          component="img"
          alt="Product Card"
          height="260"
          image={image}
          sx={{ objectPosition: "top" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.substring(0, 36)}
          </Typography>
          <Typography gutterBottom variant="h5" color={"#3388FF"}>
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${description.substring(0, 185)}...`}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
