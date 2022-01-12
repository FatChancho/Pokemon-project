let count = 1;

function render() {
  let container = document.getElementById("pokemon");

  container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

function right() {
  if (count < 650) {
    count++;
    render();
  }
}
function left() {
  if (count > 1) {
    count--;
    render();
  }
}

let body = document.querySelector("body");
body.addEventListener("keydown", function (e) {
  //change pokemon using arrows
  if (e.key === "ArrowRight") {
    right();
  } else if (e.key === "ArrowLeft") {
    left();
  }
});

let previous = document.getElementById("previous");
previous.onclick = function () {
  left();
};

let next = document.getElementById("next");
next.onclick = function () {
  right();
};

let send = document.getElementById("send");

send.onclick = function number(x) {
  let container = document.getElementById("pokemon");
  console.log(container);

  if (i.value > 0 && i.value < 650) {
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${i.value}.svg">`;

    count = i.value;

    clear();
  }
};

let enter = document.getElementById("number");

enter.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    number(i.value);
  }
});

let i = document.querySelector("input");

function clear() {
  //Erase de input data
  enter.value = "";
}

function number(x) {
  let container = document.getElementById("pokemon");
  container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${i.value}.svg">`;
  count = i.value;
  clear();
}
clear(); //Erase the data input at refresh the page
render();
