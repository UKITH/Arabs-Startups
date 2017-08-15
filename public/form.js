var plusCircle = document.querySelector('#plus-circle');
var coFounderInput = document.querySelector('#coFounder-name');
plusCircle.addEventListener('click', function () {
  coFounderInput.classList.toggle('dn');
})

if (screen.width < 500) {
  document.querySelector('#navs').classList.toggle('dtc');
  document.querySelector('#navs').classList.toggle('dn');
}

var bgChangeColor = document.querySelector('#navbar');
bgChangeColor.style.backgroundColor = "white";
