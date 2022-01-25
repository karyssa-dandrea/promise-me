import { response } from 'msw';

export async function getFilms() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  return console.log(data);
}

export const fetchFilms = () => {
  const response = fetch('https://ghibliapi.herokuapp.com/films')
    .then((data) => data.json())
    .then((films) => console.log(films));
  return response;
};

export async function getBrews() {
  const resp = await fetch('https://api.openbrewerydb.org/breweries');
  const data = await resp.json();
  return console.log(data);
}

export const fetchBrews = () => {
  const response = fetch('https://api.openbrewerydb.org/breweries')
    .then((data) => data.json())
    .then((breweries) => console.log(breweries));
  return response;
};
