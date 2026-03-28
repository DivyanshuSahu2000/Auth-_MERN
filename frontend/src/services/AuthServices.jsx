import axios from "axios";
// const API = "http://localhost:5000/api/auth";
const API = import.meta.env.API;
export const registerUser = async (data) => {
  const response = await axios.post(`${API}/api/auth/register`, data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post(`${API}/api/auth/login`, data);
  return response.data;
};

// export const getProfile = async (token) => {
//   const response = await axios.get(`${API}/profile`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

export const getProfile = async (token) => {
  const response = await axios.get(`${API}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
