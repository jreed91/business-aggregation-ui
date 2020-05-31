import http from "./http-common";

const getAll = () => {
  return http.get(`/businesses`);
};

const getAllLocations = id => {
  return http.get(`/businesses/${id}/locations`);
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
  getAllLocations,
  get,
  create,
  update
};