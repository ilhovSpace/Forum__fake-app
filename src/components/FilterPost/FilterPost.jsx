import React, {useContext, useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import {GlobalContextState, GlobalContextActions} from '../../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
    width: 300,
    transition: 'none !important'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 10,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 3;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      transition: 'none !important',
      transformOrigin: '0px 0px',
    },
  },
};

export default function MultipleSelect() {
  const {getAllUsers} = useContext(GlobalContextActions)
  const {users, filterPosts} = useContext(GlobalContextState)
  // const [selectedUsers, setSelectedUsers] = useState([])
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  useEffect(()=>{
    getAllUsers()
  },[])

useEffect(()=>{
  filterPosts(personName)
},[personName])
  const handleChange = (event) => {
    setPersonName(event.target.value);
    // ;
    // filterPosts(event.target.value)
    // setSelectedUsers(event.target.value);
  };

  const clearFilter = () => {
    setPersonName([])
    // setSelectedUsers([])
  }
  // const handleChangeMultiple = (event) => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   setPersonName(value);
  // };
// console.log('render filter')
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Filter По пользователям</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {users.map(({name, id}) => (
            <MenuItem key={name} value={id} id={id}>
              <Checkbox checked={personName.indexOf(id) > -1} />
              <ListItemText primary={`${name} (user id: ${id})`} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button onClick={clearFilter}>Clear Filter</button>
    </div>
  );
}
