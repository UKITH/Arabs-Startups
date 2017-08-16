var plusCircle = document.querySelector('#plus-circle');
var coFounderInput = document.querySelector('#coFounderTest');
// console.log(childNumber);
plusCircle.addEventListener('click', function () {
  var childNumber = document.getElementById('coFounderTest').childElementCount;
    if(childNumber <= 4) {
      var input = document.createElement('INPUT');
      coFounderInput.appendChild(input);
      console.log(childNumber);

    }
})

var bgChangeColor = document.querySelector('#navbar');
bgChangeColor.style.backgroundColor = "white";
