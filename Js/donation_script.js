
let getDonateLinkButton = document.getElementById("button");
let searchResult = document.getElementsByClassName("search-result");

getDonateLinkButton.addEventListener("click", showSearchResult);

function showSearchResult() {
  searchResult.style.display = "block";
}