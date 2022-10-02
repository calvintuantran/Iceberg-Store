import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Mainpage from "./components/Mainpage";
import Products from "./components/Products";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/mainpage/Navbar";

// Modal
import { ProductsProps } from "./components/helpers/Modal";

// Unique them
export function RoutesStore() {
  const [selectedProduct, setSelectedProduct] = useState<ProductsProps[]>([]);

  const addCartItems = (cartItem: ProductsProps) => {
    setSelectedProduct((prev) => {
      // Cart Items that are Unique and Increase Amount
      const isItemInCart = prev.find((item) => item.id === cartItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === cartItem.id ? { ...item, amount: item.amount! + 1 } : item
        );
      }

      return [...prev, { ...cartItem, amount: 1 }];
    });
  };

  return (
    <>
      <Navbar selectedProduct={selectedProduct} />
      <Routes>
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Products" element={<Products />} />
        <Route
          path="/Products/:id"
          element={<SingleProduct addCartItems={addCartItems} />}
        />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Mainpage />} />
        {/* error page handling */}
      </Routes>
    </>
  );
}
