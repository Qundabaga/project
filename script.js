


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');
    if (a == null || b == null ||a.length == 0 || b.length == 0 || a.length > 50){
        i--;
        console.log("error");
    } else {
        personalMovieDB.movies[a] = b;
        console.log("done");
    }
}

if (personalMovieDB.count < 10){
    console.log("Просмотренно давольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
