

//  JavaScript start here




	//let wrapper = document.getElementById('wrapper');
	let box = document.getElementById('main');
		box.style.backgroundImage =  "url(./img/radar1.jpg)";
	
	let S1 = document.getElementById('switchone');
	S1.style.backgroundImage =  "url(img/switch1.jpg)";
	let S2 = document.getElementById('switchtwo');
	S2.style.backgroundImage =  "url(img/switch2.jpg)";
   let S3 = document.getElementById('switchthree');
	S3.style.backgroundImage =  "url(img/switch2.jpg)";
   let S4 = document.getElementById('switchfour');
	S4.style.backgroundImage =  "url(img/switch1.jpg)";
   let S5 = document.getElementById('switchfive');
	S5.style.backgroundImage =  "url(img/switch1.jpg)";
   let S6 = document.getElementById('switchsix');
	S6.style.backgroundImage =  "url(img/switch1.jpg)";

	let B1 = document.getElementById('buttonone');
	B1.style.backgroundImage =  "url(img/lightradar.jpg)";
	let B2 = document.getElementById('buttontwo');
	B2.style.backgroundImage =  "url(img/lightradar.jpg)";
   let B3 = document.getElementById('buttonthree');
	B3.style.backgroundImage =  "url(img/lightradar.jpg)";
   let B4 = document.getElementById('buttonfour');
	B4.style.backgroundImage =  "url(img/lightradar.jpg)";
   let B5 = document.getElementById('buttonfive');
	B5.style.backgroundImage =  "url(img/lightradar.jpg)";

   	let Sone = true;
	let Stwo = false;
	let Sthree = false;
	let Sfour = true;
	let Sfive = true;
	let Ssix = true;

	let Bone = false;
	let Btwo = false;
	let Bthree = false;
	let Bfour = false;
	let Bfive = false;
   
	

	//function playAudio(){
	//audio.play();
	//}

	//need to add print array for the readout 

	function hide(button) {
		var temp = button;
	  var x = document.getElementById(temp);
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	}


function radarstart(){
	hide('radar-puzzle');
		hide('Next');
}


const Emergency = [" Oxigen Reserves Critical<br>"];

 function radar(Snum) {
	
	var temp = Snum;
	//console.log(temp);
	

	if (temp === 'switchone'){
		if( Sone === true){
			Sone = false;
			Emergency.push(" Engine off<br> ");
			//document.getElementById('playbox').innerHTML = ` EMERGENCY <br>
  		//<br>
  		//Oxigen Reserves Critical<br> Engine off `;
			S1.style.backgroundImage =  "url(img/switch2.jpg)";

		}
		else{
			Sone = true;
			Emergency.push(" Engine on<br> ");
			//document.getElementById('playbox').innerHTML = ` EMERGENCY <br>
  		//<br>
  		//Oxigen Reserves Critical <br> Engine on<br>`;
			S1.style.backgroundImage =  "url(img/switch1.jpg)";
	}
	}
	if (temp ==='switchtwo'){
		if( Stwo === true){
			Stwo = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Stwo} `;
			S2.style.backgroundImage =  "url(img/switch2.jpg)";
	}
	else{
		Stwo = true;
		//document.getElementById('playbox').innerHTML = ` switchtwo is true`;
		S2.style.backgroundImage =  "url(img/switch1.jpg)";
	}
}
if (temp === 'switchthree'){
		if( Sthree === true){
			Sthree = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			S3.style.backgroundImage =  "url(img/switch2.jpg)";

		}
		else{
			Sthree = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			S3.style.backgroundImage =  "url(img/switch1.jpg)";
	}
	}
if (temp === 'switchfour'){
		if( Sfour === true){
			Sfour = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			S4.style.backgroundImage =  "url(img/switch2.jpg)";

		}
		else{
			Sfour = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			S4.style.backgroundImage =  "url(img/switch1.jpg)";
	}
	}
if (temp === 'switchfive'){
		if( Sfive === true){
			Sfive = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			S5.style.backgroundImage =  "url(img/switch2.jpg)";

		}
		else{
			Sfive = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			S5.style.backgroundImage =  "url(img/switch1.jpg)";
	}
	}
if (temp === 'switchsix'){
		if( Ssix === true){
			Ssix = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			S6.style.backgroundImage =  "url(img/switch2.jpg)";

		}
		else{
			Ssix = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			S6.style.backgroundImage =  "url(img/switch1.jpg)";
	}
	}
	if (temp === 'buttonone'){
		if( Bone === true){
			Bone = false;
			//document.getElementById('playbox').innerHTML = ` `;
			B1.style.backgroundImage =  "url(img/lightradar.jpg)";

		}
		else{
			Bone = true;
			document.getElementById('playbox').innerHTML = `ignition!`;
			B1.style.backgroundImage =  "url(img/lightradaron.jpg)";
	}
	}
	if (temp === 'buttontwo'){
		if( Btwo === true){
			Btwo = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B2.style.backgroundImage =  "url(img/lightradar.jpg)";

		}
		else{
			Btwo = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			B2.style.backgroundImage =  "url(img/lightradaron.jpg)";
	}
	}
	if (temp === 'buttonthree'){
		if( Bthree === true){
			Bthree = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B3.style.backgroundImage =  "url(img/lightradar.jpg)";

		}
		else{
			Bthree = true;
			document.getElementById('playbox').innerHTML = `laser inoperative `;
			B3.style.backgroundImage =  "url(img/lightradaron.jpg)";
	}
	}
	if (temp === 'buttonfour'){
		if( Bfour === true){
			Bfour = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B4.style.backgroundImage =  "url(img/lightradar.jpg)";

		}
		else{
			Bfour = true;
			document.getElementById('playbox').innerHTML = ` beam inoperative`;
			B4.style.backgroundImage =  "url(img/lightradaron.jpg)";
	}
	}
	if (temp === 'buttonfive'){
		if( Bfive === true){
			Bfive = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B5.style.backgroundImage =  "url(img/lightradar.jpg)";

		}
		else{
			Bfive = true;
			document.getElementById('playbox').innerHTML = ` not docked`;
			B5.style.backgroundImage =  "url(img/lightradaron.jpg)";
	}
	}

	if(Sone === false && Btwo === true){
		document.getElementById('playbox').innerHTML = ` engine inoperative`;
	}
	if (Sone === true && Stwo === true && Sthree === true && Sfour === true && Sfive === true && Ssix === true && Btwo === true){
		
		//document.getElementById('completted').innerHTML = ` congrats you compleete the puzzle`;
		document.getElementById('playbox').innerHTML = ` locked on to beacon`;

		setTimeout(()=>{hide('radar-puzzle');}, 5000);

		
		//return current = 8;
	}
	if (Emergency.length >= 4){
		Emergency.shift();
	}
	
		document.getElementById('playbox').innerHTML = ` ${Emergency} `;
	
}


	
