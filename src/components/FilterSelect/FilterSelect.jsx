import React from 'react';
import Select from 'react-select';

const FilterSelect = ({ setFilterParams, options, isDisabled }) => {
  const handleChange = (e) => {
    setFilterParams(e);
  };

  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
      isDisabled={isDisabled}
    />
  );
};

export default FilterSelect;
