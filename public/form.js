var plusCircle = document.querySelector('#plus-circle');
var coFounderInput = document.querySelector('#coFounder-name');
plusCircle.addEventListener('click', function () {
  coFounderInput.classList.toggle('dn');
})

var submissionMsg = document.querySelector('#sub-msg');
var searchHomeForm = document.querySelector('#sub-form');
searchHomeForm.addEventListener('submit', function(e) {
    submissionMsg.classList.toggle('dn');
    submissionMsg.classList.toggle('db');
})

var bgChangeColor = document.querySelector('#navbar');
bgChangeColor.style.backgroundColor = "white";
