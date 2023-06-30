/**
 * Context API in React
 */

import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../helpers/useLocalstorage';




/* My Context is placed here. */
const TodoContext = createContext({});

const TodoContextContainer = ({ children }) => {
    const [todoList, setTodoList] = useLocalStorage("mytodos", []);
    const [text, setText] = useState("");

    const handleSetText = (e) => {
        setText(e.target.value);
    }
    const removeItem = (id) => {
        const newList = todoList.filter(todo => todo.id !== id);
        setTodoList(newList);
    }
    const addItem = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Cannot add empty todo.");
            return;
        }
        const id = todoList.reduce((max, current) => max > current.id ? max : current.id, 0) + 1;

        const newTodo = {
            id, task: text, completed: false
        };
        setTodoList([...todoList, newTodo]);
        setText("");
    }
    const changeStatus = (id) => {
        const todos = todoList.filter(item => true); // Making a shallow copy
        const todo = todos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        setTodoList(todos);
    }
    return (
        <TodoContext.Provider value={{
            text, handleSetText, todoList, removeItem,
            addItem, changeStatus
        }}>
            {children}
        </TodoContext.Provider >
    )
}
/* My Context is placed here. */


/* My component that will consume the context */
const MyTodoApp = () => {
    const { text, handleSetText, todoList, removeItem, addItem, changeStatus } = useContext(TodoContext);

    return (
        <div>
            <h3>Todo List:</h3>
            <form onSubmit={addItem}>
                <input type='text' value={text} onChange={handleSetText} />
                <button>submit</button>
            </form>
            {
                todoList.map(todo => (
                    <div key={todo.id}>
                        <p>Task: {todo.task}</p>
                        <input type="checkbox" checked={todo.completed} onChange={() => changeStatus(todo.id)} />
                        <button onClick={() => removeItem(todo.id)}>Delete Todo</button>
                    </div>
                ))
            }
        </div>
    )
}
/* My component that will consume the context */


const Question14 = () => {
    return (
        <div>
            <TodoContextContainer>
                <MyTodoApp />
            </TodoContextContainer>
        </div>
    )
}

export default Question14;