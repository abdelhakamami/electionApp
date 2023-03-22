import axios from "axios";
export const adminLogin = async (values) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/api/admins/auth`,
    values
  );
  return response.data;
};
