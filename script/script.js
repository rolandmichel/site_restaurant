const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("div div a");
console.log(document.getElementById("scroller"))
document.getElementById("scroller").addEventListener("scroll", function(event){

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (event.target.scrollTop>= sectionTop-20) {
          current = section.getAttribute("id"); }
      });
    
      navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
          a.classList.add("active");
        }
      });
    })


var emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

function emailVerif(){
    let logintest=document.getElementById("email").value
    let isTrue = emailReg.test(logintest)
    if(isTrue==false){
        document.getElementById("EmailIsFalse").innerHTML="Email invalide"
        document.getElementById("EmailIsFalse").style.color="red"
        document.getElementById("EmailIsFalse").style.fontSize="10px"
        document.getElementById("envoie").disabled=true;
      }else{
        document.getElementById("EmailIsFalse").innerHTML=""
        document.getElementById("envoie").disabled=false;
    }

}
document.getElementById("email").addEventListener("blur", emailVerif)