//story 

//  JavaScript start here
let wrapper = document.getElementById('wrapper');
let boxmain = document.getElementById('mainstory');
//box.style.backgroundImage = "url(radar1.jpg)";

let current = 0;

window.onload = playGame();
	
function onstart(){
	console.log('it got here onstart');

	hide('choiceone');
	hide('choicetwo');
	hide('choicethree');
	hide('choicefour');
	hide('choicefive');
	hide('choicesix');
	hide('choiceseven');
	hide('choiceeight');
	hide('myBtn');// radar
	hide('myBtn2'); //slider puzzle / tiger
	hide('myBtn3'); // tetris
	hide('myBtn4'); // horizator
	hide('myBtn5'); // library
    hide('myBtn6'); // troop
    hide('myBtn7');	// kitchen 
	hide('Next');
	hide('pond');

}

	//function playAudio(){
	//audio.play();
	//}

	//need to add print array for the readout 

	/*function hide(button) {
		var temp = button;
	  var x = document.getElementById(temp);
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	}*/

function playGame(){
	//window.location.assign("index.html");
	getstory(current);
	//hide('Next');
}

// need to change to if statements 
	//hide('choiceone');
	//hide('choicetwo');

console.log(story('next'));

function story(temp) {
	
	//let temp = button;
	console.log(temp);
	
	getstory(current);

	var x = document.getElementById('body');
	var z = document.getElementById('personimg');
	var r = document.getElementById('personimgright');

	//document.getElementById('playboxmain').innerHTML = `  ${array[current]} `

	if(temp === 'next' || temp === 'one' || temp === 'two' || temp === 'three'|| temp === 'four' || temp === 'five' || temp === 'six' || temp === 'seven' || temp === 'eight'){
		//console.log('im here in next')
	
		//console.log ("made it to while loop");
		switch(current){
			
			case 2:
			hide('personimg');
				z.style.backgroundImage="url(imgstory/kos-tam-leftquarterface.png)";
				current++;
				break;
			case 3:
			hide('personimg');
				//z.style.backgroundImage= "url(img/maingame-starbackground.png)";
				hide('pond');
				current++;
			break;
			case 4:
				hide('pond');
				current++;
				break;
			case 7 : 
				// print out array 
				hide('personimg');
				z.style.backgroundImage="url(imgstory/kos-radar-compleet.png)";
				hide('myBtn')

				//window.alert('radar game');
				/*if(confirm("do you want to play a mini game? radar game")){
					//radarstart()
					txt = "You  pressed Ok!";
				}
				else{
					txt = "You pressed Cancel!";
				}*/
				//radarstart();
				// pop up option for mini game 
				//console.log ("case  8");
				//miniGame("radar");

				//window.onclick = hide('myBtn');
				current ++;

				break; 
			case 8:
			hide('personimg');
			//x.style.backgroundImage= "url(img/maingame-starbackground.png)";
				hide('myBtn');
				current++;
				break;

			case 11:
				//play animation of great ship or life ship...?

				current++;
				break;

			case 12:
				//play animation of great ship or life ship...?
				//hide('personimg');
				x.style.backgroundImage="url(img/lifeship.png)";
				current++;
				break;

			case 13:
			//hide('personimg');
				// unhide choise buttons 
				x.style.backgroundImage= "url(img/maingame-starbackground.png)";
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `Tam Rosse brings his ship in to Synchronized orbit with the Lifeship <b>&#8250;</b>`
				document.getElementById('choicetwo').innerHTML = ` Tam Rosse brings his ship in to Synchronized orbit with the Greatship  <b>&#8250;</b>`

				if(temp === 'one'){

					current = 14;// Life ship
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					
					current = 207 ; // Great ship 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;
			case 15:

						x.style.backgroundImage= "url(img/Title-Screen-BG.png)";
						
						current++;
					break;
			case 16:
				x.style.backgroundImage= "url(img/maingame-starbackground.png)";
			hide('personimgright');
				r.style.backgroundImage="url(imgstory/kos-aster-earring-3d-final.mp4)";
				current++;
				break;

			case 17:
				hide('personimgright');
				
				current++;
				break;

				

			case 20:
				hide('personimgright');
				r.style.backgroundImage="url(imgstory/kos-aster-earring-3d-final.mp4)";
				current++;
				break;
				
			
			case 21:
				// unhide choise buttons 
				// hide next 
				//hide('personimgright');
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `The Ceremony ritual is just an excuse; removing the earring is the key to her powers. He'll try that, then talk with her rationally. <b>&#8250;</b> `;
				document.getElementById('choicetwo').innerHTML = ` Maiting with this woman would me like a dangerous drug.... It's been a long time since he had a dangerous drug. <b>&#8250;</b> `;
				
				if(temp === 'one'){
					current = 22;// forgets memory 
					// print out array
					getstory(current);
					console.log(story('next'));
					//hide('personimgright');
					//r.style.backgroundImage="url(imgstory/kos_aster_earing.png)";
				

				} else if(temp === 'two'){
					current = 70 ; // wake her up with controles  
					// print out array
					getstory(current);
					console.log(story('next'));
				}

				break;

				

				

				case 23:
				hide('personimgright');
				current++;
				break;

			case 40:
				x.style.backgroundImage="url(imgstory/kos-watercenter-2-final.png)";
				current++;
				break;

			

			case 48:
			x.style.backgroundImage="url(img/maingame-starbackground.png)";

				hide('personimgright');
				r.style.backgroundImage="url(imgstory/kos-spyfly-3d-final.mp4)";
				current++;
				break;
			case 49:
				hide('personimgright');
				current++;
				break;

			case 69: 
				current = 323;//an end 

				break;

				case 70:
				hide('personimgright');
				current++;
				break;

			case 72:
			hide('personimgright');
			r.style.backgroundImage="url(imgstory/kos-seed-3d-final.mp4)";
			current++;
			break;
			case 73:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `Tam Rosse gives her the seeds <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Tam Rosse doesn't give her the seeds <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 74;// give seeds
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					current = 203 ; // not give seeds 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;

			case 74:
				hide('personimgright');
				current++;
				break;

			case 76:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `He says yes <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` He says no  <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 77;// yes
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					current = 199 ; // no 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;

			case 79:  

				hide('myBtn2');
				//window.alert('tiger game');
				/*if(confirm("do you want to play a mini game? tiger game")){
					//radarstart()
					txt = "You  pressed Ok!";
				}
				else{
					txt = "You pressed Cancel!";
				}*/
				//miniGame("slide");
				// pop up option for mini game 
				//console.log ("case  15");
				current ++;

				break;
			case 80:  

			hide('myBtn2');
				
				current ++;

				break;

			case 91:
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `next <b>&#8250;</b> `;
				document.getElementById('choicetwo').innerHTML = ` Favor <b>&#8250;</b>`;

				if(temp === 'one'){ 
					current ++; // next
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					libraryTwo(14); // favor def. 
					current ++; // Great ship 
					// print out array
					//getstory(current);
					//console.log(story('next'));
				}
				break;

			case 98:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `The Priestess would like him to drink it. He's not going to give her the satisfaction. No. <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` It doesn't matter, she's pledged to Brady anyway. Why Not? <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 99;// no
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					current = 198 ; // why not 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;

			case 100:	
			// unhide choise buttons 
				
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				document.getElementById('choiceone').innerHTML = `Door one <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Door two <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` Next <b>&#8250;</b>`;
				if(temp === 'one'){
					current = 101;//  door one
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 102 ; // door two
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'three'){
					current = 103; // next
					getstory(current);
					console.log(story('next'));
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
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				document.getElementById('choiceone').innerHTML = `Go left <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Go Right <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` Getting thirsty <b>&#8250;</b>`;
				if(temp === 'one'){
					current = 105;// go left
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 160 ; // go right
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'three'){
					current = 161; // getting thirsty
					getstory(current);
					console.log(story('next'));
				}

				break;

			case 105:
					// unhide choise buttons 
				
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				hide('choicefour');
				document.getElementById('choiceone').innerHTML = `Horizator <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Directions <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` Help <b>&#8250;</b>`;
				document.getElementById('choicefour').innerHTML = ` Next <b>&#8250;</b>`;
				if(temp === 'one'){
					current = 106;// horizator
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){ 
					current = 109 ; // directions
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'three'){
					current = 110; // help
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'four'){
					current = 111; // next 
					getstory(current);
					console.log(story('next'));
				}

				break;

			case 106:
	// unhide choise buttons 
				
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				hide('choicefour');
				document.getElementById('choiceone').innerHTML = `Library Fuction <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Important note <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` Back to Horizator <b>&#8250;</b>`;
				document.getElementById('choicefour').innerHTML = ` Next <b>&#8250;</b>`;
				if(temp === 'one'){
					current = 107;// library function 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 108 ; // Important note
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'three'){
					current = 105; //Back to horizator
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'four'){
					current = 108; // next
					getstory(current);
					console.log(story('next'));
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


			case 111:
				x.style.backgroundImage="url(imgstory/kos-foxdoor-final.png)";
				//window.alert('horizator');
				hide('myBtn4');
				//miniGame("horizator");
				// pop up option for mini game 
				//console.log ("case  15");
				current ++;

				break;
			case 112:
				x.style.backgroundImage="url(img/maingame-starbackground.png)";
				//window.alert('horizator');
				hide('myBtn4');
				hide('myBtn7');
				//miniGame("kitchen");
				// pop up option for mini game 
				//console.log ("case  15");
				current ++;

				break;

			case 113:
				//window.alert('kitchen');
				hide('myBtn7');
				//miniGame("kitchen");
				// pop up option for mini game 
				//console.log ("case  15");
				current ++;

				break;

			case 116:	
			// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `Where are Brady and the Priestess? <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = `  Go to Great Hall <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 117;// Where are Brady and the Priestess? 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					current = 153 ; // Great Hall 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;
			
			case 122:
			x.style.backgroundImage= "url(img/maingame-starbackground.png)";
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				document.getElementById('choiceone').innerHTML = `The Water Center  <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Drydock <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` The Exercise Room <b>&#8250;</b>`;
			
				hide('choicefour');
				hide('choicefive');
				hide('choicesix');
				document.getElementById('choicefour').innerHTML = `Great Hall <b>&#8250;</b>`;
				document.getElementById('choicefive').innerHTML = ` Central Storage  <b>&#8250;</b>`;
				document.getElementById('choicesix').innerHTML = ` Central Control <b>&#8250;</b>`;
				hide('choiceseven');
				document.getElementById('choiceseven').innerHTML = `Ask the priestess for help <b>&#8250;</b>`;
				
				if(temp === 'one'){
					current = 123;// The Water Center 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 124 ; // Drydock
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if (temp  === 'three'){
					current = 125; // The Exercise Room
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'four'){
					current = 135;// Great Hall
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'five'){
					current = 127 ; // central storage 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if (temp  === 'six'){
					current = 128; // Central Control
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'seven'){
					current = 129; // Ask the priestess for help
					getstory(current);
					
					console.log(story('next'));
				}

				break;

			case 123:
				x.style.backgroundImage="url(imgstory/kos-watercenter-2-final.png)";
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
			x.style.backgroundImage= "url(img/maingame-starbackground.png)";
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				document.getElementById('choiceone').innerHTML = `The Water Center <b>&#8250;</b> `;
				document.getElementById('choicetwo').innerHTML = ` Drydock <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` The Exercise Room <b>&#8250;</b>`;
			
				hide('choicefour');
				hide('choicefive');
				hide('choicesix');
				document.getElementById('choicefour').innerHTML = `Great Hall <b>&#8250;</b>`;
				document.getElementById('choicefive').innerHTML = ` Central Storage  <b>&#8250;</b>`;
				document.getElementById('choicesix').innerHTML = ` Central Control <b>&#8250;</b>`;
				
				if(temp === 'one'){
					current = 130;// The Water Center 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 131 ; // Drydock
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if (temp  === 'three'){
					current = 132; // The Exercise Room
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'four'){
					current = 135;// great hall
					// print out array
					getstory(current);

					console.log(story('next'));
				}
				if(temp === 'five'){
					current = 133 ; // central storage 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'six'){
					current = 134; // Central Control
					getstory(current);
					console.log(story('next'));
				}
				break;

			case 130:
				x.style.backgroundImage="url(imgstory/kos-watercenter-2-final.png)";
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

			case 135:
			x.style.backgroundImage="url(imgstory/kos-greathall.png)";
			
			current++;
			break;

		case 136:
			
			x.style.backgroundImage= "url(img/maingame-starbackground.png)";
			current++;
			break;

			case 152:
				current =  323; //last line.... 

				break;

			case 153:
				x.style.backgroundImage="url(imgstory/kos-greathall.png)";
				current++;
				break;

			case 154:
				x.style.backgroundImage= "url(img/maingame-starbackground.png)";
				current++;
			break;

			case 159:
				current = 193;
				break;
			

			case 160:
				
			// unhide choise buttons 
				
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				document.getElementById('choiceone').innerHTML = `Go back <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Go Right <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` Getting thirsty <b>&#8250;</b>`;
				if(temp === 'one'){
					current = 104;// go left
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					
					current = 160 ; // go right
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'three'){
					current = 161; // getting thirsty
					getstory(current);
					console.log(story('next'));
				}

				break;

				case 168:
				// unhide choice buttons 
				
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				hide('choicefour');
				document.getElementById('choiceone').innerHTML = `Horizator <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Directions <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` Help <b>&#8250;</b>`;
				document.getElementById('choicefour').innerHTML = ` Next <b>&#8250;</b>`;
				if(temp === 'one'){
					current = 169;// horizator
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){ 
					current = 172 ; // directions
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'three'){
					current = 173; // help
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'four'){
					current = 174; // next 
					getstory(current);
					console.log(story('next'));
				}

				break;

			case 169:
				// unhide choise buttons 
				
				//hide('Next');
				//hide('choiceone');
				//hide('choisctwo');
				//hide('choicethree');
				//hide('choicefour');
				document.getElementById('choiceone').innerHTML = `Library Fuction <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Important note <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` Back to Horizator <b>&#8250;</b>`;
				document.getElementById('choicefour').innerHTML = ` Next <b>&#8250;</b>`;
				if(temp === 'one'){
					current = 170;// library function 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 171 ; // Important note
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'three'){
					current = 168; //Back to horizator
					getstory(current);
					console.log(story('next'));
				}
				else if (temp  === 'four'){
					current = 171; // next
					getstory(current);
					console.log(story('next'));
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
			x.style.backgroundImage= "url(img/maingame-starbackground.png)";
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				document.getElementById('choiceone').innerHTML = `The Water Center  <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Drydock <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = ` The Exercise Room <b>&#8250;</b>`;
			
				hide('choicefour');
				hide('choicefive');
				hide('choicesix');
				document.getElementById('choicefour').innerHTML = `Great Hall  <b>&#8250;</b>`;
				document.getElementById('choicefive').innerHTML = ` Central Storage  <b>&#8250;</b>`;
				document.getElementById('choicesix').innerHTML = ` Central Control <b>&#8250;</b>`;
				hide('choiceseven');
				hide('choiceeight');
				document.getElementById('choiceseven').innerHTML = `Follow Brady and Aster  <b>&#8250;</b>`;
				document.getElementById('choiceeight').innerHTML = ` Getting Thirsty <b>&#8250;</b> `;
				if(temp === 'one'){
					current = 178;// The Water Center 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 179 ; // Drydock
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if (temp  === 'three'){
					current = 181; // The Exercise Room
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'four'){
					current = 186;// great hall
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'five'){
					current = 182 ; // central storage 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if (temp  === 'six'){
					current = 185; // Central Control
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'seven'){
					current = 96; // follow brady and aster 
					// print out array
					getstory(current);
				}
				else if (temp  === 'eight'){
					current = 111; // getting thursty
					getstory(current);
					console.log(story('next'));
				}

				break;

			case 178:
				x.style.backgroundImage = "url(imgstory/kos-watercenter-final.jpg)";
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

			case 193:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `He takes  the seed <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = `  He doesn't take the seed <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 194;// takes
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					

					current = 196 ; // no take
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;

			case 195:
					current= 323;  // last line
				break;

			case 197:
					current= 323;  // last line
				break;

			case 198:
					current = 162 ;
				break;

			case 201:

				current = 79 ;
				break;

			case 206:

				current = 79 ;
				break;

			case 208:
				x.style.backgroundImage= "url(img/kos-materialsentryport.png)";
						
						current++;
			break;


			case 209:  
				//window.alert('tiger game');
				x.style.backgroundImage= "url(img/maingame-starbackground.png)";
				hide('myBtn2');
				// pop up option for mini game 
				//console.log ("case  15");
				current ++;

				break;
		case 210:  
				//window.alert('tiger game');
				
				hide('myBtn2');
				// pop up option for mini game 
				//console.log ("case  15");
				current ++;

				break;

			case 211:
			// unhide choise buttons 
				// hide next 
				hide('personimgright');
				r.style.backgroundImage= "url(imgstory/kos_dagger_final-02.png)";
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `Go back to the life ship <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = `Yell at the comm box <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 212;// life ship 
					// print out array
					getstory(current);
					hide('personimgright');
					//x.style.backgroundImage= "url(img/maingame-starbackground.png)";
					console.log(story('next'));

				} else if(temp === 'two'){
					current = 213 ; // comm box
					// print out array
					getstory(current);
					hide('personimgright');
					//x.style.backgroundImage= "url(img/maingame-starbackground.png)";
					console.log(story('next'));
				}
				break;

			case 212:
			hide('personimgright');
				current = 211;
				break;

			case 213:
			hide('personimgright');
			current++;
			break;
			case 215:
			hide('personimg');
				z.style.backgroundImage= "url(imgstory/kos-brady-leftquarterface.png)";
				current++;
				break;
			
			case 216:
		hide('personimg');
				z.style.backgroundImage= "url(img/maingame-starbackground.png)";
				current++;
				break;

			case 241: 
 				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				hide('choicethree');
				document.getElementById('choiceone').innerHTML = `I could give the  Priestess her  powers.  The  way I figure it, out  best chance  is to  reprogram the  Nii. <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = `  I’m not cooperating with the Priestess. But there may be weapons somewhere aboard,  or a ship I can use  to escape. <b>&#8250;</b>`;
				document.getElementById('choicethree').innerHTML = `  Once Brady is dead, the Nii  may be more reasonable.  Kill Brady…  <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 242;// life ship 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				if(temp === 'two'){
					current = 243 ; // comm box
					// print out array
					getstory(current);
					console.log(story('next'));
				}

				if(temp ==='three'){

					current = 322; // comm box

					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;
				
			case 242:
					current = 241;
				break;

			case 247:
				hide('personimgright');
				r.style.backgroundImage="url(imgstory/kos-spyfly-3d-final.mp4)";
				current++;
				break;
			case 248:
				hide('personimgright');
				current++;
				break;

			case 257:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `Go back to the Lady Nii <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = `  look for auxiliary air tanks, going further into the troop carrier. <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 258;// life ship 
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					current = 259 ; // comm box
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;

				case 255:
				x.style.backgroundImage="url(imgstory/kos-storagebays.png)";
					current++;
					break;
					case 256:
				x.style.backgroundImage="url(img/maingame-starbackground.png)";
					current++;
					break;

				case 258:
					current = 261;
					break;

			case 261:  
				//window.alert('troopcarrior game');
				//miniGame("troop");
				
				//hide('myBtn6'); // troop
				// pop up option for mini game 
				console.log ("troop game here");
				current ++;

				break;
			case 262: 
				hide('personimg');
				//window.alert('troopcarrior game');
				//miniGame("troop");
				z.style.backgroundImage="url(imgstory/kos-tam-blurred2.png)";
				 //hide('myBtn6'); // troop
				// pop up option for mini game 
				//console.log ("case  15");
				current ++;

				break;

			case 263:
			hide('personimg');
			current++;
			break;



			case 264:
				// unhide choise buttons 
				// hide next 
				hide('Next');
				hide('choiceone');
				hide('choicetwo');
				document.getElementById('choiceone').innerHTML = `No <b>&#8250;</b>`;
				document.getElementById('choicetwo').innerHTML = ` Yes <b>&#8250;</b>`;

				if(temp === 'one'){
					current = 265;// no
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				else if(temp === 'two'){
					

					current = 280 ; // yes
					// print out array
					getstory(current);
					console.log(story('next'));
				}
				break;

			case 278:

				current = 293;
				break;

			case 293:
			// unhide choice buttons 
				// hide next 

				//hide('Next');
				hide('myBtn5'); //library
				//hide('choicetwo');
				//hide('choicethree');
				//hide('choicefour');
				//document.getElementById('choiceone').innerHTML = `Library`;
				//document.getElementById('choicetwo').innerHTML = `  Decontamination Procedures`;
				//document.getElementById('choicethree').innerHTML = `  Ship Passenger list`;
				//document.getElementById('choicefour').innerHTML = `  Next`;


				/*if(temp === ''){
					current = 294;// life ship 
					hide('myBtn5');
					// print out array
					getstory(current);

				}
				if(temp === 'two'){
					

					current = 295 ; // Decontamination Procedures
					// print out array
					getstory(current);
				}

				if (temp ==='three'){
					current = 296 ; // Ship Passenger list
					// print out array
					getstory(current);
				}
				if (temp ==='four'){

					current = 297 ; // next
					//hide('myBtn5');
					// print out array
					getstory(current);
				}
				break;

			case 294:
				//hide('myBtn5');
				//library();
				current = 293 ;
				break; 

			case 295:

				current = 293;
				break;

			case 296:

				current = 293;*/
				current++;

				break;

			case 294:
			hide('myBtn5'); //tetris 
				
				//tetrus
				current ++;
				break;

			case 311:  
				// print out array 

				hide('myBtn3'); //tetris 
				

				//tetrus
				current ++;
				break;

			case 312:
				hide('myBtn3');
				current++;
				break;

			case 321:
				//hide(my);
				current = 323;
				break; 	

			case 322:
				current = 241;
				break;

			case 323:

				hide('choiceone');
				document.getElementById('choiceone').innerHTML = `Acknowledgments`;

				current++;
				break;
				case 324:

				hide('choiceone');
				
				if(confirm("do you want to restart and play again")){// tetrus game
					current = 0;// states story over. 
					//txt = "You  pressed Ok!";
					console.log(story('next'));
				}
				else{
					txt = "You pressed Cancel!";
					// dose not do anything... rework to main menu
					console.log(story('next')); 
				}
				break;

			default:
				
				current++;
				//print out array
		}
	}
	//document.getElementById('playbox').innerHTML = `  ${array[current]} `
	//getstory(current);
}