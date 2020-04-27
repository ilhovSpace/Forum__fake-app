import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const FilterSelect = () => {
  const [state, setState] = useState([]);
  const [options, setOptions] = useState([]);
  const { users } = useContext(GlobalContextState);
  const { getAllUsers } = useContext(GlobalContextActions);

  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  const handleChange = (e) => {
    setState(e);
  };

  useEffect(()=>{
      console.log('запрос на сервер', state)
  }, [state])

  useEffect(() => {
    console.log(users);
    const opt = users.map((user) => ({
      label: `${user.username} (id:${user.id})`,
      value: user.id,
    }));
    setOptions(opt);
    console.log('options', options);
  }, [users]);

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(state);
  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
      formatGroupLabel={formatGroupLabel}
    />
  );
};

export default FilterSelect;
