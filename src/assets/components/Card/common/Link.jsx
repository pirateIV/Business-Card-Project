import React from 'react';

const Link = ({ icon, to }) => {
  return <a href={to}>{icon}</a>;
};

export default Link;
