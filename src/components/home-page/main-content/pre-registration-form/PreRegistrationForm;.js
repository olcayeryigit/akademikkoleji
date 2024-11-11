"use client";
import Image from "next/image";
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
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Kullanım Şartlarını kabul etmelisiniz.");
      return;
    }
    console.log("Form Data:", formData);
  };

  // Form alanlarını tanımlama
  const formFields = [
    { label: "Ad Soyad", type: "text", name: "name", placeholder: "İsim ve soyisim giriniz.", required: true },
    { label: "Telefon Numaranız", type: "tel", name: "phone", placeholder: "Cep telefonu numaranızı giriniz.", required: true },
    {
      label: "Öğrenim Durumu",
      type: "select",
      name: "education",
      options: ["Öğrenim Durumunuz", "Anaokulu", "İlkokul", "Ortaokul", "Anadolu Lisesi"],
      required: true,
    },
    { label: "Mesajınız", type: "textarea", name: "message", placeholder: "Mesajınız", required: true },
  ];

  return (
    <div className="w-full mx-3 py-3 px-5 bg-white shadow-md animated-border mx-auto md:w-3/4 max-w-md rounded-xl">
     <div className="flex items-center">    
     <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 1024 1024"><path fill="black" d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8"/><path fill="black" d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6m63.5 23.6L779.7 199l45.2 45.1l-360.5 359.7l-45.7 1.1z"/></svg>
            <h2 className="text-lg font-bold text-center text-[#2D3748]">
  Ön Bilgi Formu
        </h2>
     </div>
        
      
      <p className="text-xs text-gray-400">Detaylı bilgilendirme için formu doldurunuz.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Form Alanları */}
        {formFields.map(({ label, type, name, placeholder, options, required }, index) => (
          <div key={index}>
            <label className="block text-xs font-semibold text-gray-700 mt-3 mb-1">{label}</label>
            {type === "select" ? (
              <select
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 rounded-md focus:outline-none text-xs text-gray-700 bg-gray-50 border border-gray-300 shadow-sm focus:ring focus:ring-red-400 transition"
                required={required}
              >
                {options.map((option, idx) => (
                  <option key={idx} value={option === "Öğrenim Durumunuz" ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full p-2 rounded-md focus:outline-none text-xs text-gray-700 bg-gray-50 border border-gray-300 shadow-sm focus:ring focus:ring-red-400 transition"
                rows="1"
                required={required}
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full p-2 rounded-md focus:outline-none text-xs text-gray-700 bg-gray-50 border border-gray-300 shadow-sm focus:ring focus:ring-red-400 transition"
                required={required}
                style={{ borderColor: formData[name] ? '#DC001E' : '#D1D5DB' }} // Border rengini doldurulmuşsa değiştir
              />
            )}
          </div>
        ))}

        {/* Kullanım Şartlarını Kabul Et */}
        <div className="flex items-center text-xs">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="h-4 w-4 text-[#D85B29] rounded"
            required
          />
          <label className="ml-2 text-gray-400">
            Bilgi Formunu Doldurarak,{" "}
            <a href="/terms" className="text-red-600 underline">
              Yasal Uyarı/Kullanım Şartlarını
            </a>{" "}
            Kabul Ediyorum.
          </label>
        </div>

        {/* Gönder Butonu */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-[#DC001E] text-white text-sm font-medium rounded-md shadow-md hover:bg-[#EA2B48] transition duration-150 flex justify-center gap-2 items-center"
          > 
            <p>Mesajı Gönder</p> 
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 1792 1792">
              <path fill="white" d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreRegistrationForm;
