import http from "./http-common";

const get = id => {
  return http.get(`/locations/${id}`);
};

const getAll = () => {
    return http.get(`/businesses${id}/locations`);
  };

const create = data => {
  return http.post("/locations", data);
};

const update = (data, id) => {
  return http.put(`/locations/${id}`, data);
};


export default {
  getAll,
  get,
  create,

};