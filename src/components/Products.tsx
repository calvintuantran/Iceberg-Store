import React, { useState } from "react";

//Components
import Footer from "./mainpage/Footer";
import ProductsCard from "./basic_components/ProductsCard";
import Loading from "./basic_components/Loading";

//Material Ui
import { Grid, Typography, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";

//Styling
import "./styling/products.css";

//React Query
import { useProducts } from "../reactquery/useProducts";
import { useIsFetching } from "@tanstack/react-query";

const Products = () => {
  const [searchItem, setSearchItem] = useState<string>("");

  const products = useProducts();
  const isFetching: Boolean = Boolean(useIsFetching());

  const searchingProducts = products.filter((item) => {
    if (!searchItem) {
      return item;
    } else if (item.title.toLowerCase().includes(searchItem.toLowerCase())) {
      return item;
    }
  });

  const showEmptyProductsList = Boolean(searchingProducts.length === 0);

  return (
    <>
      <Typography variant="h3" className="title">
        Products
      </Typography>
      <div className="underline" />
      <Paper component="form" className="searchContainer" elevation={4}>
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for your Favorite Products!"
          inputProps={{ "aria-label": "Search for your Favorite Products!" }}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </Paper>
      {isFetching ? (
        <Loading />
      ) : (
        <Grid container>
          {showEmptyProductsList ? (
            <Typography className="searchContainer" variant="h4">
              There are No Available Products at this time. Please Search for
              Something Else.
            </Typography>
          ) : (
            searchingProducts.map((item) => (
              <Grid item md={4}>
                <ProductsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </Grid>
            ))
          )}
        </Grid>
      )}

      <Footer />
    </>
  );
};

export default Products;
