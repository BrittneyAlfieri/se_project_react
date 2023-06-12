const BASE_URL = "http://localhost:3001";
const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
};

const getItemList = () => {
  return fetch(`${BASE_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
    return handleServerResponse(res);
  });
};

const addItem = (token, { name, weather, imageUrl }) => {
  console.log(token);
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

const removeItem = (token, _id) => {
  return fetch(`${BASE_URL}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

const api = {
  getItemList,
  addItem,
  removeItem,
};

export default api;
