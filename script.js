"use strict";

/* let number = 5; //let - задаем перменную, переменная let позволяет потом переназначать значение переменной. знак = означает присвоить.
const leftBorderWidth = 1; // данная переменная является константой и не может быть перезаписана.

console.log(number); */ //выведение значения number в терминал

//Варианты названия переменных:

//snake_case
//UPPER_SNAKE_CASE let COLOR_RED = '#F00'
//Kebab-case
//PascalCase

/* const _apiBase = sfdnfl */

/* let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = "Alex"; //кавычки могут быть и двойные и одинарные и косые

const bool = true; //существуют данные с булиновыми значениями true или false

console.log(something);

const obj = {       //сщздается обьект, может включать много разных переменных и данных.
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj.name); //obj - обращение к обьекту. А через точку к конкретному значению в нем. Вместо точки можно использовать квадратные скобки и в них название переменной в кавычках

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp']; //arr сокращенно от array - массив, последовательность. может включать любые типы данных, объекты и друцгие массивы. Массив от объекта отличается тем что элементы всегда идут по порядку и имеют порядковый номер
console.log(arr[1]);//с помощью цифрі в квабратніх скобках мы обращаемся к о второму элементу массива. Счет начинается с нуля. Т.е. первое значение 0
    
} */
/* alert('Hello'); */ /* комманда alert выводит текст в браузер во всплывающем окне */
/* const result = confirm("Are you here?"); //комманда confirm выводит текст с кнопками ОК и Отмена
console.log(result); */

/* const answer = prompt("Вам есть 18?", "18"); //команда prompt нужна для получения ответа от пользователя сайта. В переменную answer запишиться то что пользовательзапишит во всплывающем окне
console.log(answer); */// чтобі узнать какой тип данных пользлватель внес в строку на сайте можно использовать следущую констркцию 
/* console.log(typeof(answer)); */ // выведит в консоль тип данных переменной answer. Это будет string. От пользователся всегда приходят данніе в формату  string. Можно изменить с помощью оператора +


// Получим несколько ответов от пользователя и запишем их в массив

/* const answers = [];

answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

document.write(answers); */

//Интерполяция

/* const category = 'toys';
console.log(`https://someurl.com/${category}/5`); //интерполяция - реализуется с помощью косых одинарных кавычек и значка $. служит для вставки переменной

const user = 'Dima';
alert(`Привет, ${user}`); */ // С помощью косых кавычек и значка доллара и фигурных скобок вставили переменную в описание команды

//Операторы

//Инкремент и Декремент Прибавление или отнимание еденицы
/* let incr = 10,
    decr = 10; */

/* incr++; // к переменной incr прибавить еденицу
decr--; */ // от переменной decr отнять еденицу. Это потфиксная форма, т.к. опреторы стоять после переменной. Может быть префиксная форма - когда стоят перед переменной.

/* console.log(++incr);
console.log(--decr); */ // Если стоят в префиксной форме работают, если в постфиксной форме то, только со слпедующего рза

// && - оператор "и"
// || - оператор "или"

/* const isChecked = true,
    isClose = true;

console.log(isChecked && isClose); */

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', ''); //плюс перед prompt означает, что мы хотим получить ответ в числовом формате
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b,
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);