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
      <Box
        mt={8}
        sx={{
          mt: 10,
          p: 4,
          borderRadius: 3,
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" mb={3} textAlign="center">
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
            sx={{
              input: { color: "#fff" },
              label: { color: "#ddd" },
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ddd" },
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            onChange={handleChange}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ddd" },
            }}
          />

          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              mt: 3,
              background: "#fff",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
