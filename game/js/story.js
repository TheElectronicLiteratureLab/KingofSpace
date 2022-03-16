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
	hide('choisefive');
	hide('choisesix');
	hide('choiseseven');

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
					

					current = 203 ; // not give seeds 
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
					

					current = 199 ; // no 
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
					

					current = 199 ; // why not 
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
					

					current = 161 ; // go right
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 162; // getting thirsty
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

				current = 105;
				break;
			case 110:

				current = 105;
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

			case 113:
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

			 case 116:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `Where are Brady and the Priestess? `;
				document.getElementById('choisetwo').innerHTML = `  Go to Great Hall`;

				if(temp === 'one'){
					current = 117;// Where are Brady and the Priestess? 
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 153 ; // Great Hall 
					// print out array
					getstory(current);
				}
				 break;
			
			case 122:
			hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				document.getElementById('choiseone').innerHTML = `The Water Center  `;
				document.getElementById('choisetwo').innerHTML = ` Drydock`;
				document.getElementById('choisethree').innerHTML = ` The Exercise Room `;
			
				hide('choisefour');
				hide('choisefive');
				hide('choisesix');
				document.getElementById('choisefour').innerHTML = `Great Hall `;
				document.getElementById('choisefive').innerHTML = ` Central Storage  `;
				document.getElementById('choisesix').innerHTML = ` Central Control`;
				hide('choiseseven');
				document.getElementById('choiseseven').innerHTML = `Ask the priestess for help `;
				
				if(temp === 'one'){
					current = 123;// The Water Center 
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					current = 124 ; // Drydock
					// print out array
					getstory(current);
				}
				 if (temp  === 'three'){
					current = 125; // The Exercise Room
					getstory(current);

				}
				if(temp === 'four'){
					current = 135;// Great Hall
					// print out array
					getstory(current);

				}
				if(temp === 'five'){
					current = 127 ; // central storage 
					// print out array
					getstory(current);
				}
				 if (temp  === 'six'){
					current = 128; // Central Control
					getstory(current);
				}
				else if (temp  === 'seven'){
					current = 129; // Ask the priestess for help
					getstory(current);
				}


				break;


			case 123:

				current = 122;
				break;

			case 124:
				current = 122;
				break;

			case 126:

				current = 122;
				break;
			case 127:

				current = 122;
				break;
			case 128:

				current = 122;
				break;

		case 129:
			hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				document.getElementById('choiseone').innerHTML = `The Water Center  `;
				document.getElementById('choisetwo').innerHTML = ` Drydock`;
				document.getElementById('choisethree').innerHTML = ` The Exercise Room `;
			
				hide('choisefour');
				hide('choisefive');
				hide('choisesix');
				document.getElementById('choisefour').innerHTML = `Great Hall  `;
				document.getElementById('choisefive').innerHTML = ` Central Storage  `;
				document.getElementById('choisesix').innerHTML = ` Central Control `;
				
				if(temp === 'one'){
					current = 130;// The Water Center 
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					current = 131 ; // Drydock
					// print out array
					getstory(current);
				}
				 if (temp  === 'three'){
					current = 132; // The Exercise Room
					getstory(current);

				}
				if(temp === 'four'){
					current = 135;// great hall
					// print out array
					getstory(current);

				}
				if(temp === 'five'){
					current = 133 ; // central storage 
					// print out array
					getstory(current);
				}
				else if (temp  === 'six'){
					current = 134; // Central Control
					getstory(current);
				}
				break;

			case 130:

				current = 129;
				break;

			case 131:
				current = 129;
				break;

			case 132:

				current = 129;
				break;
			case 133:

				current = 129;
				break;
			case 134:

				current = 129;
				break;


			case 152:
				current =  300; //last line.... 

				break;



			case 160:
					current = 194
				 break;


			case 160:
				 
			// unhide choise buttons 
				
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				document.getElementById('choiseone').innerHTML = `Go back `;
				document.getElementById('choisetwo').innerHTML = ` Go Right `;
				document.getElementById('choisethree').innerHTML = ` Getting thirsty `;
				if(temp === 'one'){
					current = 104;// go left
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					

					current = 160 ; // go right
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 161; // getting thirsty
					getstory(current);
				}

				 break;


				 case 168:
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
					current = 169;// horizator
					// print out array
					getstory(current);

				}
				if(temp === 'two'){ 
					current = 172 ; // directions
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 173; // help
					getstory(current);
				}
				else if (temp  === 'four'){
					current = 174; // next 
					getstory(current);
				}

				 break;


			case 169:
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
					current = 170;// library function 
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					current = 171 ; // Important note
					// print out array
					getstory(current);
				}
				else if (temp  === 'three'){
					current = 168; //Back to horizator
					getstory(current);
				}
				else if (temp  === 'four'){
					current = 171; // next
					getstory(current);
				}

				 break;

			case 170:

				current = 169;
				break;

			case 171:
				current = 169;
				break;

			case 172:

				current = 168;
				break;
			case 173:

				current = 168;
				break;


case 177:
			hide('Next');
				hide('choiseone');
				hide('choisetwo');
				hide('choisethree');
				document.getElementById('choiseone').innerHTML = `The Water Center  `;
				document.getElementById('choisetwo').innerHTML = ` Drydock`;
				document.getElementById('choisethree').innerHTML = ` The Exercise Room `;
			
				hide('choisefour');
				hide('choisefive');
				hide('choisesix');
				document.getElementById('choisefour').innerHTML = `Great Hall  `;
				document.getElementById('choisefive').innerHTML = ` Central Storage  `;
				document.getElementById('choisesix').innerHTML = ` Central Control `;
				hide('choiseseven');
				hide('choiseeight');
				document.getElementById('choiseseven').innerHTML = `Follow Brady and Aster  `;
				document.getElementById('choiseeight').innerHTML = ` Getting Thirsty  `;
				if(temp === 'one'){
					current = 178;// The Water Center 
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					current = 179 ; // Drydock
					// print out array
					getstory(current);
				}
				 if (temp  === 'three'){
					current = 181; // The Exercise Room
					getstory(current);

				}
				if(temp === 'four'){
					current = 186;// great hall
					// print out array
					getstory(current);

				}
				if(temp === 'five'){
					current = 182 ; // central storage 
					// print out array
					getstory(current);
				}
				if (temp  === 'six'){
					current = 185; // Central Control
					getstory(current);
				}
				if(temp === 'five'){
					current = 96; // follow brady and aster 
					// print out array
					getstory(current);
				}
				else if (temp  === 'six'){
					current = 112; // getting thursty
					getstory(current);
				}

				break;

			case 178:

				current = 177;
				break;

			case 179:
				current = 177;
				break;

			case 180:

				current = 177;
				break;
			case 182:

				current = 177;
				break;
			case 185:

				current = 177;
				break;

			case 194:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiseone');
				hide('choisetwo');
				document.getElementById('choiseone').innerHTML = `He takes  the seed `;
				document.getElementById('choisetwo').innerHTML = `  He doesn't take the seed`;

				if(temp === 'one'){
					current = 194;// takes
					// print out array
					getstory(current);

				}
				else if(temp === 'two'){
					

					current = 196 ; // no take
					// print out array
					getstory(current);
				}
				 break;

			case 195:
					current= 300;  // last line
				break;

			case 197:
					current= 300;  // last line
				break;

			case 198:
					current = 162 ;
				break;

			case 301: 
					window.alert('horizator');
					//horizatorstart();	
					current++;
				
				break;



			case 201:

				current = 79 ;
				break;

			case 206:

				current = 79 ;
				break;


			case 474:

				//hide('choiceone');
				//document.getElementById('choiseone').innerHTML = `Acnologments  `;

				//current = -1;// states story over. 
				break;

			default:
				
				current++;
				//print out array

			
		}

	
}
	//document.getElementById('playbox').innerHTML = `  ${array[current]} `
	//getstory(current);

}