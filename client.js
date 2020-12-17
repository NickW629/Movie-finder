const $movieSuggestions = document.getElementById("movieSuggestions");
  const comedyData = loadComedy();
  const dramaData = loadDrama();
  const horrorData = loadHorror();
  const scifiData = loadScifi();


function showComedyMovie() {
  
  comedyData.comedyMovies.forEach(comedyMovie => {
      const $comedyMovie = document.createElement("div")
      $comedyMovie.innerHTML = `<h2>${comedyMovie.title} </h2>`
      $comedyMovie.innerHTML += `<ol>${"released: "+comedyMovie.released} </ol>`
      $comedyMovie.innerHTML += `<ol>${"Directed by:  "+comedyMovie.director}</ol>`
      $movieSuggestions.append($comedyMovie)
  } )                              
}                    
function showDramaMovie() {
  dramaData.dramaMovies.forEach(dramaMovie => {
      const $dramaMovie = document.createElement("div")
      $dramaMovie.innerHTML = `<h2>${dramaMovie.title} </h2>`
      $dramaMovie.innerHTML += `<ol>${"released:  "+dramaMovie.released}<ol>`
      $dramaMovie.innerHTML += `<ol>${"Directed by:  "+dramaMovie.director}<ol>`
      $movieSuggestions.append($dramaMovie)
  } )                              
}        
function showHorrorMovie() {
  horrorData.horrorMovies.forEach(horrorMovie => {
      const $horrorMovie = document.createElement("div")
      $horrorMovie.innerHTML = `<h2>${horrorMovie.title} </h2>`
      $horrorMovie.innerHTML += `<ol>${"released:  "+horrorMovie.released}<ol>`
      $horrorMovie.innerHTML += `<ol>${"Directed by:  "+horrorMovie.director}<ol>`
      $movieSuggestions.append($horrorMovie)
  } )                              
}        
function showScifiMovie() {
  scifiData.scifiMovies.forEach(scifiMovie => {
      const $scifiMovie = document.createElement("div")
      $scifiMovie.innerHTML = `<h2>${scifiMovie.title} </h2>`
      $scifiMovie.innerHTML += `<ol>${"released:  "+scifiMovie.released}<ol>`
      $scifiMovie.innerHTML += `<ol>${"Directed by:  "+scifiMovie.director}<ol>`
      $movieSuggestions.append($scifiMovie)
  } )                              
}        

$("#submit").click(function() { 
   $option = $("select[name='moviePrefernce']").val();
  
  if($option == "comedy"){
    $("#movieSuggestions").empty();
    showComedyMovie()
  }
  else if($option == "drama"){
     $("#movieSuggestions").empty();
     showDramaMovie()
  }
  else if($option == "horror"){
     $("#movieSuggestions").empty();
     showHorrorMovie()
  }
  else if($option == "scifi"){
     $("#movieSuggestions").empty();
     showScifiMovie()
  }
})

function loadComedy() {
 const comedyMovies = [
   {
     "title" : "The War with Grandpa",
     "released" : "2020",
     "director" : "Tim Hill",
   },
   { 
     "title" : "Office Christmas Party",
     "released" : "2016 ",
     "director" : "Josh Gordon, Will Speck" ,
   },
   {
      "title" : "Dolittle",
     "released" : "2020 ",
     "director" : "Stephen Gaghan",
   },
      {
      "title" : "Deadpool",
     "released" : "2016 ",
     "director" : "Tim Miller",
      },
 ]
 return{
   "comedyMovies" : comedyMovies
 }
}
  
  function loadDrama() {
  const dramaMovies = [
   {
     "title" : "I'm Your Woman",
     "released" : "2020",
     "director" : "Julia Hart",
   },
   {
     "title" : "The King",
     "released" : "2019 ",
     "director" : "David Michôd" ,
   },
   {
      "title" : "The Devil All the Time",
     "released" : "2020 ",
     "director" : "Antonio Campos",
   },
      {
      "title" : "The Call of the Wild",
     "released" : "2020 ",
     "director" : "Chris Sanders",
      },
 ]
 return{
   "dramaMovies" : dramaMovies
 }
  }
function loadHorror() {
  const horrorMovies = [
   {
     "title" : "Ma",
     "released" : "2019",
     "director" : "Tate Taylor",
   },
   {
     "title" : "The Autopsy of Jane Doe",
     "released" : "2016 ",
     "director" : "André Øvredal" ,
   },
   {
      "title" : "Pet Sematary",
     "released" : "2019 ",
     "director" : "Kevin Kolsch, Dennis Widmyer",
   },
      {
      "title" : "Midsommar",
     "released" : "2019 ",
     "director" : "Ari Aster",
      },
 ]
 return{
   "horrorMovies" : horrorMovies
 }
  }
function loadScifi() {
  const scifiMovies = [
   {
     "title" : "Possessor",
     "released" : "2020",
     "director" : "Brandon Cronenberg",
   },
   {
     "title" : "Gemini Man",
     "released" : "2019 ",
     "director" : "Ang Lee" ,
   },
   {
      "title" : "Ready Player One",
     "released" : "2018 ",
     "director" : " Steven Spielberg",
   },
      {
      "title" : "Star Wars: Episode III – Revenge of the Sith",
     "released" : "2005  ",
     "director" : "George Lucas",
      },
 ]
 return{
   "scifiMovies" : scifiMovies
 }
  }

