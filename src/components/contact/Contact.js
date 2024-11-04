"use client"
import React from 'react';

const Contact = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">İletişim</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Konumu Telefonuma Gönder</h2>
        <p>Tıklayın, harita konumunu telefonunuza gönderin.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Yol Tarifi Al</h2>
        <p>Kolayca nasıl gelebileceğinizi öğrenin.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Haritayı Büyüt</h2>
        <p>Haritayı daha büyük ekranda inceleyin.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">İletişim Formu</h2>
        <p>
          Talep, soru, öneri ve şikayetleriniz için aşağıdaki iletişim kanallarımızı kullanarak bizlere ulaşabilirsiniz.
        </p>
        <form className="flex flex-col">
          <label className="mb-2">
            Adınız ve Soyadınız*
            <input type="text" required className="border p-2 w-full" />
          </label>
          <label className="mb-2">
            E-Posta*
            <input type="email" required className="border p-2 w-full" />
          </label>
          <label className="mb-2">
            Telefon*
            <input type="tel" required className="border p-2 w-full" placeholder="(5xx) xxx-xxxx" />
          </label>
          <label className="mb-2">
            Lütfen Mesajınız yazınız...
            <textarea required className="border p-2 w-full h-24" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" required />
            <span className="ml-2">KVKK Şartlarını okudum ve kabul ediyorum.</span>
          </label>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Formu Gönder
          </button>
        </form>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Firma Bilgileri</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Merkez Kampüs</h3>
          <p>Rıhtım Cd. Recaizade Sk. 2-3 Kadıköy / İSTANBUL</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Akademik Koleji International School</h3>
          <p>İlkokul - Ortaokul</p>
          <p>Nasa Kampüsü: Ataevler, Akpelin Sokak No:6/1, 16140 Nilüfer/Bursa</p>
          <p>Anadolu Lisesi: Space Kampüsü, Üçevler, Çalı Kavşağı, Aysel Sk. No: 28 16159 Nilüfer/Bursa</p>
          <p>Anaokulu: Kids Kampüsü, Ataevler, Akpelin Sokak No:6/1, 16140 Nilüfer/Bursa</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">İletişim</h2>
        <div className="flex items-center mb-2">
          <span className="mr-2">Merkez Kampüs İletişim:</span>
          <strong>akademik_koleji_kurumsal_numara</strong>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">Bursa Kampüs İletişim:</span>
          <strong>akademik_koleji_kurumsal_numara</strong>
        </div>
      </div>
    </div>
  );
};

export default Contact;
