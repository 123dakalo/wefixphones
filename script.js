const bar = document.getElementById('bars');
const rNav = document.getElementById('barNav');

bar.addEventListener("click", function(){
    rNav.classList.toggle("active");
});