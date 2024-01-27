import React from 'react';
import { profileData } from '../../../../../data/profileData';

const ContactSection = () => {
  return (
    <>
      <aside className='h-full w-[341px] bg-green__800 flex flex-col items-end justify-end'>
        <div className='info w-full flex flex-col flex-grow items-center justify-end pb-20 gap-8 text-white__87'>
          <section className='profile email flex flex-col gap-3 w-64' id='email'>
            <div className='flex items-center gap-1'>
              <EmailIcon />
              <h4 className='font-semibold'>Email</h4>
            </div>
            <p className='font-normal text-[16px]'>{profileData.email.details}</p>
          </section>
          <section className='profile phone flex flex-col gap-3 w-64' id='phone'>
            <div className='flex items-center gap-1'>
              <PhoneIcon />
              <h4 className='font-semibold'>Phone</h4>
            </div>
            <p className='font-normal  text-[16px]'>{profileData.phone.details}</p>
          </section>
          <div className='divider w-full h-[21px] bg-white__87'></div>
          <div className='social-media-links flex flex-col gap-3 w-64'>
            <h4 className='font-semibold'>Find me on</h4>
            <div className='icons flex items-center gap-5'>
              <GithubIcon />
              <LinkedinIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ContactSection;
