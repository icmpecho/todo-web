import axios from 'axios';
export const todoApi = (baseUrl = '') => ({
    todoItems: () => axios.get(`${baseUrl}/api/todoItems`),
    addTodoItem: (name) => axios.post(`${baseUrl}/api/todoItems`, { name }),
    markDone: (id) => axios.post(`${baseUrl}/api/todoItems/complete`, { id }),
});