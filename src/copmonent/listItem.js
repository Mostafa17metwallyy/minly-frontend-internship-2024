
export const ListItem =()=>{
    const delItem=(index)=> {
        const newTodo = [...todo]
        newTodo.splice(index, 1)
        setNewTodo(newTodo)
        console.log(newTodo)
    
    }
    return <>
    <br></br>
    <br></br>
    <button onClick={delItem}>Delete Task</button>
    <br></br>
    <br></br><input type="text"
    placeholder=""
    ></input>

    </>
  
  }
  