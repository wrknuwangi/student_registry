// import React from "react";
// import StudentForm from "./StudentForm";
// import StudentList from "./StudentList";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Student Details</h1>
//       <StudentForm />
//       <StudentList />?
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleStudentAdded = () => {
    setRefresh(!refresh); // toggle to refresh list
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Student Details - Department of Examinations
      </h1>
      <StudentForm onStudentAdded={handleStudentAdded} />
      <StudentList refresh={refresh} />
    </div>
  );
}

export default App;
