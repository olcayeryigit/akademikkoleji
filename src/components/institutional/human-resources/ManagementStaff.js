"use client";
import React from "react";

const ManagementStaff = () => {
    const managementTeam = [
        {
            name: "Ahmet Yılmaz",
            position: "Okul Müdürü",
            description: "Eğitim alanında 15 yıllık deneyime sahip olan Ahmet Yılmaz, okulun yönetiminde liderlik yapmaktadır.",
        },
        {
            name: "Elif Demir",
            position: "İnsan Kaynakları Müdürü",
            description: "Elif Demir, nitelikli eğitim kadrosunun oluşturulması ve geliştirilmesi için çalışmaktadır.",
        },
        {
            name: "Mehmet Korkmaz",
            position: "Finans Müdürü",
            description: "Mehmet Korkmaz, okulun mali işlerinin yönetiminden sorumlu olup bütçenin etkin kullanımını sağlar.",
        },
        {
            name: "Zeynep Aydın",
            position: "Pazarlama Müdürü",
            description: "Zeynep Aydın, okulun tanıtım stratejilerini geliştirerek öğrenci kabulünü artırmayı hedefler.",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                Yönetim Kadrosu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {managementTeam.map((member, index) => (
                    <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
                        <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                        <h4 className="text-md font-medium text-gray-700">{member.position}</h4>
                        <p className="text-gray-600 mt-2">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagementStaff;
