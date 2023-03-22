import axios from "axios";
import { removeToken } from "../../../utils/removeToken";
import { getTokenValue } from "../../../utils/getToken";

// INTERCEPTOR
const interceptor = () => {
  let token = getTokenValue();
  let header = {
    headers: { Authorization: `bearer ${token}` },
  };
  return header;
};

export const adminLogout = async () => {
  removeToken();
};
export const getElections = async () => {
  const header = interceptor();
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_API}/api/elections`,
    header
  );
  return response.data;
};

export const addElection = async (values) => {
  const header = interceptor();
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/api/elections`,
    values,
    header
  );
  return response.data;
};
