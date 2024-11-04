import React from 'react';

const ContactInfoSection = ({ info }) => {
  return (
    <div className="customer-service-section mb-6 text-center">
      <h3 className="font-bold text-lg whitespace-nowrap text-gray-100">{info.header}</h3>
      <p className="text-xl flex justify-center items-center gap-3 mt-2 font-bold text-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="white" fillOpacity="0" stroke="white" strokeDasharray="64" strokeDashoffset="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"/></path></svg> <span>{info.phone}</span>
      </p>
      <div className="mt-3 bg-red-600 rounded p-2 text-center cursor-pointer hover:bg-red-700">{info.callToAction}</div>
    </div>
  );
};

export default ContactInfoSection;
