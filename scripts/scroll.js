const slider = document.getElementById("contentsScroll");

let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('wheel', (e) => { 
    e.preventDefault();
    if(e.deltaY > 0){
        slider.scrollLeft += 20;
    }else{
        slider.scrollLeft -= 20;
    }
});

slider.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', e => {
  if (!isDown) return; 
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});