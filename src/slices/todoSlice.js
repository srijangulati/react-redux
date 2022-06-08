import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    state: "default",
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    addTodos: (state, action) => {
      state.list = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export function fetchTodos() {
  return (dispatch) => {
    fetch("http://localhost:5001/api/todos")
      .then((res) => res.json())
      .then((res) => dispatch(todoSlice.actions.addTodos(res)));
  };
}

export function saveTodo(todo) {
  return dispatch => {
    fetch("http://localhost:5001/api/todos", {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: new Headers({'content-type': 'application/json'}),
    })
    .then((res) => res.json())
    .then((res) => dispatch(todoSlice.actions.addTodo(res)));
  }
}

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
