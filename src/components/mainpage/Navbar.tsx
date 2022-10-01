import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

// https://mui.com/material-ui/react-badge/
// Shopping Cart Icon
import ShopCartIcon from "../basic_components/ShopCartIcon";

//React Router
import { Link } from "react-router-dom";

//Components
import ShoppingDrawer from "../Drawer";
import "../styling/drawer.css";

// Model Types
import { ProductsProps } from "../helpers/Modal";

const pages = ["Products", "Staff", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface NavBarProps {
  window?: () => Window;
  children: React.ReactElement;
}

interface ShoppingCartProps {
  selectedProduct: ProductsProps[];
}

const ResponsiveAppBar = (props: ShoppingCartProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const calculateTotalPrice = (cartItems: ProductsProps[]) => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].price * cartItems[i].amount!;
    }
    return sum;
  };

  const calculateTotalAmount = (cartItems: ProductsProps[]) => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].amount!;
    }
    return sum;
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function HideOnScroll(props: NavBarProps) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  let countCartItem = calculateTotalAmount(props.selectedProduct);
  const isCartEmpty = countCartItem === 0;
  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky">
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Typography variant="h5" className="drawerTitle">
              Your Shopping Cart
            </Typography>
            <div className="underline" />

            {isCartEmpty && (
              <Typography variant="h6" className="noItems">
                No Items in Cart
              </Typography>
            )}
            {props.selectedProduct.map((cartItem: ProductsProps) => {
              return <ShoppingDrawer cartItem={cartItem} />;
            })}
            {!isCartEmpty && (
              <Typography variant="h5" sx={{ margin: "1rem" }}>
                <span style={{ fontWeight: 600 }}>Total Price: </span>$
                {calculateTotalPrice(props.selectedProduct).toFixed(2)}
              </Typography>
            )}
          </Drawer>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <LocalGroceryStoreIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Link
                to="/Mainpage"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  IceBerg Store
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" fontFamily="sans-serif">
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Link
                to="/Mainpage"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontfamily: "",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  IceBerg Store
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    to={`/${page}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button onClick={() => setCartOpen(true)}>
                  <ShopCartIcon countCartItem={countCartItem} />
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default ResponsiveAppBar;
