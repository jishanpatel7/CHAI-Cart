import React, { useState, useEffect } from "react";
import { memo } from "react";
import "./Product.css";
import { Box, Image } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { useSnackbar } from "notistack";
const Products = ({products, handleAddProduct}) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar(" Item added into Cart", {
      variant: "info",
    });
  };
 
  const handleSort = ([...products]) => {
    

  }

  return (
    <>
      <div className="navbar">
       <div className="sticky">
       <h1
          style={{
            color: "#bf8fef",
            marginBottom: "-20px",
          }}
        >
          Featured Products
        </h1>
        <p>{products.length} items listed</p>
       </div>

      </div>
      <div className="selectBar">
        <BiSortAlt2
          style={{
            cursor: "pointer",
            marginRight: "-30px",
          }}
        
        />
        <select>
          <option value="">Sort</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
        <span className="btn">
          <FiFilter />
          Filter
        </span>
      </div>

      <div className="container">
        {products.map((product) => (
          <Box
            key={product.id}
            className="products"
            maxW="sm"
            borderWidth={"1px"}
            borderRadius="lg"
            overflow={"hidden"}
          >
            <Image src={product.image} alt={product.name} />
            <div className="desc">
              <h4>
                {product.title.split(" ")[0]}
                <br />
                <small>{product.category}</small>
              </h4>
              <h5>${product.price}</h5>
            </div>
            <button className="btn2" onClick={() => {
              handleAddProduct(product);
            setTimeout(() => {
              handleClick();
            }, 1000);
            }}>
             Buy Now
            </button>
          </Box>
        ))}
      </div>
    </>
  );
};

export default memo(Products);
