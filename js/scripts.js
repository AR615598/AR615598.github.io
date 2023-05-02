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

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}


// const form = document.querySelector('form');
// const submitButton = form.querySelector('button[type="submit"]');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const formDataObject = Object.fromEntries(formData.entries());
//   const preFilledUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeaKSEJTk1DH42BKNxBxJNGflctu8-rRFrVvOpj4AGfJMkn4g/viewform?usp=pp_url&entry.399394357=' + encodeURIComponent(formDataObject['entry.399394357']) + '&entry.140554033=' + encodeURIComponent(formDataObject['entry.140554033']);
// ;

//   window.location.href = preFilledUrl;
// });