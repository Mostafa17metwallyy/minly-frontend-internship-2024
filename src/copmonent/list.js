import {useState} from "react";
import { ListItem } from "./listItem";
import BasicSelect from "./dropDown"
import SimplePopup from "./popUp";

export const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    
    const addTodo = () => {
      if (newTodo.trim() === '') return;
      setTodo([...todo, newTodo]);
      setNewTodo('');
      print=console.log(newTodo)
    };
    
    return<>
    <h1 align="center">Todo List</h1>
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',width:'100%'}}>
    <SimplePopup></SimplePopup>
    </div>
    <br></br>
    <br></br>
    
    <ListItem/>
    <BasicSelect/>
    </>
  
  }
  export default TodoList;