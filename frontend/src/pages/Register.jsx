import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { registerUser } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // 🧠 State to store form data
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🧠 Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🧠 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(form);
      // navigate("/login"); // redirect to login
      localStorage.setItem("token", data.token);
      alert("Registered && Logged In successfully ✅");
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
      /////
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Register failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" mb={3}>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            onChange={handleChange}
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            onChange={handleChange}
          />

          {/* Button */}
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
