import axios from "axios";
import {
  requestFail,
  requestStart,
  requestSuccess,
  addUser,
  deleteUser,
} from "./userSlice";

export const fetchData = () => async (dispatch) => {
  dispatch(requestStart());
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    dispatch(requestSuccess(res.data));
  } catch (err) {
    dispatch(requestFail(err.message));
  }
};

export const addUserData = (user) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );
    dispatch(addUser(res.data));
  } catch {
    alert("Add failed");
  }
};

export const deleteUserData = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch(deleteUser(id));
  } catch {
    alert("Delete failed");
  }
};
