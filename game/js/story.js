//story 

//  JavaScript start here

	


	let wrapper = document.getElementById('wrapper');
	let boxmain = document.getElementById('mainstory');
	//box.style.backgroundImage =  "url(radar1.jpg)";
	
	let current = 0;
   
	

	
function onstart(){
	console.log('it got here onstart');
  //hide('radar-puzzle');
 // hide('tiger-puzzle');
  	hide('choiseone');
	hide('choisetwo');
	hide('Next');
	hide('Back');


}

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

	function playGame(){

		getstory(current);
		hide('Next');
		hide('Back');
		hide('Playgame');
	}




// need to change to if statements 
	//hide('choiseone');
	//hide('choisetwo');

 function story(button) {
	
	var temp = button;
	console.log(temp);
	
	getstory(current);

	




	//document.getElementById('playboxmain').innerHTML = `  ${array[current]} `

	if(temp === 'next' || temp === 'one' || temp === 'two' || temp === 'back' ){
		console.log('im here in next')
		
	
		//if(temp === 'back'){ // not working do not know why
			//current = current - 1;
			//console.log('im here in back');

		//}

		//console.log ("made it to while loop");
		switch(current){
			case 7 : 
				// print out array 
				window.alert('radar game');
				//radarstart();
				// pop up option for mini game 
				console.log ("case  8");
				 current = 9;
				break; 
			case 13:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('Back');
				hide('choiseone');
				hide('choisetwo');

				if(temp === 'one'){
					current = 14;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					current = 14 ; // Great ship 
					// print out array
					getstory(current);

				}
				 break;

			case 15:  
				window.alert('tiger game');
				//tigarstart();
				// pop up option for mini game 
				console.log ("case  15");
				 current = 16;
			default:
				
				current++;
				//print out array
			
		}

	
}
	//document.getElementById('playbox').innerHTML = `  ${array[current]} `
	//getstory(current);

}