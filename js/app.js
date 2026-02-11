/* var check=document.querySelector(".check");
check.addEventListener('click',idioma);
function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/index.html";
    }
    else{
        location.href="../index.html";
    }
}
//scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll/ 10));
    }
}
buttonUp =document.getElementById("button-up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll >500){
        buttonUp.style.transform = "scale(1)";        
    }else if (scroll < 500){
        buttonUp.style.transform ="scale(0)";
    }

} */
// selector idioma
const check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked;
  if (id === true) {
    location.href = "es/index.html";
  } else {
    location.href = "../index.html";
  }
}

// scroll up
const buttonUp = document.getElementById("button-up");

buttonUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 500) {
    buttonUp.style.transform = "scale(1)";
  } else {
    buttonUp.style.transform = "scale(0)";
  }
});
