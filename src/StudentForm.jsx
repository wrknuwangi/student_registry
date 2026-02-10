// import React, { useState } from "react";

// const StudentForm = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [course, setCourse] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const student = { name, age: Number(age), course, email };

//     try {
//       const res = await fetch("http://localhost:5000/api/students", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(student),
//       });
//       const data = await res.json();
//       console.log("Student added:", data);

//       // clear form
//       setName("");
//       setAge("");
//       setCourse("");
//       setEmail("");
//     } catch (err) {
//       console.error("Error adding student:", err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="number"
//         placeholder="Age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Course"
//         value={course}
//         onChange={(e) => setCourse(e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <button type="submit">Add Student</button>
//     </form>
//   );
// };

// export default StudentForm;

import React, { useState } from "react";

const StudentForm = ({ onStudentAdded }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = { name, age: Number(age), course, email };

    try {
      const res = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      const data = await res.json();
      console.log("Student added:", data);

      // Notify parent to refresh list
      if (onStudentAdded) onStudentAdded();

      // Clear form
      setName(""); setAge(""); setCourse(""); setEmail("");
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-700">Add Student</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;

