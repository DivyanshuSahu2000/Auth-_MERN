import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        gap={2}
      >
        <Typography variant="h3">Welcome 🚀</Typography>

        {!token ? (
          <>
            <Button variant="contained" onClick={() => navigate("/register")}>
              Register
            </Button>

            <Button variant="outlined" onClick={() => navigate("/login")}>
              Login
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </Button>

            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
