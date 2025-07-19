import React from "react";
import { Stack, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const name = location.state?.name || "User";
  const product = location.state?.product;

  return (
    <Stack spacing={4} alignItems="center" mt={8}>
      <Typography variant="h4" gutterBottom>
        Payment Successful 🎉
      </Typography>

      <Typography variant="h6">
        Thank you, {name}!
      </Typography>

      {product && (
        <Card
          sx={{
            maxWidth: 300,
            boxShadow: 4,
            backgroundColor: "background.paper",
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={product.image}
            alt={product.name}
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              ₹{product.price}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Button variant="outlined" onClick={() => navigate("/")}>
        Go Back to Products
      </Button>
    </Stack>
  );
};

export default SuccessPage;