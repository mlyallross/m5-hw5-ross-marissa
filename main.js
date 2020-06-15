//change background color on hover
var boxes = document.getElementsByClassName('boxes');

function changeColor() {
    document.getElementsByClassName('boxes').backgroundColor = "#03fc9d";
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', changeColor);
}


//message on box 1
var box1 = document.getElementById('Box-1');
var newPara1 = document.createElement("p");
newPara1.innerHTML = "Oooh - so close, but no cigar";

function soClose () {
    document.getElementById ('Box-1').appendChild(newPara1);
}

box1.addEventListener('click', soClose);

//message on box 2
var box2 = document.getElementById('Box-2');
var newPara2 = document.createElement("p");
newPara2.innerHTML = "DING DING DING - We have a winner";

function winner () {
    document.getElementById ('Box-2').appendChild(newPara2);
}

box2.addEventListener('click', winner);

//message on box 3
var box3 = document.getElementById('Box-3');
var newPara3 = document.createElement("p");
newPara3.innerHTML = "Oops, butter luck next time";

function oops () {
    document.getElementById ('Box-3').appendChild(newPara3);
}

box3.addEventListener('click', oops);


//button appear
var appear = document.getElementsByClassName('hidden');

function display () {
    element.classList.remove('hidden');
  }

appear.addEventListener('click', display);