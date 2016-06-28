var headerMenu = document.querySelector('.header-menu');
var headerMenuList = document.querySelector('.header-menu-list');

headerMenu.addEventListener('click', function(){
    headerMenuList.classList.toggle('active');
});
