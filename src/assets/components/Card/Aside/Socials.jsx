import React from 'react'

const Socials = ({children}) => {
  return (
    <section className='social-media-links flex flex-col gap-3 w-64'>
      {children}
    </section>

  )
}

export default Socials