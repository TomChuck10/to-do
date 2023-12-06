import React from "react";

function Todo(props) {
	const { todo, handleCloseClick } = props;
	return (
		<div className='Todo'>
			<span>
				{todo.id}. {todo.text}
			</span>
			<button className='close' onClick={() => handleCloseClick(todo.id)}>
				X
			</button>
		</div>
	);
}

export default Todo;
