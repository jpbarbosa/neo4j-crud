import axios from 'axios';
import { Person } from '@neo4j-crud/shared';

const url = `${import.meta.env.VITE_API_URL}/people`;

export const people = {
  getAll: (search = '') =>
    axios.get<Person[]>(`${url}?search=${search}`).then((res) => res.data),

  getById: (id: number) =>
    axios.get<Person>(`${url}/${id}`).then((res) => res.data),
};
