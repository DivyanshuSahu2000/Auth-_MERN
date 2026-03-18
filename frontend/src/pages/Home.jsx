import { Box, Container, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// const navigate=useNavigate()
const Home = () => {
  return (
    <div>
      <Container>
        <Typography variant="h1" active="red">
          Home
        </Typography>
        <Typography variant="h3" active="red">
          <Link to="/register">Register</Link>
        </Typography>
        <Typography variant="h3">
          <Link to="/login">Login</Link>
        </Typography>
        <Typography variant="h3">
          <Link to="/dashboard">Dashboard</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
