export default function setFavourite(index) {
    let element = document.getElementById("iconFavourite" + index);
    element.classList.toggle("fa-solid");
  }