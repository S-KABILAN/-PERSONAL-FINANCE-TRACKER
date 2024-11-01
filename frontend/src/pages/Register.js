// frontend/src/pages/Register.js
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null)
      setSuccessMessage(null)

      try {
        const result = await registerUser(formData)
        setSuccessMessage(result.message || "Registration successfull");
        //setFormData({name:"", email:"", password:""});
        navigate("/login");

      } catch (error) {
        setError(error.message)
      }
  }

  console.log(formData)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        {successMessage && (
          <p className="text-sm text-green-500 text-center">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" text="Register"/>
        </form>
      </div>
    </div>
  );
};

export default Register;
