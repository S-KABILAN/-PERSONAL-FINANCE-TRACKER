import axios from 'axios'

const API_BASE_URL = "http://localhost:5000/api/v1/auth";

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
}

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/login`, userData);
  localStorage.setItem("authToken", response.data.token);
  localStorage.setItem("userName", response.data.name); // Store the user’s name
  return response.data;
};
