import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../slices/todoSlice";

function AddTodo(props) {
  const [todo, setTodo] = useState('');

  const updateTodo = (event) => {
    setTodo(event.target.value);
  }

  const addCurrentTodo = () => {
    props.dispatch(addTodo({label: todo, id: Date.now()}));
    setTodo('');
  }
  return (
    <>
    <input value={todo} onChange={updateTodo}></input>
    <button onClick={addCurrentTodo}>Add Todo</button>
    </>
  )
}

export default connect()(AddTodo)