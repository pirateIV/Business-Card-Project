import React from 'react';

const ContactInfo = ({ id, type, icon, href, contactMethod }) => {
  return (
    <>
      <section className='profile flex flex-col gap-3 w-64' id={id}>
        <div className='flex items-center gap-1'>
          {icon}
          <h4 className='font-semibold'>{type}</h4>
        </div>
        <a
          className='font-[300] text-white__87 text-[16px]'
          href={href}
          target='_blank'
          rel='noreferrer'>
          {contactMethod}
        </a>
      </section>
    </>
  );
};

export default ContactInfo;
