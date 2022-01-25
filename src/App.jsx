import React, { useEffect } from 'react';
import { fetchBrews, getBrews, getFilms } from './services/promise-me';
import { fetchFilms } from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchFilms();
  });

  useEffect(() => {
    fetchBrews();
  });

  useEffect(() => {
    getBrews();
  });

  useEffect(() => {
    getFilms();
  });

  return <h1>Hello World</h1>;
}
