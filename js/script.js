// typing animation script 
var typed = new Typed(".animate", {
    strings: ["Learn!","Win!","Have Fun!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// button customization
var clicked = false;
function toggle(){
    if (!clicked){
        clicked=true; 
        document.getElementById("con1").innerHTML="$10";
        document.getElementById("con2").innerHTML="$49";
    }
    else
    {
        clicked=false;
        document.getElementById("con1").innerHTML="$0";
        document.getElementById("con2").innerHTML="$24";
    }
}

// modal 
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

// scroll to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});