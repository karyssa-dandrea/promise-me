import { response } from 'msw';

export async function getFilms() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  return data;
}

export const fetchFilms = () => {
  const response = fetch('https://ghibliapi.herokuapp.com/films').then((data) =>
    data.json()
  );
  return response;
};
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
