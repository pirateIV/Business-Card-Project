import React from 'react';

const Card = ({ children }) => {
  return (
    <>
      <div
        className='w-full h-[667px] max-w-[1112px] bg-cardBackground rounded-custom shadow-custom'
        id='card'>
        {children}
      </div>
    </>
  );
};

export default Card;
