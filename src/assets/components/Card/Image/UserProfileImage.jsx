import React from 'react';

const UserProfileImage = () => {
  return (
    <div className='absolute z-50 w-[340px] h-[549px] top-[40px] start-[280px]'>
      <img src='/images/user-photo.jpg' alt='user profile image' className='w-full h-full object-cover' />
    </div>
  );
};

export default UserProfileImage;
