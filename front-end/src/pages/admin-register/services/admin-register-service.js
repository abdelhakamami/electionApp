import axios from "axios";

export const adminRegister = async (values) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/admins`, values);
  return response.data;
};
