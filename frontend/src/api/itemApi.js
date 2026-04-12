import axios from './axios';

export const itemApi = {
  getItems: () => axios.get('/items'),
  getItem: (id) => axios.get(`/items/${id}`),
  createItem: (itemData) => axios.post('/items', itemData),
  updateItem: (id, itemData) => axios.put(`/items/${id}`, itemData),
  deleteItem: (id) => axios.delete(`/items/${id}`),
  getStats: () => axios.get('/items/stats'),
};