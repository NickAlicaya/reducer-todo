import React from "react";
import Todo from "./Todo";

const TodoList = props => {
	const { todos, toggleCompleted } = props;
	// console.log("TODOLIST props", props);
	return (
		<div>
			{todos.map(todo => (
				<Todo key={todo.id} {...todo} toggleCompleted={toggleCompleted} />
			))}
		</div>
	);
};
export default TodoList;
