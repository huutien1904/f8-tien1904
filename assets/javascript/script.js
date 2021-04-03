var Navbtn = document.querySelector('.header__bar-mobile')
var sideNav = document.querySelector('.menu__barlist')
console.log(Navbtn);
Navbtn.onclick = function(){
    if(sideNav.style.left == "-50%"){
        sideNav.style.left ="0";
        
    }
    
}