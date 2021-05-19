window.onload=function(){
    function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.querySelector('#cart').addEventListener('click',openNav);
document.getElementById('mySidenav').addEventListener('click',closeNav);

}