
let i=1;
function changePokemon(){
    let container = document.getElementById('pokemon');
    container.innerHTML = `<img class="poke" src='https://tinyurl.com/ironhack-pokemons/${i}.svg'>`;
}

let prev = document.getElementById('izq');
let next = document.getElementById('der');

prev.onclick = function(){
    if (i>0){
        i--;
        changePokemon();
    }
}
next.onclick = function(){
    if(i<650){
        i++;
        changePokemon();
    }
}

changePokemon();