import React from 'react';

const Spacer = ({ height = 'h-4', width = 'w-0' }) => {
  return <div className={`${height} ${width}`} />;
};

export default Spacer;