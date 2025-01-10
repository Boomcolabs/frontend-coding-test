'use client';
import { useState, useEffect } from 'react';
import '@/styles/todoList.scss';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const YOUR_NAME = 'bahar';

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch(
                `http://3.1.8.111:8080/todo?name=${YOUR_NAME}`
            );
            const data = await response.json();
            setTodos(data || []);
        } catch (error) {
            console.error('Error fetching todos:', error);
            setTodos([]);
        }
    };

    const addTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        try {
            const response = await fetch('http://3.1.8.111:8080/todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: YOUR_NAME, title: newTodo }),
            });

            // Log the response to see its structure
            const newTodoItem = await response.json();
            console.log('New todo response:', newTodoItem);

            // Wait a brief moment before fetching the updated list
            await fetchTodos();
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const toggleTodo = async (id: number, completed: boolean) => {
        try {
            const updatedTodos = todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !completed } : todo
            );
            setTodos(updatedTodos);

            await fetch('http://3.1.8.111:8080/todo', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: YOUR_NAME,
                    id,
                    completed: !completed,
                }),
            });
        } catch (error) {
            console.error('Error toggling todo:', error);
            setTodos(todos);
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            await fetch('http://3.1.8.111:8080/todo', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: YOUR_NAME, id }),
            });
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="todo-list min-h-screen bg-[#F5F5F5] py-8">
            <div className="max-w-3xl mx-auto">
                <div className="header">
                    <h1>My To Do List</h1>
                </div>

                <form className="input-section" onSubmit={addTodo}>
                    <input
                        type="text"
                        placeholder="Title..."
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button type="submit" disabled={!newTodo.trim()}>
                        Add
                    </button>
                </form>

                <div className="todo-items">
                    {todos?.map((todo) => (
                        <div
                            key={`todo-${todo.id}`}
                            className={`todo-item ${todo.completed ? 'completed' : ''}`}
                        >
                            <input
                                type="checkbox"
                                checked={todo.completed || false}
                                onChange={() =>
                                    toggleTodo(todo.id, todo.completed)
                                }
                            />
                            <span className="todo-text">{todo.title}</span>
                            <button
                                type="button"
                                className="delete-btn"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
