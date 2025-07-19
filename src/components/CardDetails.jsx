import React from "react";
import {
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const CardDetails = ({ user, product }) => {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
    navigate("/success", {
        state: {
        name: user.name,
        product: {
            name: product.name,
            price: product.price,
            image: product.image,
        },
        },
    });
    } else {
    navigate("/failure", {
        state: {
        name: user.name,
        product: {
            name: product.name,
            price: product.price,
            image: product.image,
        },
        },
    });
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <Stack spacing={2}>
        <TextField label="Card Number" fullWidth />
        <TextField label="Expiry Date" placeholder="MM/YY" fullWidth />
        <TextField label="CVV" type="password" fullWidth />
        <Button type="submit" variant="contained" color="success">
          Pay ₹{product?.price || "—"}
        </Button>
      </Stack>
    </form>
  );
};

export default CardDetails;