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
      <Box mt={5}>
        <Typography variant="h4">Dashboard</Typography>

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
      </Box>
    </Container>
  );
};

export default Dashboard;
