import { connect } from "react-redux";

function Todo(props) {
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

