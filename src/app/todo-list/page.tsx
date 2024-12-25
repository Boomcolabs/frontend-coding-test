'use client';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoVerticalList from './components/TodoVerticalList';
import '@/styles/components/_todoList.scss';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    // Fetch todos from API
    const fetchTodos = async () => {
        try {
            const response = await fetch(
                'http://3.1.8.111:8080/todo?name=tunq'
            );
            const data = await response.json();
            setTodos(data || []);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    // Handle add todo
    const handleAddTodo = async (todo: string) => {
        try {
            const response = await fetch('http://3.1.8.111:8080/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: 'tunq', title: todo }),
            });

            const data = await response.json();
            if (data.success) {
                await fetchTodos(); // Refresh the list after adding
            }
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    // Handle add todo
    const handleDeleteTodo = async (id: string) => {
        try {
            const response = await fetch('http://3.1.8.111:8080/todo', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: 'tunq', id: id }),
            });

            const data = await response.json();
            if (data.success) {
                await fetchTodos(); // Refresh the list after adding
            }
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };
    // Fetch todos on mount
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="main">
            <div className="todo-list-title">
                <h1>My To Do List</h1>
                <AddTodo onAdd={handleAddTodo} />
            </div>
            <TodoVerticalList todos={todos} onDelete={handleDeleteTodo} />
        </div>
    );
}
