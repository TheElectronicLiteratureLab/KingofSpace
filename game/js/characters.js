// Toggles through different character divs on button click
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
		// If the id is not the same as the visible ship id, make it the visible ship id
		if(visibleShipId !== id) {
		visibleShipId = id;
		} else {
		visibleShipId = "lifeship";
		}
	} else
		// If the id is not the same as the visible id, make it the visible id
		if(visibleId !== id) {
		visibleId = id;
	}
	// Hide the id
	hide();
}

function hide() {
	hideDivs();
	hideShipDivs();
}

function hideDivs() {
	// Loop through each id in divs
	divs.forEach(id => {
		let div = document.getElementById(id);
		// If visibleId is the same as id, show the div
		if(visibleId === id) {
		div.style.display = "grid";
		} else {
		div.style.display = "none";
		}
	});
}

function hideShipDivs() {
	// Loop through each id in shipdivs
	shipdivs.forEach(id => {
		let div = document.getElementById(id);
		// If visibleShipId is the same as id, show the div
		if(visibleShipId === id) {
			div.style.display = "grid";
		} else {
			div.style.display = "none";
		}
	});
}