import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
        <br></br>
        <AddTodo></AddTodo>
        <Todo></Todo>
      </div>
    </Provider>
  );
}

export default App;
