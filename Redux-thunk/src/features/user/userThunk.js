import axios from "axios";
import { requestFail, requestStart, requestSuccess, addUser } from "./userSlice";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      dispatch(requestSuccess(res.data));
    } catch (error) {
      dispatch(requestFail(error.message));
    }
  };
};


export const addUserData = (userData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        userData
      );
      dispatch(addUser(res.data));
    } catch (error) {
      alert("Failed to add user");
    }
  };
};
