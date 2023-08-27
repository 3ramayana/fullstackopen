const Filter = ({ handleFilter, keyword }) => {
  return (
    <div>
      filter shown with <input onChange={handleFilter} value={keyword} />
    </div>
  );
};

export default Filter;
