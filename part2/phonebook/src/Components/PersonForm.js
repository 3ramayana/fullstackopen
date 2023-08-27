const PersonForm = ({
  handleSubmit,
  handleInputName,
  handleInputNumber,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleInputName} value={newName} />
      </div>
      <div>
        number: <input onChange={handleInputNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
