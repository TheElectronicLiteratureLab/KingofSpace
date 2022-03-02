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
	hide('choisefour');

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

	if(temp === 'next' || temp === 'one' || temp === 'two' || temp === 'three'|| temp === 'four' ){
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

			case 11:
				//play animation of great ship or life ship...?
				current++;
				break;

			case 13:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `Tam Rosse brings his ship in to Synchronized orbit with the Lifeship `
				document.getElementById('choisetwo').innerHTML = ` Tam Rosse brings his ship in to Synchronized orbit with the Greatship `

				if(temp === 'one'){

					

					current = 14;// Life ship
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 83 ; // Great ship 
					// print out array
					getstory(current);

				}
				 break;
			case 15:
						x.style.backgroundImage= "url(img/TamencountersAster.png)" ;
						
						current++;
					break;
			case 16:
				x.style.backgroundImage = "url(img/black.png)";
				current++;
					break;

			case 21:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `The Ceremony ritual is just an excuse; removing the earring is the key to her powers. He'll try that, then talk with her rationally. `;
				document.getElementById('choisetwo').innerHTML = ` Sex with this woman would me like a dangerous drug.... It's been a long time since he had a dangerous drug. `;

				if(temp === 'one'){

					

					current = 22;// forgets memory 
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 70 ; // wake her up with controles  
					// print out array
					getstory(current);

				}
				 break;

			case 69: 
				current = 373;//an end 

				break;

			case 73:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `Tam Rosse gives her the seeds`;
				document.getElementById('choisetwo').innerHTML = ` Tam Rosse doesn't give her the seeds`;

				if(temp === 'one'){
					current = 74;// give seeds
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 300 ; // not give seeds 
					// print out array
					getstory(current);
				}
				 break;

			case 76:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `He says yes `;
				document.getElementById('choisetwo').innerHTML = ` He says no `;

				if(temp === 'one'){
					current = 77;// yes
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 300 ; // no 
					// print out array
					getstory(current);
				}
				 break;



			case 80:  
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


			case 91:
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `next `;
				document.getElementById('choisetwo').innerHTML = ` Favor `;

				if(temp === 'one'){ 
					current ++; // next
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					
					library(14); // favor def. 

					current ++; // Great ship 
					// print out array
					//getstory(current);
				}
				 break;

				 case 98:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `The Priestess would like him to drink it. He's not going to give her the satisfaction. No.`;
				document.getElementById('choisetwo').innerHTML = ` It doesn't matter, she's pledged to Brady anyway. Why Not? `;

				if(temp === 'one'){
					current = 99;// no
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 300 ; // why not 
					// print out array
					getstory(current);
				}
				 break;

				 

				 case 100:	
			// unhide choise buttons 
				
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				document.getElementById('choiseone').innerHTML = `Door one `;
				document.getElementById('choisetwo').innerHTML = ` Door two `;
				document.getElementById('choisethree').innerHTML = ` Next `;
				if(temp === 'one'){
					current = 101;//  door one
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					

					current = 102 ; // door two
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 103; // next
					getstory(current);
				}

				 break;

			case 101:

				current = 100;
				break;

			case 102:

				current = 100;
				break;
			case 104:
			// unhide choise buttons 
				
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				document.getElementById('choiseone').innerHTML = `Go left `;
				document.getElementById('choisetwo').innerHTML = ` Go Right `;
				document.getElementById('choisethree').innerHTML = ` Getting thirsty `;
				if(temp === 'one'){
					current = 105;// go left
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					

					current = 302 ; // go right
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 303; // getting thirsty
					getstory(current);
				}

				 break;

			case 105:
					// unhide choise buttons 
				
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				hide('choisefour');
				document.getElementById('choiseone').innerHTML = `Horizator `;
				document.getElementById('choisetwo').innerHTML = ` Directions `;
				document.getElementById('choisethree').innerHTML = ` Help `;
				document.getElementById('choisefour').innerHTML = ` Next `;
				if(temp === 'one'){
					current = 106;// horizator
					// print out array
					getstory(current);

				}
				if(temp === 'two'){ 
					current = 109 ; // directions
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 110; // help
					getstory(current);
				}
				else if (temp  === 'four'){
					current = 111; // next 
					getstory(current);
				}

				 break;


			case 106:
	// unhide choise buttons 
				
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				hide('choisefour');
				document.getElementById('choiseone').innerHTML = `Library Fuction`;
				document.getElementById('choisetwo').innerHTML = ` Important note `;
				document.getElementById('choisethree').innerHTML = ` Back to Horizator `;
				document.getElementById('choisefour').innerHTML = ` Next `;
				if(temp === 'one'){
					current = 107;// library function 
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					current = 108 ; // Important note
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 105; //Back to horizator
					getstory(current);
				}
				else if (temp  === 'four'){
					current = 108; // next
					getstory(current);
				}

				 break;

			case 107:

				current = 106;
				break;

			case 108:
				current = 106;
				break;

			case 109:

				current = 105
				break;
			case 110:

				current = 105
				break;


			case 112:

				//window.alert('horizator');
				if(confirm("do you want to play a mini game? horizator ")){
					//radarstart()
					txt = "You  pressed Ok!";
				}
				else{
					txt = "You pressed Cancel!";
				}
				//horizatorstart();
				// pop up option for mini game 
				//console.log ("case  15");
				 current ++;

				break;

			case 114
				//window.alert('kitchen');
				if(confirm("do you want to play a mini game? kitchen ")){
					//radarstart()
					txt = "You  pressed Ok!";
				}
				else{
					txt = "You pressed Cancel!";
				}
				//kitchnstart();
				// pop up option for mini game 
				//console.log ("case  15");
				 current ++;

				break;



			case 301: 
					window.alert('horizator');
					//horizatorstart();	
					current++;
				
			case 174:

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