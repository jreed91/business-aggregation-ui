import http from "./http-common";

const getAll = () => {
  return http.get(`/businesses`);
};

const get = id => {
  return http.get(`/businesses/${id}`);
};

const create = data => {
  return http.post("/businesses", data);
};

const update = (data, id) => {
  return http.put(`/businesses/${id}`, data);
};


export default {
  getAll,
  get,
  create,
  update
};