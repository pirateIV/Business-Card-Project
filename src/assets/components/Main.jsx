import React from 'react';

const Main = ({ children }) => {
  return (
    <main
      className='w-full h-full flex items-center justify-center bg-appBackground font-custom'
      id='app'>
      {children}
    </main>
  );
};

export default Main;
