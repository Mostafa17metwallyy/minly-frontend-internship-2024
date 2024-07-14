import { useState } from 'react';
import { ListItem } from './listItem';
import BasicSelect from './dropDown';
import SimplePopup from './popUp';
import Index from '@/pages';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const items = [
  { id: 1, text: 'Learn React', checked: false },
  { id: 2, text: 'Learn React Native', checked: false },
  { id: 3, text: 'Learn Redux', checked: false },
  { id: 4, text: 'Learn Node', checked: false },
  { id: 5, text: 'Learn GraphQL', checked: false },
];

export const TodoList = () => {
  const [todoList, setTodoList] = useState(items);
  const [newTodoText, setNewTodoText] = useState('');
  const [filter, setFilter] = useState('all');

  console.log(todoList);

  const addNewTodo = () => {
    const newItem = { id: Date.now(), text: newTodoText };
    setTodoList([...todoList, newItem]);
    setNewTodoText('');
  };

  const deleteItem = (id) => {
    return setTodoList(todoList.filter((item) => item.id !== id));
  };

  const editItem = (id, newText) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodoList = todoList.filter((item) => {
    if (filter === 'checked') {
      return item.checked;
    } else if (filter === 'unchecked') {
      return !item.checked;
    } else {
      return true;
    }
  });

  return (
    <>
      <h1 align="center">Todo List</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems:'center',
          margin:'30px'
        }}
      >
        <TextField
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          style={{
            width: '60%',
            marginRight: '10px',

          }}
        />

        <Button variant="contained" onClick={addNewTodo} style={{
          width:'15%'
        }}>
          Add Item
        </Button>
        <Select value={filter} onChange={handleFilterChange} style={{
          width: '15%',
          marginRight: '10px',
        }}>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'checked'}>Checked</MenuItem>
          <MenuItem value={'unchecked'}>Unchecked</MenuItem>
        </Select>
      </div>

      <div style={{
        margin:'30px'
      }}>
        {filteredTodoList.map((item) => (
          <ListItem
            text={item.text}
            id={item.id}
            setTodo={setTodoList}
            delItem={deleteItem}
            editItem={editItem}
            todo={todoList}
            checked={item.checked}
            items={items}
          />
        ))}
      </div>
    </>
  );
};
export default TodoList;
