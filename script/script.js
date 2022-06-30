const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("div div a");
console.log(document.getElementById("scroller"))
document.getElementById("scroller").addEventListener("scroll", function(event){

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (event.target.scrollTop>= sectionTop) {
          current = section.getAttribute("id"); }
      });
    
      navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
          a.classList.add("active");
        }
      });
    })

























/*
window.onscroll = function(){
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(current)) {
        a.classList.add("active");
      }
    });
  };

  */