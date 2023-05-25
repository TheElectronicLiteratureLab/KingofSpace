// ////////Toggles through different character divs on button click////////////////////////////
var divs = ["tam","nii","brady","aster"];
var shipdivs = ["lifeship","greatship","escapepod"];

let visibleId = "tam";
let visibleShipId = "lifeship";

function start(){
  show("tam", false);
  hide();
}

function show(id, isShip = false) {
  if (isShip == true) {
    if(visibleShipId !== id) {
      visibleShipId = id;
    } 
  } else
    if(visibleId !== id) {
      visibleId = id;
  }
  hide();
}

function hide() {
  divs.forEach(id => {
    let div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "grid";
    } else {
      div.style.display = "none";
    }
  });

  shipdivs.forEach(id => {
    let div = document.getElementById(id);
    if(visibleShipId === id) {
      // document.getElementById(visibleId).style.display = "grid";
      div.style.display = "grid";
    } else {
      div.style.display = "none";
    }
  });
}