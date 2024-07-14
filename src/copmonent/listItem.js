import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Button from '@mui/material/Button';

export const ListItem = ({ text, id, setTodo, delItem, editItem, todo }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
          alignItems: 'center',
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleChange}
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

        <Button variant="contained" onClick={() => delItem(id)}>
          Delete
        </Button>
        <Button variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </>
  );
};
