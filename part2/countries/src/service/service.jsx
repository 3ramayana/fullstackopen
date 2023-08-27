import axios from 'axios';
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apikey = import.meta.env.VITE_OPENWEATHERMAP_KEY;

const getCountries = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const getWeather = (lat, lon) => {
  const request = axios.get(
    `${weatherUrl}?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
  );
  return request.then((res) => res.data);
};

const services = { getCountries, getWeather };

export default services;
