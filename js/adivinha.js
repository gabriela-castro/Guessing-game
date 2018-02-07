/*
author: Gabriela Castro <gabrielacastro.sousa@gmail.com>
description: guessing game
*/
window.onload = function firstLoad(){
document.getElementById("header").innerText = "Carregue no botão e coloque o celular na testa para começar.";

}
//var fase = 1; //para controlar a fase do jogo;
var count = new Number(); //para controlar o contador para iniciar o jogo;
var count = 4;
//timeout to start the game
function timing(){
    start.style.display="none";
    if((count-1) >0){
        count=count-1;
        header.innerText=count;
        setTimeout('timing();', 1000);
    }else{
         game();
    }
}


var artist = ["Rihanna","Katy Perry","Michael Jackson","Beyonce","Madonna", "Lily Allen", "Janet Jackson", "Matt Damon", "Tom Cruise",
"Brad Pitt","Leonardo DiCaprio","Johnny Depp","Will Smith", "Tom Hanks", "Xuxa", "Robert Downey Jr.", "Angelina Jolie",
"Susana Vieira", "Arnold Schwarzenegger", "Meryl Streep","George Clooney", "Bruna Marquesine", "John Travolta", "Julia Robert",
"Robert Pattinson", "Sandra Bullock", "Gretchen", "Neymar Jr.", "Bruce Willis", "Bill Murray", "Jim Carrey", "Sylvester Stallone",
"Anitta", "Gisele Bundchen", "Adam Sandler", "Kate Winslet", "Daniel Radcliffe", "Mel Gibson", "Tatá Werneck", "Jennifer Aniston",
"Jennifer Lawrence","Ana Maria Braga", "Charlie Sheen", "Natalie Portman", "Harrison Ford", "Emma Watson", "Kevin Spacey",
"Danil Craig", "Nicholas Cage", "Lindsay Lohan", "Jack Nicholson", "Morgan Freeman", "Scarlett Johanson", "Halle Berry",
"Taylor Swift", "Ivete Sangalo", "Miley Cyrus", "Wagner Moura", "Camila Pitanga", "Hugh Jackman", "Neil Patrick Harris"];//0-60

var movie = ["Senhor dos Anéis", "Birdman", "Titanic", "Harry Potter", "Hunger Games", "Bonequinha de Luxo", "MIB",
"Star Wars", "Star Trek", "Superman", "Pulp Fiction", "Iron Man", "Batman", "A culpa é das estrelas", "Uma linda Mulher",
"Django livre", "Piratas do Caribe", "Kill Bill", "Crepúsculo","Wonder Woman", "127 horas", "300", "Avatar","Cisne Negro",
"Poderoso Chefão", "Meninas Malvadas", "Aladdin", "A Bela e a Fera", "Cinderela", "Alice no país das Maravilhas", "Matrix",
"Orgulho e Preconceito", "A Fantástica Fábrica de Chocolate"];//0-32

var numeroSorteados= [];
//faz o sorteio do numero
function sorteio(vetor){

    do{


        var numeroSorteado = Math.round((Math.random() * vetor)) ;

    }while(checarSorteado(numeroSorteado, numeroSorteados, vetor));
    numeroSorteados.push(numeroSorteado);
    return(numeroSorteado);
}
//checa se o numero  foi anteriormente sorteado
function checarSorteado(numero,sorteados,vetor_fase){
//verifica se está dentro dos números do índice do array
if(numero<vetor_fase-1 && numero>0){
  for (i=0;i<sorteados.length;i++){
        if (sorteados[i]==numero){
          return true;
        }
     else {
        return false;
     }
    }
  }
  else {
  return true;
  }
}

var fase=1;
function game(){

  if (fase==1||fase==2){
    var index = sorteio(artist.length);
    array_sorteado= artist[index];
  } else if(fase==3||fase==4){
    var index = sorteio(movie.length);
    array_sorteado= movie[index];
  }
  header.innerText= array_sorteado;

 switch (numeroSorteados.length) {
    case 0:header.innerText= artist[index];
    concluir.style.display="block";
    desistir.style.display="block";
    break;
    case 9: header.innerText= "Fase 2";
    fase=2;
    concluir.style.display="none";
    desistir.style.display="none";
    setTimeout(function(){ header.innerText= artist[index];
    concluir.style.display="block";
    desistir.style.display="block";}, 3000);
      break;

    case 17: header.innerText= "Fase 3";
    fase=3;
    concluir.style.display="none";
    desistir.style.display="none";
    setTimeout(function(){ header.innerText= movie[index];
    concluir.style.display="block";
    desistir.style.display="block";}, 3000);
    break;

    case 26:  header.innerText= "Fase 4";
    fase=4;
    concluir.style.display="none";
    desistir.style.display="none";
    setTimeout(function(){ header.innerText= movie[index];
    concluir.style.display="block";
    desistir.style.display="block";}, 3000);
    break;

    case 36:header.innerText= "Parabéns! Recomece o jogo novamente.";
    concluir.style.display="none";
    desistir.style.display="none";
    setTimeout(function(){
  desisti();}, 3000);
    break;

    default:
    //header.innerText= artist[index];
    concluir.style.display="block";
    desistir.style.display="block";
  }

    }

    function conclui(){
        game();
    }

    function desisti(){
        location.reload();
    }
