import { useParams } from "react-router-dom";

//Components
import Footer from "./mainpage/Footer";
import SizeDropdown from "./basic_components/sizeDropdown";
import { useSingleProducts } from "../reactquery/useProducts";

//Material UI
import { Typography, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./styling/singleProduct.css";

//Modal
import { ProductsProps } from "./helpers/Modal";

interface SingleProductProps {
  addCartItems: (cartItem: ProductsProps) => void;
}

const SingleProduct = (props: SingleProductProps) => {
  const { id: productId } = useParams(); // useParams returns an object of key value pairs
  const singleProduct = useSingleProducts(productId!);

  const showClothingSizes = singleProduct.category?.includes("clothing");
  return (
    <>
      <div className="Product_container">
        <div className="LeftProductContainer">
          <Paper className="imageProductContainer" elevation={4}>
            <img
              src={singleProduct?.image}
              alt="product "
              className="imageProduct"
            />
          </Paper>
        </div>
        <div className="RightProductContainer">
          <div>
            <Typography variant="h4" className="title productTitleContainer">
              {singleProduct?.title}
            </Typography>
            <div className="underline" />
            <Typography
              variant="h5"
              color={"#3388FF"}
              sx={{ margin: "1rem 0" }}
            >
              ${singleProduct?.price}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {singleProduct?.description}
            </Typography>
            {showClothingSizes && <SizeDropdown />}
            <Button
              variant="contained"
              onClick={() => {
                props.addCartItems(singleProduct);
              }}
              fullWidth
              sx={{ margin: "1rem 0" }}
            >
              <AddShoppingCartIcon sx={{ padding: " 0 5px" }} /> Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
