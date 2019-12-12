import axios from "axios";

import { API_URL, CORS_URL } from "constants/api";

export default async (method, endpoint, requestBody) => {
  const headers = {
    "Content-Type": "application/json",
    "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY
  };
  const data = requestBody && JSON.stringify(requestBody);
  const url = `${CORS_URL}${API_URL}${endpoint}`;

  const response = await axios({
    method,
    url,
    headers,
    data
  });
  return response;
};
