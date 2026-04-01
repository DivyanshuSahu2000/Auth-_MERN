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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // 🧠 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "email" ? value.toLowerCase() : value;
    setForm({
      ...form,

      [name]: updatedValue,
    });
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setErrors({
        ...errors,
        email: emailRegex.test(updatedValue)
          ? ""
          : "Enter valid email (example@gmail.com)",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password:
          updatedValue.length < 8
            ? "Password must be at least8 characters"
            : "",
      });
    }
  };
  // 🧠 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
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
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
          },
        }}
      >
        <Typography variant="h4" mb={3} textAlign="center">
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            onChange={handleChange}
            sx={{
              textTransform: "lowercase",
              input: { color: "#fff" },
              label: { color: "#ddd" },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            margin="normal"
            required
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ddd" },
            }}
          />{" "}
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            autoComplete="password"
            required
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ddd" },
            }}
          />
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
            {loading ? "loading..." : "Register"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
