const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "deployed-backend-url"
    : "http://localhost:3000";

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
    return handleServerResponse(res);
  });
};

const addItem = (token, { name, weather, imageUrl }) => {
  console.log(token, "api additem");
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

const patchUserInfo = (token, { name, avatar }) => {
  console.log("Request Payload:", { name, avatar });

  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);
};

const addCardLike = ({ _id }, token) => {
  return fetch(`${BASE_URL}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id }),
  }).then(handleServerResponse);
};

const removeCardLike = ({ _id }, token) => {
  return fetch(`${BASE_URL}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id }),
  }).then(handleServerResponse);
};

const api = {
  getItemList,
  addItem,
  removeItem,
  patchUserInfo,
  addCardLike,
  removeCardLike,
};

export default api;
