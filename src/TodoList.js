import React, {useState} from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo ] = useState('');

    const handleAddTodo = () =>{
        if(newTodo.trim() !== ''){
                setTodos([...todos, newTodo]);
                setNewTodo('');
        }
        console.log(todos);
        console.log(newTodo);
    };

    const handleRemoveTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index,1);
        setTodos(updatedTodos);
    }
    return(
        <div>
            <h2>Coming projects innaminit</h2>
            <input
            type = "text"
            value = {newTodo}
            onChange = {(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new task ..."
            />
            <button onClick = {handleAddTodo}> Add </button>

        </div>
    );
}

export default TodoList;