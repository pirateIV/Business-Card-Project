import React from 'react';

import profileData from '../../../../data/profileData';

const { name, bio, city, profession, technologies } = profileData;

const UserInfoSection = () => {
  return (
    <>
      <div className='w-[450px] flex flex-col gap-4'>
        <h1 className='text-headingLarge font-semibold'>
          <span className='text-green__800'>{name.firstName}</span>
          <br />
          <span>{name.lastName}</span>
        </h1>

        <div id='about-person'>
          <h5 className='font-semibold text-black__87 text-headingSmall'>
            {' '}
            {profession} . {city}
          </h5>
        </div>
        <div className='w-[437px] font-normal text-black__87 text-body' id='bio'>
          <p>{bio}</p>
        </div>

        <div id='technologies flex flex-col gap-4'>
          <h5 className='font-semibold text-black__87 text-headingSmall'>
            Working with technologies:
          </h5>
          <ul className='text-body no-underline ps-6'>
            {technologies.map((tech) => (
              <li className='py-2 list-item'>
                 {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserInfoSection;
