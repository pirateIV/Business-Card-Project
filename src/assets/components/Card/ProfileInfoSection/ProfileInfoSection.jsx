import React from 'react';
import profileData from '../../../../data/profileData';
import ProfileInfoContent from './ProfileInfoContent';
import ProfileList, { ProfileListItem } from './ProfileList';

const { name, bio, city, profession, technologies } = profileData;

const ProfileInfo = ({ children }) => {
  return <div className='w-[465px] flex flex-col gap-4'>{children}</div>;
};

const ProfileInfoSection = () => {
  return (
    <ProfileInfo>
      <ProfileInfoContent bio={bio} city={city} name={name} profession={profession} />
      <div id='technologies' className='flex flex-col gap-4'>
        <h5 className='font-semibold text-black__87 text-headingSmall'>
          Working with technologies:
        </h5>

        <ProfileList>
          {technologies.map(({ id, name, icon }) => (
            <ProfileListItem key={id} name={name} icon={icon} />
          ))}
        </ProfileList>
      </div>
    </ProfileInfo>
  );
};

export default ProfileInfoSection;
