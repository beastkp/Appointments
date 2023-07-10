import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { openModal,closeModal } from '../redux/features/modalSlice';
import { Link } from 'react-router-dom';

const Modal = () => {
    const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <h4 className="text-lg font-semibold mb-4">
          Do you confirm the Appointment?
        </h4>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <Link to="/">Confirm</Link>
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal