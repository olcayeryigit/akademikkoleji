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
    <div className="mt-40 p-3 bg-white shadow-lg rounded-lg w-[350px] h-auto max-h-[450px] border border-[#D85B29] ">
      <h2 className="text-lg font-bold text-center mb-3 text-[#2D3748]">
        Ön Bilgilendirme Formu
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Adınız Soyadınız */}
        <div>
          <label className="block text-sm font-medium text-[#4A5568] mb-1">
            Adınız Soyadınız
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className="w-full p-1.5 rounded-md focus:outline-none text-sm text-[#333333] bg-[#FFFAF0] border border-[#D85B29] shadow-md focus:ring focus:ring-[#FFA07A] focus:ring-opacity-50 transition duration-200"
            required
          />
        </div>

        {/* Telefon Numaranız */}
        <div>
          <label className="block text-sm font-medium text-[#4A5568] mb-1">
            Telefon Numaranız
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0(5**) *** ** **"
            className="w-full p-1.5 rounded-md focus:outline-none text-sm text-[#333333] bg-[#FFFAF0] border border-[#D85B29] shadow-md focus:ring focus:ring-[#FFA07A] focus:ring-opacity-50 transition duration-200"
            required
          />
        </div>

        {/* Öğrenim Durumu */}
        <div>
          <label className="block text-sm font-medium text-[#4A5568] mb-1">
            Öğrenim Durumu
          </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-1.5 rounded-md focus:outline-none text-sm text-[#333333] bg-[#FFFAF0] border border-[#D85B29] shadow-md focus:ring focus:ring-[#FFA07A] focus:ring-opacity-50 transition duration-200"
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
          <label className="block text-sm font-medium text-[#4A5568] mb-1">
            Mesajınız
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınız"
            className="w-full p-1.5 rounded-md focus:outline-none text-sm text-[#333333] bg-[#FFFAF0] border border-[#D85B29] shadow-md focus:ring focus:ring-[#FFA07A] focus:ring-opacity-50 transition duration-200"
            rows="2"
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
            className="h-4 w-4 text-[#D85B29] focus:ring focus:ring-[#D85B29] focus:outline-none border border-[#D85B29] rounded"
            required
          />
          <label className="ml-2 text-sm text-[#4A5568]">
            Bilgi Formunu Doldurarak,{" "}
            <a href="/terms" className="text-[#2D3748] underline">
              Yasal Uyarı/Kullanım Şartlarını
            </a>{" "}
            Kabul Ediyorum.
          </label>
        </div>

        {/* Gönder Butonu */}
        <div>
          <button
            type="submit"
            className="w-full py-1 px-4 bg-[#D85B29] text-white text-sm font-semibold rounded-md shadow-md"
          >
            Mesajı Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreRegistrationForm;