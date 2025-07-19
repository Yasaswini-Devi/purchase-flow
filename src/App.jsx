import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";
import { ThemeProvider } from "./ThemeContext";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;