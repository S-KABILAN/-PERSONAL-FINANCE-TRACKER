import axios from 'axios'

const API_BASE_URL = "http://localhost:5000/api/v1";

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
}

export const loginUser = async (userData) =>{
    try {
        const response = await axios.post(`${API_BASE_URL}/login`,userData);
        return response.data
    } catch (error) {
        throw new Error(
          error.response?.data?.message || "Login failed. Please try again."
        );
                
    }
}
