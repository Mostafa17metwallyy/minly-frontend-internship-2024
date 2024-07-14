import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Button from '@mui/material/Button';

export const ListItem = ({
  text,
  id,
  setTodo,
  delItem,
  editItem,
  todo,
  items,
  checked,
}) => {
  const [editText, setEditText] = useState(text);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    if (isEditMode) {
      editItem(id, editText);
      setIsEditMode(false);
    } else {
      setIsEditMode(true);
    }
  };

  const handleCheckboxChange = (event) => {
    setTodo((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, checked: event.target.checked } : item
      )
    );
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        {isEditMode ? (
          <TextField
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <p>{text}</p>
        )}
        <div>
          <Button
            variant="contained"
            onClick={() => delItem(id)}
            style={{
              backgroundColor: 'red',
              float: 'right',
            }}
          >
            Delete
          </Button>
          <Button variant="contained" onClick={handleEdit}>
            Edit
          </Button>
        </div>
      </div>
    </>
  );
};
