let formContent = document.getElementById("formid");
let continueButton = document.getElementById("button");
let uploadContainer = document.getElementById("upload");

continueButton.addEventListener("click", hideForm);

function hideForm() {
    formContent.style.display = "none";
    uploadContainer.style.display = "flex";
    uploadContainer.style.flexWrap = "wrap";
}