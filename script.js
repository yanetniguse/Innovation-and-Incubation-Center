
document.addEventListener("DOMContentLoaded", function() {
    const welcome = document.getElementById('welcome');
  
    // Listen for the animation iteration event
    welcome.addEventListener("animationiteration", function() {
      // Hide the text after the first iteration
      welcome.style.display = 'none';
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".slide");
    let isDragging = false;
    let startPosX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
  
    slide.addEventListener("mousedown", (e) => {
      isDragging = true;
      startPosX = e.clientX;
      slide.style.transition = "none";
    });
  
    slide.addEventListener("mouseup", () => {
      isDragging = false;
      const movedBy = currentTranslate - prevTranslate;
  
      if (movedBy < -100 && currentTranslate !== 0) {
        slideImage(1);
      } else if (movedBy > 100 && currentTranslate !== -getWidth()) {
        slideImage(-1);
      } else {
        slide.style.transform = `translateX(${prevTranslate}px)`;
      }
  
      slide.style.transition = "transform 0.5s ease";
    });

    slide.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const currentPosition = e.clientX;
      const diffX = currentPosition - startPosX;
      currentTranslate = prevTranslate + diffX;
  
      slide.style.transform = `translateX(${currentTranslate}px)`;
    });
  
    function slideImage(direction) {
      if (direction === 1) {
        if (currentTranslate === -getWidth()) return;
        prevTranslate = currentTranslate - getWidth();
      } else if (direction === -1) {
        if (currentTranslate === 0) return;
        prevTranslate = currentTranslate + getWidth();
      }
  
      slide.style.transform = `translateX(${prevTranslate}px)`;
    }
  
    function getWidth() {
      return slide.clientWidth;
    }
  });
  //card
