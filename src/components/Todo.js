import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../slices/todoSlice";

function Todo(props) {

  useEffect(() => {
    props.dispatch(fetchTodos());
  }, []);

  return (
    <>
      {props.todos.map((todo) => (
        <div key={todo.id}>{todo.label}</div>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({ todos: state.todo.list })

export default connect(mapStateToProps)(Todo);

