import React from "react";

const Todo = props => {
	const { id, toggleCompleted, todo, completed } = props;

	return (
		<div
			onClick={() => toggleCompleted(id)}
			// className={`todo${todo.completed ? " completed" : ""}`}
			style={{textDecoration: completed ? "line-through" : "none"}}
		>
			<p>{todo}</p>
		</div>
	);
};

export default Todo;
