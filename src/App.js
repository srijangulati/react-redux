import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo></AddTodo>
        <Todo></Todo>
      </div>
    </Provider>
  );
}

export default App;
