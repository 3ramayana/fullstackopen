import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const addPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((res) => res.data);
};

const updatePerson = (id, updatePerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatePerson);
  return request.then((res) => res.data);
};

const service = { getPersons, addPerson, deletePerson, updatePerson };

export default service;
