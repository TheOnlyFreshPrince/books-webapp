import axios from 'axios';
const url = "http://localhost:5000/books";

export const fetchBooks = () => axios.get(url);
export const createBook = (newBook) => axios.post(url, newBook);
export const updateBook = (id, updatedBook) => axios.patch(`${url}/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`${url}/${id}`);
export const likeBook = (id) => axios.patch(`${url}/${id}/likeBook`);
export const returnBook = (id) => axios.patch(`${url}/${id}/returnBook`);