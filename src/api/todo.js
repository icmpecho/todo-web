import axios from 'axios';

export const todoItems = () => axios.get('/api/todoItems');
export const addTodoItem = (todoItem) => axios.post('/api/todoItems', todoItem);