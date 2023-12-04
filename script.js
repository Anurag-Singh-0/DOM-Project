let section = document.querySelectorAll(".elem");

section.forEach(function (sec) {

    sec.addEventListener("mouseenter", function () {
      sec.childNodes[3].style.opacity = 1;
    });
  
    sec.addEventListener("mouseleave", function () {
      sec.childNodes[3].style.opacity = 0;
    });
  
    sec.addEventListener("mousemove", function (dets) {
      sec.childNodes[3].style.left = dets.x + "px";
      sec.childNodes[3].style.top = dets.y + "px";
    });
  });
  