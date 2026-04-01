import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import CreateIcon from "@mui/icons-material/Create";
const Home = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

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
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap={1}
          sx={{ textTransform: "capitalize" }}
        >
          <Typography variant="h5" fontWeight="bold" color="white">
            Welcome
          </Typography>
          {token && (
            <Typography variant="h4" fontWeight="bold" color="white">
              {user.name}
            </Typography>
          )}
        </Box>
        {!token ? (
          <>
            <Button
              variant="contained"
              endIcon={<CreateIcon />}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>

            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </Button>

            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
