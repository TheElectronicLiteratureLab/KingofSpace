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
  	hide('choiceone');
	hide('choicetwo');
	hide('Next');
	


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
		hide('Playgame');
	}




// need to change to if statements 
	//hide('choiceone');
	//hide('choicetwo');

 function story(button) {
	
	var temp = button;
	console.log(temp);
	
	getstory(current);

	




	//document.getElementById('playboxmain').innerHTML = `  ${array[current]} `

	if(temp === 'next' || temp === 'one' || temp === 'two'  ){
		console.log('im here in next')
		
	
		

		//console.log ("made it to while loop");
		switch(current){
			case 8 : 
				// print out array 
				//window.alert('radar game');
				if(confirm("do you want to play a mini game?")){
					//radarstart()
					txt = "You  pressed Ok!";
				}
				else{
					txt = "You pressed Cancel!";
				}
				//radarstart();
				// pop up option for mini game 
				console.log ("case  8");
				 current ++;
				break; 

			case 11:
				//play animation of great ship or life ship...?
				current++;
				break;

			case 12:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `Tam Rosse brings his ship in to Synchronized orbit with the Lifeship `
				document.getElementById('choicetwo').innerHTML = ` Tam Rosse brings his ship in to Synchronized orbit with the Greatship `

				if(temp === 'one'){

					

					current = 13;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 31 ; // Great ship 
					// print out array
					getstory(current);

				}
				 break;
			case 19:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `The Ceremony ritual is just an excuse; removing the earring is the key to her powers. He'll try that, then talk with her rationally. `;
				document.getElementById('chocsetwo').innerHTML = ` Sex with this woman would me like a dangerous drug.... It's been a long time since he had a dangerous drug. `;

				if(temp === 'one'){

					

					current = 20;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 68 ; // Great ship 
					// print out array
					getstory(current);

				}
				 break;

			case 67: 
				current = 173;//an end 

				break;

			case 83:  
				window.alert('tiger game');
				//tigarstart();
				// pop up option for mini game 
				console.log ("case  15");
				 current = 34;

				break;
				
			case 173:

				//hide('choiceone');
				//document.getElementById('choiseone').innerHTML = `Acnologments  `;
				current = -1;// states story over. 
				

			default:
				
				current++;
				//print out array
			
		}

	
}
	//document.getElementById('playbox').innerHTML = `  ${array[current]} `
	//getstory(current);

}