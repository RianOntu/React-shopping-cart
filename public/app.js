window.onload=function(){
    function openNav() {
  document.getElementById("mySidenav").style.width = "340px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function closeAlert(){
document.getElementById('msg').this.parentElement.style.display="none"
}

document.querySelector('#cart').addEventListener('click',openNav);
document.getElementById('mySidenav').addEventListener('click',closeNav);
document.querySelector('#closebtn').addEventListener('click',closeAlert)

}