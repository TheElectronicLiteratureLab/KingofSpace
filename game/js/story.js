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
	hide('choisethree');

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
	//hide('choiseone');
	//hide('choisetwo');

 function story(button) {
	
	var temp = button;
	//console.log(temp);
	
	getstory(current);

	
	var x = document.getElementById('mainstory');



	//document.getElementById('playboxmain').innerHTML = `  ${array[current]} `

	if(temp === 'next' || temp === 'one' || temp === 'two' || temp === 'three' ){
		//console.log('im here in next')
		
	
		

		//console.log ("made it to while loop");
		switch(current){
			//case 3: 
					//library(15);
					//setTimeout(()=>{library(16);}, 10000);
					
					//current ++;
				//break;
			case 8 : 
				// print out array 
				//window.alert('radar game');
				if(confirm("do you want to play a mini game? radar game")){
					//radarstart()
					txt = "You  pressed Ok!";
				}
				else{
					txt = "You pressed Cancel!";
				}
				//radarstart();
				// pop up option for mini game 
				//console.log ("case  8");
				 current ++;
				break; 
			case 9:
				// x.style.backgroundImage= "url(img/TamencountersAster.png)" ;
				// or jump to black and back 
				current++

				break;	

			case 11:
				//play animation of great ship or life ship...?
				current++;
				break;

			case 12:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `Tam Rosse brings his ship in to Synchronized orbit with the Lifeship `
				document.getElementById('choisetwo').innerHTML = ` Tam Rosse brings his ship in to Synchronized orbit with the Greatship `

				if(temp === 'one'){

					

					current = 13;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 82 ; // Great ship 
					// print out array
					getstory(current);

				}
				 break;
			case 14:
						x.style.backgroundImage= "url(img/TamencountersAster.png)" ;
						
						current++;
					break;
			case 15:
				x.style.backgroundImage = "url(img/black.png)";
				current++;
					break;

			case 20:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `The Ceremony ritual is just an excuse; removing the earring is the key to her powers. He'll try that, then talk with her rationally. `;
				document.getElementById('choisetwo').innerHTML = ` Sex with this woman would me like a dangerous drug.... It's been a long time since he had a dangerous drug. `;

				if(temp === 'one'){

					

					current = 21;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 69 ; // Great ship 
					// print out array
					getstory(current);

				}
				 break;

			case 68: 
				current = 373;//an end 

				break;

			case 72:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `Tam Rosse gives her the seeds`;
				document.getElementById('choisetwo').innerHTML = ` Tam Rosse doesn't give her the seeds`;

				if(temp === 'one'){
					current = 73;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 300 ; // Great ship 
					// print out array
					getstory(current);
				}
				 break;

			case 75:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `He says yes `;
				document.getElementById('choisetwo').innerHTML = ` He says no `;

				if(temp === 'one'){
					current = 76;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 300 ; // Great ship 
					// print out array
					getstory(current);
				}
				 break;



			case 79:  
				//window.alert('tiger game');
				if(confirm("do you want to play a mini game? tiger game")){
					//radarstart()
					txt = "You  pressed Ok!";
				}
				else{
					txt = "You pressed Cancel!";
				}
				//tigarstart();
				// pop up option for mini game 
				//console.log ("case  15");
				 current ++;

				break;


			case 90:
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `next `;
				document.getElementById('choisetwo').innerHTML = ` Favor `;

				if(temp === 'one'){
					current ++;
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					
					library(14);

					current ++; // Great ship 
					// print out array
					//getstory(current);
				}
				 break;

				 case 97:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `The Priestess would like him to drink it. He's not going to give her the satisfaction. No.`;
				document.getElementById('choisetwo').innerHTML = ` It doesn't matter, she's pledged to Brady anyway. Why Not? `;

				if(temp === 'one'){
					current = 98;// no
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 300 ; // why not 
					// print out array
					getstory(current);
				}
				 break;

				 

				 case 99:	
			// unhide choise buttons 
				
				hide('next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				document.getElementById('choiseone').innerHTML = `Door one `;
				document.getElementById('choisetwo').innerHTML = ` Door two `;
				document.getElementById('choisethree').innerHTML = ` Next `;
				if(temp === 'one'){
					current = 100;// 
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					

					current = 101 ; // 
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 102;
					getstory(current);
				}

				 break;

			case 100:

				current = 99;
				break;

			case 101:

				current = 99;
				break;

			case 301: 
					window.alert('horizator');
					//horizatorstart();	
					current++;
				
			case 173:

				//hide('choiceone');
				//document.getElementById('choiseone').innerHTML = `Acnologments  `;

				//current = -1;// states story over. 

			default:
				
				current++;
				//print out array
			
		}

	
}
	//document.getElementById('playbox').innerHTML = `  ${array[current]} `
	//getstory(current);

}