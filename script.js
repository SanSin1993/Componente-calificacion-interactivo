document.addEventListener("DOMContentLoaded", function () {
  //activar uno de los 5 botones y reemplazo del numero seleccionado en span
  const nbtns = document.getElementsByClassName("n-btn");
  const selectedSpan = document.getElementById("selected");
  for (let i = 0; i < nbtns.length ; i++){
    nbtns[i].addEventListener("click", function () {
      for (let j = 0; j < nbtns.length ; j++){
        nbtns[j].classList.remove("active");
        nbtns[j].classList.add("inactive");
      }
      nbtns[i].classList.remove("inactive");
      nbtns[i].classList.add("active");

      const selectedValue = nbtns[i].getAttribute("data-value");
      selectedSpan.textContent = selectedValue;
    }); 
  }
  //accion del submit
  const ratingSection = document.getElementById("rating-section");
  const thankYouSection = document.getElementById("thank-you-section");
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function () {
    ratingSection.style.display = "none";
    thankYouSection.style.display = "flex";
    thankYouSection.style.width = "100%";
    thankYouSection.style.height = "100%";
  });
});