import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import UserForm from "../components/UserForm";
import CardDetails from "../components/CardDetails";

const PaymentPage = () => {
  const [step, setStep] = useState(1); 
  const [userData, setUserData] = useState(null);

  const theme = useTheme();
  const location = useLocation();
  const product = location.state?.product;

  const handleContinue = (formData) => {
    setUserData(formData);
    setStep(2);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "2rem auto",
        padding: "1rem",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <CardContent>
        {product && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Avatar variant="square" src={product.image} alt={product.name} sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="text.secondary">₹{product.price}</Typography>
            </Box>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          {step === 1 ? "Enter Your Details" : "Enter Card Details"}
        </Typography>

        {step === 1 ? (
          <UserForm onContinue={handleContinue} />
        ) : (
          <CardDetails user={userData} product={product} />
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentPage;