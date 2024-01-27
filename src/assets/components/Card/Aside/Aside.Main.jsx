import React from 'react';

import Aside from './Aside';
import Socials from './Socials';
import Link from '../common/Link';
import Divider from '../common/Divider';
import ContactInfo from '../common/ContactInfo';

import { EmailIcon } from '../Icons/EmailIcon';
import { PhoneIcon } from '../Icons/PhoneIcon';
import { profileData } from '../../../../data/profileData';
import { GithubIcon } from '../Icons/GithubIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';
import { LinkedinIcon } from '../Icons/LinkedinIcon';

const AsideMain = () => {
  return (
    <>
      <Aside>
        <ContactInfo
          id='email'
          type='Email'
          icon={<EmailIcon />}
          href={'mailto:benabolade@gmail.com'}
          contactMethod={profileData.profileLinks.Gmail}
        />
        <ContactInfo
          id='phone'
          icon={<PhoneIcon />}
          type='Phone/Whatsapp'
          href={'https://wa.me/2349022668728'}
          contactMethod={profileData.phone.Number}
        />
        <Divider />
        <Socials>
          <h4 className='font-semibold'>Find me on</h4>
          <div className='icons flex items-center gap-5'>
            <Link to={profileData.profileLinks.Github} icon={<GithubIcon />} />
            <Link to={profileData.profileLinks.Linkedin} icon={<LinkedinIcon />} />
            <Link to={profileData.profileLinks.Twitter} icon={<TwitterIcon />} />
          </div>
        </Socials>
      </Aside>
    </>
  );
};

export default AsideMain;
