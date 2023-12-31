import React, { useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";

const backgroundImage =
  "https://icrowdnewswire.com/wp-content/uploads/2020/12/re2.jpg";

const HomePage = () => {
  const getUserData = async ()=>{
    try {
       await axios.post('http://localhost:8080/api/v1/users/getUserData',{},{
        headers:{
          Authorization: "Bearer "+ localStorage.getItem("token"),
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserData();
  }, [])
  
  return (
    <>
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Welcome to HCare 
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Providing quality healthcare services with compassion and
              expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;
