import React from 'react';

const ProfileInfoContent = ({ name, city, bio, profession }) => {
  return (
    <>
      <h1 className='text-headingLarge font-semibold leading-none'>
        <span className='text-green__800'>{name.firstName}</span>
        <br />
        <span>{name.lastName}</span>
      </h1>

      <div id='about-person'>
        <h5 className='flex items-center gap-3 font-semibold text-black__87 text-headingSmall'>
          {profession} <span className='text-[30px]'>·</span> {city}
        </h5>
      </div>

      <div className='w-[437px] font-normal text-black__87 text-body' id='bio'>
        <p>{bio}</p>
      </div>
    </>
  );
};

export default ProfileInfoContent;
