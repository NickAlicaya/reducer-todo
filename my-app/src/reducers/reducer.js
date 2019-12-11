export const initialState = {
	todos: [
		{
			todo: "Learn about reducers",
			completed: false,
			id: 3892987589
		}
	]
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: Date(),
						todo: action.text,
						completed: false
					}
				]
			};

		case "TOGGLE_COMPLETED":
			return {
				...state,

				todos: state.todos.map(todo =>
					todo.id === action.id
						? {
								...todo,
								completed: !todo.completed
						  }
						: todo
				)
			};

		case "CLEAR_COMPLETED":
			return {
				...state,
				todos: state.todos.filter(todo => !todo.completed)
			};

		default:
			return state;
	}
};
