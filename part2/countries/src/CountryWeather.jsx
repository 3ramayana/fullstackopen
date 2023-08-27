/* eslint-disable react/prop-types */
const CountryWeather = ({ weatherCountry, countryName }) => {
  return (
    <>
      <h2>Weather in {countryName}</h2>
      <p>temperature {weatherCountry.main.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherCountry.weather[0].icon}@2x.png`}
        alt=""
      />
      <p>wind {weatherCountry.wind.speed} m/s</p>
    </>
  );
};

export default CountryWeather;
