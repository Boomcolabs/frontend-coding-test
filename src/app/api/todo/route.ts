const API_URL = 'http://3.1.8.111:8080/todo';

export const getTodoList = async (name: string) => {
    try {
        const response = await fetch(`${API_URL}?name=${name}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const writeTodo = async (name: string, title: string) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, title }),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteTodo = async (name: string, id: number) => {
    try {
        const response = await fetch(API_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, id }),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
