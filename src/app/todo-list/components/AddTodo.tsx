'use client';
import React, { useState } from 'react';
import '@/styles/components/_todoList.scss';

interface IAddTodoProps {
    onAdd: (todo: string) => void;
}

const AddTodo = ({ onAdd }: IAddTodoProps) => {
    const [todo, setTodo] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleAddTodo = async () => {
        if (!todo.trim()) return;

        setIsLoading(true);
        await onAdd(todo); // Gọi hàm từ cha
        setTodo('');
        setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                value={todo}
                onChange={handleChange}
                placeholder="Add Todo"
                disabled={isLoading}
                className={isLoading ? 'disabled' : ''}
            />
            <button
                onClick={handleAddTodo}
                disabled={!todo.trim() || isLoading}
                className={isLoading ? 'loading' : ''}
            >
                {isLoading ? 'Adding...' : 'Add Todo'}
            </button>
        </div>
    );
};

export default AddTodo;
