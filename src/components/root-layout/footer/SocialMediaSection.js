import React from 'react';

const SocialMediaSection = ({ links }) => {
  return (
    <div className="social-media-section mb-6">
      <h3 className="font-bold text-lg">Bizi Takip Edin</h3>
      <p className="text-sm mt-2 text-gray-400">Akademik International Deneyimleri Ve Aktiviteleri Feedinize Düşsün!</p>
      <div className="flex space-x-8 mt-10">
        {links.map(({ platform, icon, url, label }) => (
          <a key={platform} href={url} aria-label={label} className="text-gray-400 hover:text-gray-100">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;
