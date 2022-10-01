import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

//Modal
import { ProductsProps } from "./helpers/Modal";

interface ShoppingCartProps {
  cartItem: ProductsProps;
}
export default function TemporaryDrawer(props: ShoppingCartProps) {
  return (
    <>
      <div className="cartItemContainer">
        <div>
          <Typography sx={{ fontWeight: "bold" }} className="cartItem_title">
            {props.cartItem.title}
          </Typography>
          <Typography>
            <span className="cartItem_price">Price:</span> $
            {props.cartItem.price}
          </Typography>
          <Typography variant="body1" >
            <span className="cartItem_price"> Amount: </span>{" "}
            {props.cartItem.amount}
          </Typography>
        </div>
        <img
          src={props.cartItem.image}
          alt="Cart Item"
          className="cartItem_image"
        />
      </div>
      <Divider variant="middle" />
    </>
  );
}
