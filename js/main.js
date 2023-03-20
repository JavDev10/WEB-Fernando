const openGalleryBtn = document.getElementById("openGalleryBtn");
const modalContainer = document.getElementById("modalContainer");
const closeBtn = document.querySelector(".close");
openGalleryBtn.addEventListener("click", function() {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modalContainer.style.display = "none";
});