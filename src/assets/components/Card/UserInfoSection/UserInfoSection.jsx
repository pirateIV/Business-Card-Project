import React from 'react';
import profileData from '../../../../data/profileData';
import EmailIcon from '../../../../../public/icons/EmailIcon.svg';

console.log(EmailIcon)

const UserInfoSection = () => {
  const { name, bio, city, profession, technologies } = profileData;

  return (
    <div className='w-[450px] flex flex-col gap-4'>
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

      <div id='technologies' className='flex flex-col gap-4'>
        <h5 className='font-semibold text-black__87 text-headingSmall'>
          Working with technologies:
        </h5>

        <ul className='text-body no-underline ps-1'>
          {technologies.map(({ id, name, icon }) => (
            <li key={id} className='py-2 list-item'>
              <span>{icon}</span>
              <span className='ms-3'>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserInfoSection;
