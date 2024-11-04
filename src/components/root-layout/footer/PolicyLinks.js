import React from 'react';

const PolicyLinks = ({ policies }) => {
  return (
    <div className='mt-8 flex justify-center gap-6 items-center'>
      {policies.map(({ name, url }) => (
        <a key={name} href={url} className="text-gray-200 hover:underline">{name}</a>
      ))}
    </div>
  );
};

export default PolicyLinks;
