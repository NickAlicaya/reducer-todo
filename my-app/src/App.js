import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { reducer, initialState } from "./reducers/reducer";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const addTodo = todo => dispatch({ type: "ADD_TODO", text: todo });
	const toggleCompleted = id => dispatch({ type: "TOGGLE_COMPLETED", id: id });
	const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

	// console.log(state.todos);
	return (
		<div className="App">
      <div>
		<TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
      </div>
	  <div>
     	 <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
      </div>
		</div>
	)
}

export default App;
