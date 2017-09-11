var burger = document.querySelector('#burger')
var navList = document.querySelector('#nav-list');

burger.addEventListener('click', function(e) {
  navList.classList.toggle('dn')
})
