import React, { useState } from "react";
import {
  TextField,
  Button,
  Alert,
  Stack,
} from "@mui/material";

const UserForm = ({ onContinue }) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const { name, age, mobile, email } = form;

    if (!name || !age || !mobile || !email) {
      setError("Please fill out all fields");
      return;
    }

    setError("");
    onContinue(form); 
  };

  return (
    <form onSubmit={handleContinue}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField name="name" label="Full Name" value={form.name} onChange={handleChange} fullWidth />
        <TextField name="age" label="Age" type="number" value={form.age} onChange={handleChange} fullWidth />
        <TextField name="mobile" label="Mobile" type="tel" value={form.mobile} onChange={handleChange} fullWidth />
        <TextField name="email" label="Email" type="email" value={form.email} onChange={handleChange} fullWidth />
        <Button type="submit" variant="contained">Continue</Button>
      </Stack>
    </form>
  );
};

export default UserForm;