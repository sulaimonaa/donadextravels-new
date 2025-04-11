import React from 'react';
import { SpinningCircles } from 'react-loading-icons'

const Loading = ({ message }) => {
  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex vw-100 vh-100 justify-center items-center" style={{ zIndex: 1000 }}>
      <div className='flex gap-3 flex-col items-center justify-center'>
      <SpinningCircles fill="#ff4000"/>
      <p className='text-xl text-red-400'>{message}</p>
      </div>
    </div>
  );
};

export default Loading;