import axios from "axios";

export const adminRegister = async (values) => {
  const response = await axios.post(`api/admins`, values);
  return response.data;
};
