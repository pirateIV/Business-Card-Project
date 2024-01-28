import React from 'react';

import Aside from './Aside';
import Socials from './Socials';
import Link from '../common/Link';
import Divider from '../common/Divider';
import ContactInfo from '../common/ContactInfo';
import profileData from '../../../../data/profileData';

import { EmailIcon } from '../Icons/EmailIcon';
import { PhoneIcon } from '../Icons/PhoneIcon';
import { GithubIcon } from '../Icons/GithubIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';
import { LinkedinIcon } from '../Icons/LinkedinIcon';

const AsideMain = () => {
  const { phone } = profileData;
  const { Gmail, Github, Linkedin, Twitter } = profileData.profileLinks;

  return (
    <>
      <Aside>
        <ContactInfo
          id='email'
          type='Email'
          icon={<EmailIcon />}
          contactMethod={Gmail}
          href={'mailto:benabolade@gmail.com'}
        />
        <ContactInfo
          id='phone'
          icon={<PhoneIcon />}
          type='Phone/Whatsapp'
          contactMethod={phone}
          href={'https://wa.me/2349022668728'}
        />
        <Divider />
        <Socials>
          <h4 className='font-semibold'>Find me on</h4>
          <div className='icons flex items-center gap-5'>
            <Link to={Github} icon={<GithubIcon />} />
            <Link to={Linkedin} icon={<LinkedinIcon />} />
            <Link to={Twitter} icon={<TwitterIcon />} />
          </div>
        </Socials>
      </Aside>
    </>
  );
};

export default AsideMain;
