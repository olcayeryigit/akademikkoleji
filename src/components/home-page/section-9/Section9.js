"use client";
import React, { useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

const examData = {
  lgs: [
    { id: 1, name: "Ahmet Yılmaz", score: 95 },
    { id: 2, name: "Mehmet Demir", score: 88 },
    { id: 3, name: "Ayşe Kaya", score: 92 },
    { id: 4, name: "Ali Veli", score: 85 },
    { id: 5, name: "Elif Yıldız", score: 91 },
    { id: 6, name: "Emre Akman", score: 89 },
    { id: 7, name: "Seda Aydın", score: 87 },
    { id: 8, name: "Zeynep Arslan", score: 93 },
    { id: 9, name: "Canan Öztürk", score: 90 },
    { id: 10, name: "Hüseyin Çelik", score: 84 },
    { id: 11, name: "Fatma Kurt", score: 91 },
  ],
  yks: [
    { id: 12, name: "Fatma Çelik", score: 89 },
    { id: 13, name: "Ali Koç", score: 90 },
    { id: 14, name: "Zeynep Arslan", score: 94 },
    { id: 15, name: "Burak Kaplan", score: 87 },
    { id: 16, name: "Ece Demirtaş", score: 93 },
    { id: 17, name: "Derya Polat", score: 92 },
    { id: 18, name: "Murat Tan", score: 86 },
    { id: 19, name: "Seda Aydın", score: 91 },
    { id: 20, name: "Oğuzhan Er", score: 90 },
  ],
  ydt: [
    { id: 21, name: "Emre Akman", score: 90 },
    { id: 22, name: "Derya Polat", score: 92 },
    { id: 23, name: "Murat Tan", score: 85 },
    { id: 24, name: "Seda Aydın", score: 88 },
    { id: 25, name: "Oğuzhan Er", score: 91 },
    { id: 26, name: "Ali Koç", score: 93 },
    { id: 27, name: "Elif Yıldız", score: 90 },
    { id: 28, name: "Canan Öztürk", score: 94 },
    { id: 29, name: "Zeynep Arslan", score: 88 },
  ],
};

const Section9 = () => {
  const [selectedExam, setSelectedExam] = useState('lgs');
  const [showMore, setShowMore] = useState(false);

  const displayedStudents = showMore 
    ? examData[selectedExam] 
    : examData[selectedExam].slice(0, 10);

  return (
    <div className='container mx-auto'>
    <div className=" w-1/3 py-10 px-4  shadow-2xl rounded-3xl ">
      <h2 className="text-xl font-bold mb-6 flex items-center  ">
        <FaTrophy className="text-yellow-500 mr-2" />
        Gurur Tablomuz
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {Object.keys(examData).map((examKey) => (
          <button
            key={examKey}
            className={`py-2 transition duration-300 ease-in-out rounded-full ${selectedExam === examKey ? 'bg-yellow-500 text-black font-semibold' : 'bg-black text-gray-400 hover:bg-yellow-400'}`}
            onClick={() => {
              setSelectedExam(examKey);
              setShowMore(false); // Reset to show only 10 when changing exam
            }}
          >
            {examKey === 'lgs' ? 'LGS' : examKey === 'yks' ? 'YKS' : 'YDT'}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <div className={`overflow-hidden ${showMore ? 'h-60 overflow-auto' : 'h-40'}`}> {/* Set height based on showMore */}
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="">
                <th className="py-3 px-4 text-left">Öğrenci Adı</th>
                <th className="py-3 px-4 text-center">Sınav Türü</th>
                <th className="py-3 px-4 text-left">Puan</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student) => (
                <tr key={student.id} className={`transition duration-300 hover:bg-gray-200`}>
                  <td className="py-2 px-4 ">{student.name}</td>
                  <td className="py-2 px-4 text-center ">{selectedExam === 'lgs' ? 'LGS' : selectedExam === 'yks' ? 'YKS' : 'YDT'}</td>
                  <td className="py-2 px-4 text-center ">{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {examData[selectedExam].length > 10 && (
          <button 
            className=" mx-auto flex items-center mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-full transition duration-300 hover:bg-yellow-400"
            onClick={() => setShowMore(!showMore)} // Toggle showMore
          >
            {showMore ? 'Daha Az Göster' : 'Daha Fazla Göster'}
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default Section9;
