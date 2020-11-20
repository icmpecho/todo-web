import axios from 'axios';

export const todoItems = () => axios.get('/api/todoItems');
export const addTodoItem = (name) => axios.post('/api/todoItems', { name });
export const markDone = (id) => axios.post('/api/todoItems/complete', { id });