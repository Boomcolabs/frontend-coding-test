'use client';
import React, { useState } from 'react';
import '@/styles/components/_todoList.scss';

interface ITodo {
    id: string;
    title: string;
    isDone: boolean;
}

interface ITodoVerticalListProps {
    todos: ITodo[];
    onDelete: (id: string) => void;
}

const TodoVerticalList = ({ onDelete, todos }: ITodoVerticalListProps) => {
    const [selectedTodo, setSelectedTodo] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteClick = (id: string) => {
        setSelectedTodo(id); // Lưu ID của todo được chọn
        setIsModalOpen(true); // Hiển thị modal xác nhận
    };

    const confirmDelete = () => {
        if (selectedTodo) {
            onDelete(selectedTodo); // Gọi hàm xóa
        }
        setIsModalOpen(false); // Đóng modal
        setSelectedTodo(null); // Reset trạng thái
    };

    const cancelDelete = () => {
        setIsModalOpen(false); // Đóng modal
        setSelectedTodo(null); // Reset trạng thái
    };

    return (
        <>
            <div className="todo-vertical-list">
                {todos.map((todo) => (
                    <label className="todo-vertical-list-item" key={todo.id}>
                        <input id="isDone" type="checkbox" />
                        <p>{todo.title}</p>
                        <button onClick={() => handleDeleteClick(todo.id)}>
                            X
                        </button>
                    </label>
                ))}
            </div>

            {/* Modal Xác nhận */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete this todo?</p>
                        <div className="modal-actions">
                            <button onClick={confirmDelete}>Yes</button>
                            <button onClick={cancelDelete}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoVerticalList;
