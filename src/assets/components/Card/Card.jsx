import React from 'react';

const Card = ({ children }) => {
  return (
    <>
      <div
        className='relative w-full h-[667px] flex items-center justify-between max-w-[1112px] bg-cardBackground overflow-hidden rounded-custom shadow-custom'
        id='card'>
        {children}
      </div>
    </>
  );
};

export default Card;
