import { useEffect, useState } from 'react';
import services from './service/service';
import CountryWeather from './CountryWeather';

/* eslint-disable react/prop-types */
const CountryDetail = ({ country }) => {
  const [weatherCountry, setWeatherCountry] = useState(null);
  const latlon = country.capitalInfo.latlng;

  useEffect(() => {
    services
      .getWeather(latlon[0], latlon[1])
      .then((weatherData) => setWeatherCountry(weatherData));
  }, [latlon]);

  console.log(weatherCountry);

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.capital}</p>

      <h2>Languages:</h2>
      <ul>
        {Object.keys(country.languages).map((key, index) => (
          <li key={index}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} />

      {weatherCountry && (
        <CountryWeather
          weatherCountry={weatherCountry}
          countryName={country.capital}
        />
      )}
    </>
  );
};

export default CountryDetail;
