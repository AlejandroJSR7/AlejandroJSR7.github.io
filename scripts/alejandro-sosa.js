$(document).ready(function(){

  var modal = document.getElementById("modal-contact");
  var btnOpen = document.getElementById("openModalContact");
  var btnClose = document.getElementById("closeModalContact");

  btnOpen.onclick = function () {
    modal.style.display = "block";
  }

  btnClose.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function () {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});
