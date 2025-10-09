// import { useEffect, useState } from "react";
// import "./UseEffect.css"; // ✅ Import CSS

// const UseEffect = () => {
//   const [person, setPerson] = useState([]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         const data = await response.json();

//         if (!data || data.length === 0) {
//           return console.log("No data found");
//         }

//         // Add a small delay to visualize animation
//         setTimeout(() => setPerson(data), 300);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <div className="user-container">
//       <h2 className="user-title">Fetched Users</h2>

//       <table className={`user-table ${person.length > 0 ? "fade-in" : ""}`}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {person.map((person) => (
//             <tr key={person.id}>
//               <td>{person.id}</td>
//               <td>{person.name}</td>
//               <td>{person.username}</td>
//               <td>{person.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UseEffect;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UseEffect.css";

const UseEffect = () => {
  const [person, setPerson] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.data || response.data.length === 0) {
          console.log("No data found");
          setPerson([]);
        } else {
          setPerson(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (fetchData) {
      fetchUserData();
    }
  }, [fetchData]);

  const handleFetchData = () => {
    setFetchData(true);
  };

  return (
    <div className="table-container">
      <button onClick={handleFetchData}>Fetch User Data</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {person.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseEffect;
