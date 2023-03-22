export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) return true;
  else return false;
};

export const getTokenValue = () => {
  let token = localStorage.getItem("token");
  if (token) token = token.replace(/['"]+/g, "");
  return token;
};
