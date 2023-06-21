import React from "react";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-300 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl text-white font-bold">
            Healthcare Excellence, Every Step of the Way
          </h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://media.istockphoto.com/photos/indian-doctor-picture-id515908499?k=6&m=515908499&s=612x612&w=0&h=GUqHCU01_oCwIu0VI9rtxsMZUnEAOQ4-Rck35Gw_5RI="
              alt="Doctor 1"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Dr. Tushar Sharma </h2>
            <p className="text-gray-600">Specialty: Cardiology</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://th.bing.com/th/id/OIP.2RfokoXT5HRzD-7nEi-dwwHaFA?pid=ImgDet&rs=1"
              alt="Doctor 2"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Dr. Raghav Jain</h2>
            <p className="text-gray-600">Specialty: Pediatrics</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://th.bing.com/th/id/OIP.nasl4hw6NN1bmEjGnDL4cAHaE7?pid=ImgDet&rs=1"
              alt="Doctor 3"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Dr. Alex Johnson</h2>
            <p className="text-gray-600">Specialty: Dermatology</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://th.bing.com/th/id/OIP.tTwAd8HkyzLHQqnvSI2cCQHaE8?pid=ImgDet&rs=1"
              alt="Doctor 3"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Dr. Anjali Varma</h2>
            <p className="text-gray-600">Specialty: Neurology</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://th.bing.com/th/id/OIP.R5rESgwNM20TmXfOG4PPRAHaFS?pid=ImgDet&rs=1"
              alt="Doctor 3"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Dr. Gevan Peter</h2>
            <p className="text-gray-600">Specialty: Oncology</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://nursepreneurs.com/wp-content/uploads/2021/04/Untitled-design-14.jpg"
              alt="Doctor 3"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Dr. Stacy Williams</h2>
            <p className="text-gray-600">Specialty: Gynecology</p>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-700">
          Find the right doctor and book an appointment with ease.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Book an Appointment
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
