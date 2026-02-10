// import React, { useState, useEffect } from "react";

// const StudentList = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/students");
//       const data = await res.json();
//       setStudents(data);
//     } catch (err) {
//       console.error("Error fetching students:", err);
//     }
//   };

//   return (
//     <div>
//       <h2>All Students</h2>
//       {students.length === 0 ? (
//         <p>No students found.</p>
//       ) : (
//         <ul>
//           {students.map((s) => (
//             <li key={s._id}>
//               {s.name} | Age: {s.age} | Course: {s.course} | Email: {s.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default StudentList;


import React, { useEffect, useState } from "react";

const StudentList = ({ refresh }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, [refresh]); // refresh when parent triggers

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">All Students</h2>

      {students.length === 0 ? (
        <p className="text-gray-500">No students found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Age</th>
                <th className="py-2 px-4">Course</th>
                <th className="py-2 px-4">Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id} className="text-gray-700 border-b">
                  <td className="py-2 px-4">{s.name}</td>
                  <td className="py-2 px-4">{s.age}</td>
                  <td className="py-2 px-4">{s.course}</td>
                  <td className="py-2 px-4">{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;

