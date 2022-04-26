// ////////Toggles through different character divs on button click////////////////////////////
var divs = ["tam","nii","brady","aster"];
let visibleId = null;

// function start(){
//   //show("tam");
//   hide();
// }

function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}

function hide() {
  let div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "grid";
    } else {
      div.style.display = "none";
    }
  }
}

// window.onload = document.getElementById('tam-button').focus();