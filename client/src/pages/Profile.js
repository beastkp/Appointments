import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { showLoading } from '../redux/features/alertSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      // Fetch appointments
      dispatch(showLoading());
      axios
        .get("http://localhost:8080/api/v1/appointments/allappointments")
        .then((response) => {
          setAppointments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching appointments:", error);
        });
    }, []);

    if (!appointments) {
        dispatch(showLoading());
    }
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="mb-4">
        <strong className="font-semibold">Name:</strong>
         {/* {user.name} */}
      </div>
      <div className="mb-4">
        <strong className="font-semibold">Email:</strong> 
        {/* {user.email} */}
      </div>
      <h3 className="text-lg font-semibold mb-2">Appointments</h3>
      {appointments.length > 0 ? (
        <ul className="list-disc pl-6">
          {appointments.map((appointment) => (
            <li key={appointment.id}>{appointment.title}</li>
          ))}
        </ul>
      ) : (
        <div>No appointments found.</div>
      )}
    </div>
  );
}

export default Profile