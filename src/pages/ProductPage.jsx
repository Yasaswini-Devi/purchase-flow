import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Divider } from "@mui/material";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 1999,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3138c8f0-5929-48d7-8c58-9126f53d8463/NIKE+INTERACT+RUN+EASYON.png",
    description: "Comfortable running shoes for daily use.",
  },
  {
    id: 2,
    name: "Sneakers",
    price: 2499,
    image: "https://www.campusshoes.com/cdn/shop/files/HALL_22G-1187_WHT-L.PINK_1.jpg?v=1752676028",
    description: "Trendy sneakers for casual wear.",
  },
  {
    id: 3,
    name: "Formal Shoes",
    price: 2999,
    image: "https://www.actionlifestyle.com/cdn/shop/files/A3259_56_02_ee67bc3c-7531-4032-aff1-004c8406968b.jpg?v=1715932981",
    description: "Elegant formal shoes for office.",
  },
  {
    id: 4,
    name: "Sandals",
    price: 999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCq-4lJogqZGX-2h6YeXjmTX6MqN1QqBcJQ&s",
    description: "Lightweight sandals for summer.",
  },
  {
    id: 5,
    name: "Boots",
    price: 3499,
    image: "https://www.charleskeith.in/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-in-products/default/dwaf62382e/images/hi-res/2024-L6-CK1-91720017-01-1.jpg?sw=756&sh=1008",
    description: "Durable boots for outdoor activities.",
  },
  {
    id: 6,
    name: "Flip Flops",
    price: 499,
    image: "https://www.walkaroo.in/cdn/shop/files/01_8182da5e-de35-4c3f-a916-066cb9bbe98e.jpg?v=1740583644",
    description: "Easy flip flops for everyday comfort.",
  },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate("/payment", { state: { product } });
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Our Products
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
      >
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} onBuy={handleBuyNow} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;