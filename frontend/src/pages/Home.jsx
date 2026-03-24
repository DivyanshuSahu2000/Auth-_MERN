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

// everything working fine but not looked good as my ui is looking so ugly want to make it beautiful as i can share it in my porfolio amern app let meprovide you my all code then we are gonna to make it looks good and unique

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

// import { Container, Typography, Box, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <Container>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         height="80vh"
//         gap={2}
//       >
//         <Typography variant="h3">Welcome 🚀</Typography>

//         {!token ? (
//           <>
//             <Button variant="contained" onClick={() => navigate("/register")}>
//               Register
//             </Button>

//             <Button variant="outlined" onClick={() => navigate("/login")}>
//               Login
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button variant="contained" onClick={() => navigate("/dashboard")}>
//               Go to Dashboard
//             </Button>

//             <Button variant="outlined" color="error" onClick={handleLogout}>
//               Logout
//             </Button>
//           </>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Home;

// import { useState } from "react";
// import { TextField, Button, Container, Typography, Box } from "@mui/material";
// import { registerUser } from "../services/AuthServices";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   // 🧠 State to store form data
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // 🧠 Handle input change
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // 🧠 Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = await registerUser(form);
//       // navigate("/login"); // redirect to login
//       localStorage.setItem("token", data.token);
//       alert("Registered && Logged In successfully ✅");
//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/dashboard");
//       /////
//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.message || "Register failed");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={8}>
//         <Typography variant="h4" mb={3}>
//           Register
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <TextField
//             fullWidth
//             label="Name"
//             name="name"
//             margin="normal"
//             onChange={handleChange}
//           />

//           {/* Email */}
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             margin="normal"
//             onChange={handleChange}
//           />

//           {/* Password */}
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             name="password"
//             margin="normal"
//             onChange={handleChange}
//           />

//           {/* Button */}
//           <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
//             Register
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Register;

// import { useState } from "react";
// import { TextField, Button, Container, Typography, Box } from "@mui/material";
// import { loginUser } from "../services/AuthServices";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = await loginUser(form);

//       localStorage.setItem("token", data.token);

//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/dashboard");
//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={8}>
//         <Typography variant="h4" mb={3}>
//           Login
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             margin="normal"
//             onChange={handleChange}
//           />

//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             name="password"
//             margin="normal"
//             onChange={handleChange}
//           />

//           <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
//             Login
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;

// import { useEffect, useState } from "react";
// import { getProfile } from "../services/AuthServices";
// import { useNavigate } from "react-router-dom";
// import { Container, Typography, Button, Box } from "@mui/material";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");

//       // if (!token) {
//       //   navigate("/login");
//       //   return;
//       // }

//       try {
//         const data = await getProfile(token);
//         setUser(data);
//       } catch (error) {
//         console.log(error);
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//     localStorage.removeItem("user");
//   };

//   return (
//     <Container>
//       <Box mt={5}>
//         <Typography variant="h4">Dashboard</Typography>

//         {user && (
//           <>
//             <Typography mt={2}>Name: {user.name}</Typography>
//             <Typography>Email: {user.email}</Typography>
//           </>
//         )}

//         <Button
//           variant="contained"
//           color="error"
//           sx={{ mt: 3 }}
//           onClick={handleLogout}
//         >
//           Logout
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Dashboard;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";
// import { Outlet } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

// export default App;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Dashboard from "./pages/Dashboard.jsx";
// import Register from "./pages/Register.jsx";
// import Login from "./pages/Login.jsx";
// import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
// import PublicRoute from "./components/PublicRoute.jsx";
// import Home from "./pages/Home.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: (
//           <PublicRoute>
//             <Login />
//           </PublicRoute>
//         ),
//       },
//       {
//         path: "/register",
//         element: (
//           <PublicRoute>
//             <Register />
//           </PublicRoute>
//         ),
//       },
//       {
//         path: "/dashboard",
//         element: (
//           <ProtectedRoutes>
//             <Dashboard />
//           </ProtectedRoutes>
//         ),
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
