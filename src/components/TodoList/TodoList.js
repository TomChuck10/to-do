import React, { useState } from "react";
import Todo from "./Todo";

function TodoList() {
	const [todoListState, setTodoListState] = useState({
		todos: [],
		inputValue: "",
		count: 1,
		error: "",
	});

	const handleInputChange = event => {
		const { value } = event.target;
		setTodoListState({
			...todoListState,
			inputValue: value,
		});
	};

	const handleButtonClick = () => {
		const { todos, count, inputValue } = todoListState;

		if (!inputValue) {
			return;
		}

		const newTodo = {
			id: count,
			text: inputValue,
		};

		if (todos.some(todo => todo.text === inputValue)) {
			setTodoListState({
				...todoListState,
				error: "To zadanie już istnieje",
				inputValue: "",
			});
			return;
		}

		setTodoListState({
			todos: [...todos, newTodo],
			inputValue: "",
			error: "",
			count: count + 1,
		});
	};

	const handleTodoRemove = todoId => {
		setTodoListState({
			...todoListState,
			todos: todos.filter(todo => todo.id !== todoId),
		});
	};

	const { todos, inputValue, error, count } = todoListState;

	return (
		<div className='container'>
			Moja aplikacja Todo
			<input
				className='input'
				name='Todo Input'
				placeholder='Co będziemy dzisiaj robić?'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<button onClick={handleButtonClick} className='btn'>
				Dodaj
			</button>
			{!!error && <p>{error}</p>}
			{todos.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					count={count}
					handleCloseClick={handleTodoRemove}
				/>
			))}
		</div>
	);
}

export default TodoList;
