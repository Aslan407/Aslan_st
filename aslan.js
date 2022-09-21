"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотели?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

const a = prompt('Один из последних просморенных фильмов', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из последних просморенных фильмов', ''),
      d = prompt('На сколько оцените его', '');


   personalMovieDB.movies[a] = b;
   personalMovieDB.movies[c] = d;
   console.log(personalMovieDB);
