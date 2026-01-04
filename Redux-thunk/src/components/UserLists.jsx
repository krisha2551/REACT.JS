import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/user/userThunk";

const UserLists = () => {
  const { users, loading, error } = useSelector((state) => state.users);

  console.log("users data", users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>loading</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <table>
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
