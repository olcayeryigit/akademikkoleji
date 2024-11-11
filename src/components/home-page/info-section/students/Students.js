import React, { useState } from 'react';

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
    { id: 1, name: "Sena Arslan", score: 95 },
    { id: 2, name: "Elif Yıldız", score: 88 },
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
  ydt: [
    { id: 1, name: "Elif Yıldız", score: 95 },
    { id: 2, name: "Hüseyin Çelik", score: 88 },
    { id: 3, name: "Ayşe Kaya", score: 92 },
    { id: 4, name: "Canan Öztürk", score: 85 },
    { id: 5, name: "Elif Yıldız", score: 91 },
    { id: 6, name: "Emre Akman", score: 89 },
    { id: 7, name: "Seda Aydın", score: 87 },
    { id: 8, name: "Zeynep Arslan", score: 93 },
    { id: 9, name: "Canan Öztürk", score: 90 },
    { id: 10, name: "Hüseyin Çelik", score: 84 },
    { id: 11, name: "Fatma Kurt", score: 91 },
  ],
};

const Students = () => {
  const [selectedExam, setSelectedExam] = useState('lgs');
  const [showMore, setShowMore] = useState(false);

  const displayedStudents = showMore 
    ? examData[selectedExam] 
    : examData[selectedExam].slice(0, 6);

  const maskName = (name) => {
    const parts = name.split(' ');
    const maskedParts = parts.map(part => part.charAt(0) + '*'.repeat(part.length - 1));
    return maskedParts.join(' ');
  };

  return (
    <div className="corner-shadow w-full rounded-xl mt-3 p-4" 
   
    >
      <h2 className="text-xl font-bold  flex items-center text-black">
        Gurur Tablomuz
      </h2><div className='flex items-center'>
      <div></div>
      <h3 className='text-sm mb-3'>Başarıya Ulaşan Öğrencilerimizle Gurur Duyuyoruz
      </h3></div>
      <div className="flex justify-around">
        {Object.keys(examData).map((examKey) => (
          <button
            key={examKey}
            className={`w-16 h-8 transition duration-300 ease-in-out rounded-full ${selectedExam === examKey ? 'bg-black text-white font-semibold' : 'bg-white text-black border-2 border-black font-bold'}`}
            onClick={() => {
              setSelectedExam(examKey);
              setShowMore(false);
            }}
          >
            {examKey === 'lgs' ? 'LGS' : examKey === 'yks' ? 'YKS' : 'YDT'}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div className="h-[262px] overflow-y-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left text-sm py-2 px-2 border-b border-gray-300">Öğrenci Adı</th>
                <th className="text-center text-sm py-2 px-2 border-b border-gray-300">Sınav Türü</th>
                <th className="text-center text-sm py-2 px-2 border-b border-gray-300">Puan</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-300">
                  <td className="text-sm p-2 font-semibold">{maskName(student.name)}</td>
                  <td className="text-center text-sm p-2 font-semibold">{selectedExam.toUpperCase()}</td>
                  <td className="text-center text-sm p-2 font-extrabold">{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {examData[selectedExam].length > 10 && (
          <button
            className={`mx-auto flex justify-center items-center mt-4 w-56 gap-2 h-10 rounded-full transition duration-300 text-sm font-bold ${
              showMore
                ? 'bg-black text-white font-semibold'
                : 'bg-white text-black border-2 border-black'
            }`}
            onClick={() => setShowMore(!showMore)}
          >
            
            {showMore ? 'Daha Az Göster ' : 'Tüm Tabloyu Görüntüle'}
            <img
              src={showMore ? "/logos/ak-1.png" : "/logos/ak-2.png"}
              alt="toggle icon"
              className="mr-2 h-4 w-4"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Students ;

/**
 * 
 
<div className="logo-button flex items-center gap-2 bg-black hover:bg-white hover:text-black cursor-pointer p-3 rounded-full border-white border-2 mt-4">
                    <span className="text-xs">Haberin Devamına Git</span>
                    <div className="logo1 relative w-4 h-4">
                      <Image src="/img/logo/ak-1.png" fill className="contain" />
                    </div>
                    <div className="logo2 relative w-4 h-4">
                      <Image src="/img/logo/ak-2.png" fill className="contain" />
                    </div>
                  </div>


 * 
 */