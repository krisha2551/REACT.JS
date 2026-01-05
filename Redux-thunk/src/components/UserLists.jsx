import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addUserData } from "../features/user/userThunk";

const UserLists = () => {
  const { users, loading, error } = useSelector((state) => state.users);

  // console.log("users data", users);

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    dispatch(addUserData({ name }));
    setName("");
  };

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>{error}</p>;

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add User</button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserLists;
