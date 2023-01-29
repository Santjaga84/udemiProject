/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

//Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while(numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
   start();
   }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};



function rememberMyFilms() {
  for(let i = 0;i < 2;i++){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцениваете его?', '');

  if(a != null && b != null && a != '' && b != '' && a.length < 50){
    personalMovieDB.movies[a] = b;
  }else{
    i--;
  }      
 }
}

//rememberMyFilms();


function detectPersonalLevel(){
  if(personalMovieDB.count < 10 ){
  console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log("Вы классический зритель");
} else if(personalMovieDB.count >= 30){
  console.log("Вы киноман");
}else{
  console.log("Произошла ошибка");
 }
}

//detectPersonalLevel();

function showMyDB(hidden){
  if(!hidden){
     console.log(personalMovieDB)
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for(let i = 1;i <= 3;i++){
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);;
   }
}

writeYourGenres();

function calculateVolumeAndArea(num) {
  if(Number.isInteger(num) && num > 0){
     let S = 6 * num * num;
     let V = num * num * num;
     console.log(`'Объем куба:${V}, площадь всей поверхности:${S} `);
  }else{
   console.log( "При вычислении произошла ошибка");
  }
 }
 calculateVolumeAndArea(-15);


 function getCoupeNumber(num) {
  
  if(typeof num !=='number' || num < 0 || Number.isInteger(num) !== true){
      console.log("Ошибка. Проверьте правильность введенного номера места");
  }else if(num == 0 || num > 36){
    console.log("Таких мест в вагоне не существует");
  }else{
  let N = Math.ceil(num/4);
    console.log(N);
    
  }
}

getCoupeNumber(300);