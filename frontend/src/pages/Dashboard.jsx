import { useEffect, useState } from "react";
import { getProfile } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      // if (!token) {
      //   navigate("/login");
      //   return;
      // }

      try {
        const data = await getProfile(token);
        setUser(data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    localStorage.removeItem("user");
  };

  return (
    <Container>
      <Box
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 3,
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          color: "#fff",
        }}
      >
        <Typography variant="h4">Welcome 👋</Typography>

        {user && (
          <>
            <Typography mt={2}>Name: {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
          </>
        )}

        <Button
          variant="contained"
          color="error"
          sx={{ mt: 3 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>{" "}
    </Container>
  );
};

export default Dashboard;
