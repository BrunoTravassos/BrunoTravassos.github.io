const mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

// Quando o usuario rola 400px do topo, mostra ou esconde o botão
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//scroll to top quando usuario clica
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
