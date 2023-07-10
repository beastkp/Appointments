import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { setUser } from "../redux/features/userSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  //getuserdata
  const getUser = async () => {
    try {
      dispatch(showLoading);
      const res = await axios.post(
        "http://localhost:8080/api/v1/users/getUserData",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading);

      if (res.data.success) dispatch(setUser(res.data.data));
      //first data property of res and second data is the data we are getting from getting from backend about the user, in USerctrl.js
      else {
        localStorage.clear();
        <Navigate to={"/login"} />;
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading);
      console.log(error);
    }
  };

    useEffect(()=>{
        getUser();
    },[]);
  //This is to ensure that no user can go to the home or any other page without authenticating.
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
