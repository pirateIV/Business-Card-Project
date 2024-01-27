import React from 'react';

const Aside = ({ children }) => {
  return (
    <aside
      className='h-full w-[341px] bg-green__800
     flex flex-col items-end justify-end'>
      <div
        className='info w-full flex flex-col
         flex-grow items-center justify-end pb-[5.5rem] gap-8 text-white__87'>
        {children}
      </div>
    </aside>
  );
};

export default Aside;
