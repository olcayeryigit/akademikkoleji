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
  ydt: [
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
};

const Section9 = () => {
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
    <div className="shadow-2xl w-full rounded-xl  p-4 bg-gradient-to-b from-gray-100 to-[#EAF3FB]" 
   
    >
      <h2 className="text-xl font-bold  flex items-center text-gray-800">
        Gurur Tablomuz
      </h2><div className='flex gap-2 items-center'>
      <div><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><g fill="none" stroke="black" strokeWidth="1.5"><path d="M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity="0.5"/><path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"/><path d="m12 16.068l-3.771 3.905c-.54.56-.81.839-1.04.935c-.52.22-1.099.032-1.373-.448c-.12-.21-.158-.59-.232-1.35c-.043-.43-.064-.644-.128-.824a1.43 1.43 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132c-.734-.078-1.101-.117-1.305-.241c-.463-.284-.646-.883-.433-1.422c.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935c.52.22 1.099.032 1.373-.448c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076L18.544 12" opacity="0.5"/></g></svg></div>
      <h3 className='text-sm mb-3'>Başarıya Ulaşan Öğrencilerimizle Gurur Duyuyoruz
      </h3></div>
      <div className="flex justify-around">
        {Object.keys(examData).map((examKey) => (
          <button
            key={examKey}
            className={`w-16 h-8 transition duration-300 ease-in-out rounded-full ${selectedExam === examKey ? 'bg-[#080908] text-white font-semibold' : 'bg-white text-[#080908] border-2 border-[#080908] font-bold'}`}
            onClick={() => {
              setSelectedExam(examKey);
              setShowMore(false);
            }}
          >
            {examKey === 'lgs' ? 'LGS' : examKey === 'yks' ? 'YKS' : 'YDT'}
          </button>
        ))}
      </div>

      <div className="mt-6">
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
                  <td className="text-sm p-2">{maskName(student.name)}</td>
                  <td className="text-center text-sm p-2">{selectedExam.toUpperCase()}</td>
                  <td className="text-center text-sm p-2">{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {examData[selectedExam].length > 10 && (
          <button
            className={`mx-auto flex justify-center items-center mt-4 w-56 gap-2 h-10 rounded-full transition duration-300 text-sm font-bold ${
              showMore
                ? 'bg-[#080908] text-white font-semibold'
                : 'bg-white text-[#080908] border-2 border-[#080908]'
            }`}
            onClick={() => setShowMore(!showMore)}
          >
            
            {showMore ? 'Daha Az Göster ' : 'Tüm Tabloyu Görüntüle'}
            <img
              src={showMore ? "/img/logo/ak-1.png" : "/img/logo/ak-2.png"}
              alt="toggle icon"
              className="mr-2 h-4 w-4"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Section9;

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