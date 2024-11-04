import React from 'react';

const SubscriptionSection = ({ info }) => {
  return (
    <div className="subscription-section mb-6">
      <h2 className="font-bold text-lg text-gray-100">{info.header}</h2>
      <p className="text-sm mb-4 text-gray-400">{info.description}</p>
      <div className="inline-flex mb-2 bg-white bg-opacity-20 p-1 rounded mb-6">
        <input
          type="email"
          placeholder={info.placeholder}
          className="bg-white bg-opacity-0 rounded px-3 placeholder-gray-100 w-[375px] p-1 focus:outline-none focus:ring-0"
        />
        <button className="bg-gray-100 text-black rounded px-4 py-1 text-sm">
          {info.submitButtonText}
        </button>
      </div>

      <div className='flex flex-col'>
      <label className="flex items-center text-xs text-gray-400 mb-6">
        <input
          type="checkbox"
          className=" mr-2 w-6 h-6 border-2 border-gray-400 opacity-80 rounded"
        />
        {info.privacyAgreement}
      </label>
      <label className="flex items-center text-xs text-gray-400">
        <input
          type="checkbox"
          className="mr-2 w-6 h-6 border-2 border-gray-400 opacity-80 rounded"
        />
        <span className='underline text-gray-100 me-1'>{info.privacyPolicyLink}</span>
        <span>metnini okudum, onaylıyorum</span> 
      </label></div>
    </div>
  );
};

export default SubscriptionSection;
