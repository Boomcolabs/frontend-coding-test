// pages/index.tsx
'use client';
import { useState, useEffect } from 'react';
import { getTodoList, writeTodo, deleteTodo } from '@/app/api/todo/route';

interface Todo {
    id: number;
    name: string;
    title: string;
    completed: boolean;
}

export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const handleToggleCompleted = async (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleAddTodo = async () => {
        try {
            const res = await writeTodo('hieucao', newTodo);
            if (res && res.success === true) {
                handleGetTodoList('hieucao');
                setNewTodo('');
            }
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleDeleteTodo = async (id: number) => {
        try {
            const res = await deleteTodo('hieucao', id);
            if (res && res.success === true) {
                handleGetTodoList('hieucao');
                setTodos(todos.filter((todo) => todo.id !== id));
            } else {
                alert(res.message);
            }
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };
    const handleGetTodoList = async (name: string) => {
        try {
            const res = await getTodoList(name);
            setTodos(res);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };
    useEffect(() => {
        handleGetTodoList('hieucao');
    }, []);
    return (
        <div style={{ padding: '20px' }}>
            <h1>Todo List</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                    style={{ padding: '10px', width: '300px' }}
                />
                <button
                    onClick={handleAddTodo}
                    style={{
                        padding: '10px 20px',
                        marginLeft: '10px',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Add Todo
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '10px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                checked={todo.completed || false}
                                onChange={() => handleToggleCompleted(todo.id)}
                                style={{ marginRight: '10px' }}
                            />
                            <span
                                style={{
                                    textDecoration: todo.completed
                                        ? 'line-through'
                                        : 'none',
                                }}
                            >
                                {todo.title}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#ff4d4f',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
