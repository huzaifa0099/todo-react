import { 
  Button,
  Input
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
      <form style={{paddingLeft:"400px" , paddingRight:"400px", display:"flex",}} >
        
        <Input type='text' value={inputValue} onChange={handleChange}></Input>
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
