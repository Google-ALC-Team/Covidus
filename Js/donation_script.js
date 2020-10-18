//When a user select a country form the drop-down list, the button should appear

document.getElementById("button").addEventListener(click, showResult);
  
  function showResult() {
    document.getElementsByClassName("search-result").style.display = "block";
  }
  alert("I suck at JS");