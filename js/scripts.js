const grid = document.getElementById("landingPage");
const compStyles = window.getComputedStyle(grid);

  grid.addEventListener("mousemove", (e) => {
  grid.style.backgroundPositionX = (-e.clientX)/3 + "px";
  grid.style.backgroundPositionY = (-e.clientY)/3 + "px";
});

const grids = document.getElementsByClassName("cardContent");

for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("mousemove", (e) => {
    grids[i].style.backgroundPositionX = (-e.clientX)/3 + "px";
    grids[i].style.backgroundPositionY = (-e.clientY)/3 + "px";
  });
} 

// const blob = document.getElementById("blob");

// window.onpointermove = event => { 
//   const { clientX, clientY } = event;
  
//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 3000, fill: "forwards" });
// }


