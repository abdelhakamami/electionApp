import axios from "axios";
export const adminLogin = async (values) => {
  const response = await axios.post(
    `api/admins/auth`,
    values
  );
  return response.data;
};
