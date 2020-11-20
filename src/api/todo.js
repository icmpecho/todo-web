import axios from 'axios';
const getData = (resp) => resp.data;
export const todoApi = (baseUrl = '') => ({
    todoItems: () => axios.get(`${baseUrl}/api/todoItems`).then(getData),
    addTodoItem: (name) => axios.post(`${baseUrl}/api/todoItems`, { name }).then(getData),
    markDone: (id) => axios.post(`${baseUrl}/api/todoItems/complete`, { id }).then(getData),
});