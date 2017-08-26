/*
author: Gabriela Castro <gabrielacastro.sousa@gmail.com>
description: guessing game
*/
window.onload = function firstLoad(){
document.getElementById("header").innerText = "Carregue no botão e coloque o celular na testa para começar.";

}

var count = new Number();
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
"Taylor Swift", "Ivete Sangalo", "Miley Cyrus", "Wagner Moura", "Camila Pitanga", "Hugh Jackman", "Neil Patrick Harris"];

var movie = ["Senhor dos Anéis", "Birdman", "Titanic", "Harry Potter", "Hunger Games", "Bonequinha de Luxo", "MIB",
"Star Wars", "Star Trek", "Superman", "Pulp Fiction", "Iron Man", "Batman", "A culpa é das estrelas", "Uma linda Mulher",
"Django livre", "Piratas do Caribe", "Kill Bill", "Crepúsculo","Wonder Woman", "127 horas", "300", "Avatar","Cisne Negro",
"Poderoso Chefão", "Meninas Malvadas", "Aladdin", "A Bela e a Fera", "Cinderela", "Alice no país das Maravilhas", "Matrix",
"Orgulho e Preconceito", "A Fantástica Fábrica de Chocolate"];

var numeroSorteados= [-1];
//faz o sorteio do numero
function sorteio(){
    
    do{
        
        
        var numeroSorteado = Math.round((Math.random() * artist.length)) ;
    
    }while(checarSorteado(numeroSorteado, numeroSorteados));   
    numeroSorteados.push(numeroSorteado);
    
    
    return( numeroSorteado);
}
//checa se o numero sorteado foi anteriormente sorteado
function checarSorteado(numero,vetor){
    for (i=0;i<vetor.length;i++){
        if (vetor[i]==numero){
            return true;
        }
     else {
        return false;
     }
}
}
function game(){
    var index = sorteio();
    
    header.innerText= artist[index];
  
    concluir.style.display="block";
    desistir.style.display="block";
   
    }

    function conclui(){
        game();
    }

    function desisti(){
        location.reload();
    }