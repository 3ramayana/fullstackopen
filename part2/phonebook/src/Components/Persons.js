import Person from './Person';
const Persons = ({ filteredPerson, persons, deletePerson }) => {
  return (
    <ul>
      {filteredPerson.length > 0
        ? filteredPerson.map((person, i) => (
            <Person key={i} person={person} deletePerson={deletePerson} />
          ))
        : persons.map((person, i) => (
            <Person key={i} person={person} deletePerson={deletePerson} />
          ))}
    </ul>
  );
};

export default Persons;
