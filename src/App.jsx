import { 
  Button
 } from 'antd';
import { useState } from 'react'

function TodoList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return (
    <div>
      <h1 style={{paddingLeft:"600px", backgroundColor:"yellow",}}>Todo List</h1>
      <form style={{paddingLeft:"570px"}} >
        
        <input style={{padding: "7px"}} type='text' value={inputValue} onChange={handleChange}/>
        <Button type='primary' onClick={handleSubmit}>Add</Button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li style={{paddingLeft:"530px", listStyle:"none"}} key={index}>{todo} 
          <Button type='primary' danger  onClick={() =>handleDelete(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
