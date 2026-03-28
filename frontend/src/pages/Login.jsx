import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { loginUser } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const data = await loginUser(form);

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
      // loading(!loading);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false); // 🔥 stop loading
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        mt={8}
        sx={{
          mt: 10,
          p: 5,
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.08)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          color: "#fff",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
        // sx={{
        //   mt: 10,
        //   p: 4,
        //   borderRadius: 3,
        //   backdropFilter: "blur(15px)",
        //   background: "rgba(255,255,255,0.1)",
        //   boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        //   color: "#fff",
        // }}
      >
        <Typography variant="h4" mb={3} textAlign="center">
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#aaa",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            onChange={handleChange}
            // sx={{
            //   input: { color: "#fff" },
            //   label: { color: "#ddd" },
            // }}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#aaa",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            // disabled={loading}
            // sx={{
            //   mt: 3,
            //   background: "#fff",
            //   color: "#333",
            //   fontWeight: "bold",
            // }}
            sx={{
              mt: 3,
              py: 1.2,
              borderRadius: "10px",
              background: "linear-gradient(45deg, #6a11cb, #2575fc)",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            {loading ? "loading..." : "Login"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
