const shapeCircle = document.getElementById('shape__btn-circle'); //button circle 
const shapeSquare = document.getElementById('shape__btn-square'); //button square
const showCircle = document.querySelector(".type__circle"); // circle type 
const showSquare = document.querySelector(".type__square"); // square type
const reset = document.querySelector(".reset__btn");
let showShapeChecker = 0;
let showCircleChecker = 0;
let showSquareChecker = 0;
const colors = [   //colors array
    {
      title: "Красный",
      hex: "#E32636"
    },
    {
      title: "Желтый",
      hex: "#FDE910"
    },
    {
      title: "Зеленый",
      hex: "#138808"
    },
    {
      title: "Синий",
      hex: "#1560BD"
    }
  ];
//click on circle btn and show circle
shapeCircle.addEventListener('click', function() {
showCircle.style.display = 'block';
showSquare.style.display = 'none';
showShapeChecker ++; // for choose shape and alert
showCircleChecker = 1;
if (showSquareChecker) {
    showCircle.style.backgroundColor = 'black';
    showSquare.style.backgroundColor = 'black';
    showSquareChecker = 0;
    typeText.textContent = "";
}
});
//click on square btn and show square
shapeSquare.addEventListener('click', function() {
showSquare.style.display = 'block';
showCircle.style.display = 'none';
showShapeChecker ++;
showSquareChecker = 1;
//showChecker(showCircleChecker, showSquareChecker);
if (showCircleChecker) {
    showCircle.style.backgroundColor = 'black';
    showSquare.style.backgroundColor = 'black';
    showCircleChecker = 0;
    typeText.textContent = "";
}
});
// reset btn 
reset.addEventListener('click', function(){
showSquare.style.display = 'none';
showCircle.style.display = 'none';
showCircle.style.backgroundColor = 'black';
showSquare.style.backgroundColor = 'black';
showShapeChecker = 0;
typeText.textContent = "";
});
const colorRed = document.querySelector('.color__btn-red'); // red btn
const colorYellow = document.querySelector('.color__btn-yellow'); //yellow btn
const colorGreen = document.querySelector('.color__btn-green'); // green btn
const colorBlue = document.querySelector('.color__btn-blue'); //blue btn
// for change a color of a shape
const buttons = [colorRed, colorYellow, colorGreen, colorBlue];
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if(showShapeChecker) {
                showCircle.style.backgroundColor = colors[index].hex;
                showSquare.style.backgroundColor = colors[index].hex;
            }
            else {
                alert("Сначала выберите фигуру!");
            }
        });
    });
//form
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const typeText = document.querySelector('.type__text');
form.addEventListener("submit", function(event){
    event.preventDefault();
    if (usernameInput.value && showShapeChecker) {
        typeText.textContent = usernameInput.value;
    }
    else if (usernameInput.value){
        alert ("Сначала выберите фигуру перед добавлением!");
    }
    else {
        alert ("Введите текст перед добавлением!");
    }
    form.reset();
});




