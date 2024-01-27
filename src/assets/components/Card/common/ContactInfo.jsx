import React from 'react';

const ContactInfo = ({ id, type, icon, contactMethod }) => {
  return (
    <>
      <section className='profile flex flex-col gap-3 w-64' id={id}>
        <div className='flex items-center gap-1'>
          {icon}
          <h4 className='font-semibold'>{type}</h4>
        </div>
        <p className='font-normal text-white__87 text-[16px]'>{contactMethod}</p>
      </section>
    </>
  );
};

export default ContactInfo;
