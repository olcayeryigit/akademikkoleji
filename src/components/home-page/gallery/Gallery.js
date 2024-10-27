"use client";
import React from "react";
import "./gallery.scss"; // CSS dosyanızı burada import edin

const Gallery = () => {
  return (
    <div className="bg-black">

    <div className="container mx-auto content ">
      <div className="section-header">
        <h1 className="text-start text-black">Haberler</h1>
      </div>

      <div className="video-gallery">
        {/* İlk galeri öğesi */}
        <div className="gallery-item">
          <img src="/img/2-.jpg" alt="Mount Rainier" />
          <div className="gallery-item-caption">
            <h2>Akademik Koleji Yeni Eğitim Dönemi Takvimi</h2>
            <p>14410 feet of adventure</p>
            <a className="vimeo-popup" href="/" target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        </div>

        {/* İkinci galeri öğesi */}
        <div className="gallery-item">
          <img src="/img/2-.jpg" alt="Olympic National Park" />
          <div className="gallery-item-caption">
            <h2>Akademik Koleji X üyesi oldu</h2>
            <p>Mountains, rain forests, wild coastlines</p>
            <a className="vimeo-popup" href="/" target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        </div>

        {/* Üçüncü galeri öğesi */}
        <div className="gallery-item">
          <img src="/img/2-.jpg" alt="North Cascades" />
          <div className="gallery-item-caption">
          <h2>Akademik Koleji Veli Toplantısı</h2>
          <p>The mountains are calling</p>
            <a className="vimeo-popup" href="/" target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        </div>

        {/* Dördüncü galeri öğesi */}
        <div className="gallery-item">
          <img src="/img/2-.jpg" alt="Mount St. Helens" />
          <div className="gallery-item-caption">
          <h2>Akademik Koleji</h2>
          <p>The one and only</p>
            <a className="vimeo-popup" href="/" target="_blank" rel="noopener noreferrer">
Detaylara Git 
           </a>
          </div>
        </div>
      </div>
    </div>   
     </div>

  );
};

export default Gallery;
