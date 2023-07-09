import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-900 rounded-full animate-pulse"></div>
        <div className="mt-2 text-gray-900">Loading...</div>
      </div>
    </div>
  );
}

export default Spinner