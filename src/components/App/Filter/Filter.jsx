import PropTypes from 'prop-types';

function Filter({ filter, changeFilter }) {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
