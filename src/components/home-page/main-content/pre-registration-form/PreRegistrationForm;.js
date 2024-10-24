"use client";
import React, { useState } from "react";

const PreRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    education: "",
    message: "Merhabalar Bilgi Almak İstiyorum.",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Kullanım Şartlarını kabul etmelisiniz.");
      return;
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="mt-48 p-3 bg-white shadow-md rounded-lg max-w-xs mx-auto border border-[#DC001E]">
      <h2 className="text-base font-semibold text-center mb-2 text-[#2D3748]">
        Ön Bilgilendirme Formu
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Adınız Soyadınız */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Adınız Soyadınız
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className="w-full p-1 rounded-md focus:outline-none text-xs text-gray-700 bg-gray-50 border border-gray-300 shadow-sm focus:ring focus:ring-[#DC001E] transition"
            required
          />
        </div>

        {/* Telefon Numaranız */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Telefon Numaranız
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0(5**) *** ** **"
            className="w-full p-1 rounded-md focus:outline-none text-xs text-gray-700 bg-gray-50 border border-gray-300 shadow-sm focus:ring focus:ring-[#DC001E] transition"
            required
          />
        </div>

        {/* Öğrenim Durumu */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Öğrenim Durumu
          </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-1 rounded-md focus:outline-none text-xs text-gray-700 bg-gray-50 border border-gray-300 shadow-sm focus:ring focus:ring-[#DC001E] transition"
            required
          >
            <option value="">Seçiniz</option>
            <option value="Lise">Lise</option>
            <option value="Üniversite">Üniversite</option>
            <option value="Yüksek Lisans">Yüksek Lisans</option>
            <option value="Doktora">Doktora</option>
          </select>
        </div>

        {/* Mesajınız */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Mesajınız
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınız"
            className="w-full p-1 rounded-md focus:outline-none text-xs text-gray-700 bg-gray-50 border border-gray-300 shadow-sm focus:ring focus:ring-[#DC001E] transition"
            rows="1"
            required
          />
        </div>

        {/* Kullanım Şartlarını Kabul Et */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="h-3 w-3 text-[#D85B29] focus:ring focus:ring-[#D82129] focus:outline-none border border-gray-300 rounded"
            required
          />
          <label className="ml-2 text-xs text-gray-700">
            Bilgi Formunu Doldurarak,{" "}
            <a href="/terms" className="text-[#DC001E] underline">
              Yasal Uyarı/Kullanım Şartlarını
            </a>{" "}
            Kabul Ediyorum.
          </label>
        </div>

        {/* Gönder Butonu */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-[#DC001E] text-white text-xs font-medium rounded-md shadow-md hover:bg-[#EA2B48]  transition duration-150"
          >
            Mesajı Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreRegistrationForm;