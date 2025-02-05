// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((films) => {
        return films.director;
    })
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSpielberg = moviesArray.filter((films) => {
        if (films.genre.includes('Drama') && films.director === 'Steven Spielberg') {
            return true
        }
    })
    return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length > 0) {
    const totalScore = moviesArray.reduce((acc, ele) => {
      if (typeof ele.score === "number"){
        return acc + ele.score;
      }
      else if (typeof ele.score !== "number"){
        return acc + 0
      }
    }, 0)
    
    let aveScore = totalScore / moviesArray.length;
    return Number(aveScore.toFixed(2));
  }

  else {
    return 0;
  }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((films) => {
    if (films.genre.includes('Drama')) {
      return true;
    }
  })

  if (dramaMovies.length > 0) {
    const dramaMoviesRating = dramaMovies.reduce((acc, ele) => {
      if (typeof ele.score === "number"){
        return acc + ele.score;
      }
      else if (typeof ele.score !== "number"){
        return acc + 0
      }
    }, 0)
  
    let aveScoreDrama = dramaMoviesRating / dramaMovies.length;
    return Number(aveScoreDrama.toFixed(2));
  }

  else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = moviesArray.map((films) => {
    return films;
  })

  const sortedByYear = newArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    }
    else if (b.year > a.year) {
      return -1
    }
    else {
      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
      }
      else {
        return 0
      }
    }
  })

  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArr = moviesArray.map((films) => {
    return films;
  })

  const orderAlpha = newArr.sort((a, b) => {
    if (a.title > b.title){
      return 1
    }
    else if (a.title < b.title) {
      return -1
    }
    else {
      return 0
    }
  })
  
  const first20 = orderAlpha.map((movie)=> movie.title).slice(0,20);
  return first20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArr = JSON.parse(JSON.stringify(moviesArray));

  const hoursToMin = newArr.map((movie) => {
    if (movie.duration.length < 3) {
      let hours = movie.duration.split("h");
      let hoursNumber = Number(hours[0]);
      let minutesFinal = (hoursNumber * 60)
      movie.duration = minutesFinal;
      return movie;
    }
    else{
      let hoursSplit = movie.duration.split(" ");
      let hours = hoursSplit[0].split("h");
      let hoursNumber = Number(hours[0]);
      let minutes = hoursSplit[1].split("min");
      let minutesNumber = Number(minutes[0]);
      let minutesFinal = (hoursNumber * 60) + minutesNumber;
      
      movie.duration = minutesFinal;
      return movie;
    }
    
  })

  return hoursToMin
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
