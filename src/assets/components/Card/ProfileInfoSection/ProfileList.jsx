import React from 'react';

const ProfileList = ({ children }) => {
  return <ul className='text-body no-underline ps-1'>{children}</ul>;
};

export const ProfileListItem = ({ icon, name }) => {
  return (
    <li className='py-2 list-item'>
      <span>{icon}</span>
      <span className='ms-3'>{name}</span>
    </li>
  );
};

export default ProfileList;
