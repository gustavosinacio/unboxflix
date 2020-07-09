import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const apiToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWQ0YTA0YzFmZDQ2YjAxMGJiZjJjOGUyYzA5MDQxYiIsInN1YiI6IjVmMDYwZWFiMTNhMzIwMDAzNTZmYmQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JWqOm1sdn5olqp0OeIMhiy6RI60o8arFdoWOF4ON_94';

api.defaults.headers.Authorization = `Bearer ${apiToken}`;

export default api;
