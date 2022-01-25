import React from 'react';
import { getFilms } from './services/promise-me';
import { fetchFilms } from './services/promise-me';

export default function App() {
  console.log(getFilms());
  console.log(fetchFilms());
  return <h1>Hello World</h1>;
}
