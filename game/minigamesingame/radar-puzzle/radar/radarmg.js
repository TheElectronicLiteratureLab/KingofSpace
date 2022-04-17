

//  JavaScript start here


/*const openModal = document.querySelectorAll('[data-modal-target]');
const closebutton = document.querySelectorAll('[data-close-button]');

openModal.forEach(button => {
	button.addEventListener('click', () =>{
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)

	})
})

closebutton.forEach(button => {
	button.addEventListener('click', () =>{
		const modal = button.closest('.modal')
		closeModal(modal)

	})
})

function openModal(modal){
	if(modal == null) {
		return modal.classList.add('active');
	
}}

//function closeModal(modal){
	//if(modal == null){
	//	return 
	//	modal.classList.remove('active');
//	}
//}
*/


	//let wrapper = document.getElementById('wrapper');
	let box = document.getElementById('main-radar');
		box.style.backgroundImage = "url(img/kos_radarGame_final3.png)";
	
	let S1 = document.getElementById('switchone');
	S1.style.backgroundImage =  "url(img/switchup.png)";
	let S2 = document.getElementById('switchtwo');
	S2.style.backgroundImage =  "url(img/switchdown.png)";
   let S3 = document.getElementById('switchthree');
	S3.style.backgroundImage =  "url(img/switchdown.png)";
   let S4 = document.getElementById('switchfour');
	S4.style.backgroundImage =  "url(img/switchup.png)";
   let S5 = document.getElementById('switchfive');
	S5.style.backgroundImage =  "url(img/switchup.png)";
   let S6 = document.getElementById('switchsix');
	S6.style.backgroundImage =  "url(img/switchup.png)";

	let S12 = document.getElementById('switchonept');
	S12.style.backgroundImage =  "url(img/switchdown.png)";
	let S22 = document.getElementById('switchtwopt');
	S22.style.backgroundImage =  "url(img/switchup.png)";
   let S32 = document.getElementById('switchthreept');
	S32.style.backgroundImage =  "url(img/switchup.png)";
   let S42 = document.getElementById('switchfourpt');
	S42.style.backgroundImage =  "url(img/switchdown.png)";
   let S52 = document.getElementById('switchfivept');
	S52.style.backgroundImage =  "url(img/switchdown.png)";
   let S62 = document.getElementById('switchsixpt');
	S62.style.backgroundImage =  "url(img/switchdown.png)";

	let B1 = document.getElementById('buttonone');
	B1.style.backgroundImage =  "url(img/buttonoff.png)";
	let B2 = document.getElementById('buttontwo');
	B2.style.backgroundImage =  "url(img/buttonoff.png)";
   let B3 = document.getElementById('buttonthree');
	B3.style.backgroundImage =  "url(img/buttonoff.png)";
   let B4 = document.getElementById('buttonfour');
	B4.style.backgroundImage =  "url(img/buttonoff.png)";
   let B5 = document.getElementById('buttonfive');
	B5.style.backgroundImage =  "url(img/buttonoff.png)";

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

window.onload = radarstart();
function radarstart(){
	hide('switchonept');
	hide('switchtwopt');
	hide('switchthreept');
	hide('switchfourpt');
	hide('switchfivept');
	hide('switchsixpt');

}


const Emergency = [" Oxygen Reserves Critical<br>"];

 function radar(Snum) {
	
	var temp = Snum;
	//console.log(temp);
	

	if (temp === 'switchone' || temp  ===  'switchonept'){
		if( Sone === true){
			Sone = false;
			Emergency.push(" Engine off<br> ");
			//document.getElementById('playbox').innerHTML = ` EMERGENCY <br>
  		//<br>
  		//Oxigen Reserves Critical<br> Engine off `;
			//S1.style.backgroundImage =  "url(img/switchdown.png)";
			hide('switchone');
			hide('switchonept');

		}
		else{
			Sone = true;
			Emergency.push(" Engine on<br> ");
			//document.getElementById('playbox').innerHTML = ` EMERGENCY <br>
  		//<br>
  		//Oxigen Reserves Critical <br> Engine on<br>`;
			//S1.style.backgroundImage =  "url(img/switchup.png)";
			hide('switchonept');
			hide('switchone');
	}

	}
	if (temp ==='switchtwo' || temp ==='switchtwopt'){
		if( Stwo === true){
			Stwo = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Stwo} `;
			//S2.style.backgroundImage =  "url(img/switchdown.png)";
			hide('switchtwo');
			hide('switchtwopt');
	}
	else{
		Stwo = true;
		//document.getElementById('playbox').innerHTML = ` switchtwo is true`;
		//S2.style.backgroundImage =  "url(img/switchup.png)";
			hide('switchtwopt');
			hide('switchtwo');
	}
}
if (temp === 'switchthree'|| temp === 'switchthreept'){
		if( Sthree === true){
			Sthree = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			//S3.style.backgroundImage =  "url(img/switchdown.png)";
			hide('switchthree');
			hide('switchthreept');

		}
		else{
			Sthree = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			//S3.style.backgroundImage =  "url(img/switchup.png)";
			hide('switchthreept');
			hide('switchthree');
	}
	}
if (temp === 'switchfour'|| temp === 'switchfourpt'){
		if( Sfour === true){
			Sfour = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			//S4.style.backgroundImage =  "url(img/switchdown.png)";
			hide('switchfour');
			hide('switchfourpt');

		}
		else{
			Sfour = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			//S4.style.backgroundImage =  "url(img/switchup.png)";
			hide('switchfourpt');
			hide('switchfour');
	}
	}
if (temp === 'switchfive'||temp === 'switchfivept'){
		if( Sfive === true){
			Sfive = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			//S5.style.backgroundImage =  "url(img/switchdown.png)";
			hide('switchfive');
			hide('switchfivept');

		}
		else{
			Sfive = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			//S5.style.backgroundImage =  "url(img/switchup.png)";
			hide('switchfivept');
			hide('switchfive');
	}
	}
if (temp === 'switchsix'|| temp === 'switchsixpt'){
		if( Ssix === true){
			Ssix = false;
			//document.getElementById('playbox').innerHTML = ` switchone is ${Sone} `;
			//S6.style.backgroundImage =  "url(img/switchdown.png)";
			hide('switchsix');
			hide('switchsixpt');

		}
		else{
			Ssix = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			//S6.style.backgroundImage =  "url(img/switchup.png)";
			hide('switchsixpt');
			hide('switchsix');
	}
	}
	if (temp === 'buttonone'){
		if( Bone === true){
			Bone = false;
			//document.getElementById('playbox').innerHTML = ` `;
			B1.style.backgroundImage =  "url(img/buttonoff.png)";

		}
		else{
			Bone = true;
			Emergency.push( "ignition! <br>");
			B1.style.backgroundImage =  "url(img/buttonon.png)";
	}
	}
	if (temp === 'buttontwo'){
		if( Btwo === true){
			Btwo = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B2.style.backgroundImage =  "url(img/buttonoff.png)";

		}
		else{
			Btwo = true;
			//document.getElementById('playbox').innerHTML = ` switchone is true`;
			B2.style.backgroundImage =  "url(img/buttonon.png)";
	}
	}
	if (temp === 'buttonthree'){
		if( Bthree === true){
			Bthree = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B3.style.backgroundImage =  "url(img/buttonoff.png)";

		}
		else{
			Bthree = true;
			Emergency.push(" laser inoperative<br> "); 
			B3.style.backgroundImage =  "url(img/buttonon.png)";
	}
	}
	if (temp === 'buttonfour'){
		if( Bfour === true){
			Bfour = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B4.style.backgroundImage =  "url(img/buttonoff.png)";

		}
		else{
			Bfour = true;
			Emergency.push(" beam inoperative<br> ");  
			B4.style.backgroundImage =  "url(img/buttonon.png)";
	}
	}
	if (temp === 'buttonfive'){
		if( Bfive === true){
			Bfive = false;
			//document.getElementById('playbox').innerHTML = `  ${Bone} `;
			B5.style.backgroundImage =  "url(img/buttonoff.png)";

		}
		else{
			Bfive = true;
			Emergency.push(" not docked<br> "); 
			B5.style.backgroundImage =  "url(img/buttonon.png)";
	}
	}
	if (Sone === false && Bone === true){
		 Emergency.push("engine inoperative <br>");
	}

	if(Sone === false && Btwo === true){
		 Emergency.push("engine inoperative<br>");
	}
	if (Sone === true && Stwo === true && Sthree === true && Sfour === true && Sfive === true && Ssix === true && Btwo === true){
		
		//document.getElementById('completed').innerHTML = ` congrats you completed the puzzle`;
		Emergency.push(" locked on to beacon<br>");

		setTimeout(()=>{hide('main-radar');}, 2000);
		
		
		//return current = 8;
	}
	if (Emergency.length >= 4){
		Emergency.shift();
	}
	
		document.getElementById('playbox').innerHTML = ` ${Emergency} `;
	
}

	
