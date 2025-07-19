import React from "react";
import { Button, Typography, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const FailurePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const handleTryAgain = () => {
    if (product) {
      navigate("/payment", { state: { product } });
    } else {
      navigate("/"); 
    }
  };

  return (
    <Stack spacing={2} alignItems="center" mt={8}>
      <Typography variant="h4" color="error">
        Payment Failed 😔
      </Typography>
      <Typography>
        Something went wrong. Please try again.
      </Typography>
      <Button variant="contained" color="error" onClick={handleTryAgain}>
        Try Again
      </Button>
    </Stack>
  );
};

export default FailurePage;