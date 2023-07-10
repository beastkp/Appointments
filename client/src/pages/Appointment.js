import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { openModal,closeModal } from "../redux/features/modalSlice";
import Modal from "../components/Modal";

const BookingForm = () => {
  // const {isOpen} = useSelector((store)=>store.modal);

  const dispatch = useDispatch();
  const [appnt, setAppnt] = useState({
    name: "",
    illness: "",
    email: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    let data = {};
    if (
      appnt.name &&
      appnt.illness &&
      appnt.illness &&
      appnt.date &&
      appnt.time
    ) {
      console.log("All Details Provided");
      data = {
        name: appnt.name,
        illness: appnt.illness,
        email: appnt.email,
        date: appnt.date,
        time: appnt.time,
      };
      try {
        dispatch(showLoading());
        const res = await axios.post(
          "http://localhost:8080/api/v1/appointments/makeappointment",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        dispatch(openModal());
        dispatch(hideLoading());
        if(res.status === 200){
          console.log(res.data);
          // dispatch(openModal());
        }
      } catch (error) {}
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={appnt.name}
            onChange={(e) => {
              setAppnt((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">
            Illness
          </label>
          <input
            type="text"
            id="illness"
            value={appnt.illness}
            onChange={(e) => {
              setAppnt((prevState) => ({
                ...prevState,
                illness: e.target.value,
              }));
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={appnt.email}
            onChange={(e) => {
              setAppnt((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={appnt.date}
            onChange={(e) => {
              setAppnt((prevState) => ({
                ...prevState,
                date: e.target.value,
              }));
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="time">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={appnt.time}
            onChange={(e) => {
              setAppnt((prevState) => ({
                ...prevState,
                time: e.target.value,
              }));
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
