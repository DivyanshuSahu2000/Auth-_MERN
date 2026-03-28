// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         {/* Left */}
//         <Typography
//           variant="h6"
//           sx={{ flexGrow: 1 }}
//           style={{ textDecoration: "none", color: "inherit" }}
//         >
//           <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
//             MyApp 🚀
//           </Link>
//         </Typography>

//         {/* Right */}
//         {!token ? (
//           <>
//             <Button color="inherit" onClick={() => navigate("/login")}>
//               Login
//             </Button>
//             <Button color="inherit" onClick={() => navigate("/register")}>
//               Register
//             </Button>
//           </>
//         ) : (
//           <>
//             <Typography sx={{ mx: 2 }}>{user?.name}</Typography>
//             <Button color="inherit" onClick={handleLogout}>
//               Logout
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}
        >
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            AuthFlow{" "}
          </Link>
        </Typography>
        {/* Right */}
        {!token ? (
          <>
            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff", mr: 2 }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ background: "#fff", color: "#333" }}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </>
        ) : (
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={0.5}
            >
              <AccountCircleIcon fontSize="small" />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                {" "}
                {user?.name}
              </Typography>
            </Box>

            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
