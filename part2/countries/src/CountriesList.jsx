/* eslint-disable react/prop-types */
import CountryDetail from './CountryDetail';

const CountriesList = ({ filterCountries, setFilterCountries }) => {
  return filterCountries.length > 10 ? (
    'Too many matches, specify another filter'
  ) : filterCountries.length === 1 ? (
    <CountryDetail country={filterCountries[0]} />
  ) : (
    filterCountries.map((country, index) => {
      return (
        <p key={index}>
          {country.name.common}{' '}
          <button onClick={() => setFilterCountries([country])}>show</button>
        </p>
      );
    })
  );
};

export default CountriesList;
