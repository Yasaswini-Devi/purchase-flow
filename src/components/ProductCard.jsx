import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/payment", {
      state: {
        product: {
          name: product.name,
          price: product.price,
          image: product.image,
        },
      },
    });
  };

  const handleBuyClick = (e) => {
    e.stopPropagation(); 
    handleCardClick();  
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <Card
        sx={{
          width: "300px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center",
          boxShadow: 4,
          backgroundColor: "background.paper",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 8,
          },
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" noWrap>
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              mb: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              minHeight: "3rem",
            }}
          >
            {product.description}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            ₹{product.price}
          </Typography>
          <Button variant="contained" onClick={handleBuyClick}>
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;