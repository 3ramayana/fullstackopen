import { useState } from 'react';
import services from './service/service';
import { useEffect } from 'react';
import CountriesList from './CountriesList';

function App() {
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState('');
  const [filterCountries, setFilterCountries] = useState(null);

  useEffect(() => {
    services.getCountries().then((contriesData) => {
      setCountries(contriesData);
      // console.log(contriesData);
    });
    // console.log(countries);
  }, []);

  useEffect(() => {
    if (countries) {
      setFilterCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(query)
        )
      );
    }
    // console.log(query);
    // console.log(filterCountries);
  }, [query, countries]);

  const handleInputQuery = (e) => {
    setQuery(e.target.value);
    // console.log(query);
  };

  return (
    <>
      <p>
        find countries{' '}
        <input type="text" onChange={handleInputQuery} value={query} />
      </p>

      {filterCountries && (
        <CountriesList
          filterCountries={filterCountries}
          setFilterCountries={setFilterCountries}
        />
      )}
    </>
  );
}

export default App;
