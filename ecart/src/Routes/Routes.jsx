import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../components/Products/Products";
import Checkout from "../components/Checkout/Checkout";
const Routers = ({
  products,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={products}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Routers;
