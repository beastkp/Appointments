import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";
import axios from "axios";

const Login = () => {
  const [loggeduser, setLoggeduser] = useState({ email: "", password: "" });
  const dispatch  = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {};
    // Performing login logic here
    if (loggeduser.email && loggeduser.password) {
      console.log("Logged in");
      data = {
        email: loggeduser.email,
        password: loggeduser.password,
      };
      console.log(data);
      try {
        dispatch(showLoading());
        const res = await axios.post(
          "http://localhost:8080/api/v1/users/login",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(hideLoading())
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
        } else {
          console.log("Doesnt Navigate");
        }
      } catch (error) {
        console.log(error);
        dispatch(hideLoading())
      }
    } else {
      console.log("Not logged in ");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Login Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded h-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={loggeduser.email}
              onChange={(e) => {
                setLoggeduser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded h-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={loggeduser.password}
              onChange={(e) => {
                setLoggeduser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
