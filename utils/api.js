import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();
  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();
  return data;
};
