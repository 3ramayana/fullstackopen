import { useState, useEffect } from 'react';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';
import service from './service/service';
import Notification from './Components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredPerson, setFilteredPerson] = useState([]);
  const [messageNotification, setMessageNotification] = useState(null);
  const [typeNotification, setTypeNotification] = useState('');

  useEffect(() => {
    service.getPersons().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleInputName = (e) => {
    setNewName(e.target.value);
  };

  const handleInputNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    const keyword = e.target.value;
    setFilter(keyword);

    filteredPersons(keyword);
  };

  const filteredPersons = (keyword) => {
    const filteredData = persons.filter((person) =>
      person.name.toLowerCase().includes(keyword)
    );

    setFilteredPerson(filteredData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const duplicationData = persons.filter(
      (person) => person.name === newPerson.name
    );

    if (duplicationData.length > 0) {
      if (
        window.confirm(
          `${duplicationData[0].name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        service
          .updatePerson(duplicationData[0].id, newPerson)
          .then((returnedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id !== duplicationData[0].id ? person : returnedPerson
              )
            )
          )
          .catch(() => {
            setMessageNotification(
              `Information of ${newPerson.name} has already been removed from server`
            );
            setTypeNotification('error');
            setNewName('');
            setNewNumber('');

            setTimeout(() => {
              setMessageNotification(null);
              setTypeNotification('');
            }, 5000);
          });
      }
    } else {
      service.addPerson(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');

        setMessageNotification(`Added ${returnedPerson.name}`);
        setTypeNotification('success');

        setTimeout(() => {
          setMessageNotification(null);
          setTypeNotification('');
        }, 5000);
      });
    }
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    const { name } = personToDelete;

    if (window.confirm(`Delete ${name} ?`)) {
      service.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={messageNotification}
        typeNotification={typeNotification}
      />
      <Filter handleFilter={handleFilter} keyword={filter} />

      <h2>Add new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleInputName={handleInputName}
        handleInputNumber={handleInputNumber}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <Persons
        filteredPerson={filteredPerson}
        persons={persons}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
