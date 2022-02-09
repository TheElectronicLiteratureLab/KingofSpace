//story 

//  JavaScript start here

	


	let wrapper = document.getElementById('wrapper');
	let boxmain = document.getElementById('mainstory');
	//box.style.backgroundImage =  "url(radar1.jpg)";
	
	let current = 0;
   
	
let array = ["Sunside of the Asteroid Belt,  the fertile Empire of  Terra stretches from Venus to Mars. The Emperor reigns here with his  Children, the Priestess and the Red King. The Terrans  flourish on three  worlds, two inhabited moons, and hundreds of bata, the spacebore colonies run by the Six Houses. <br> <br> Darkside lies the Lo-EuropaComplex, home of  the inhumans, rebels against the Empire. <br> <br> Between them  are  the Rocks-the Asteroid Belt,  quarantined against men and unmen.",

"It is a  place of unimaginable  emptiness. In 690 billion square miles, only three asteroids can support a Class A town: Pallas the Whorehouse,  Circe the prison, and Ceres the Bureaucracy. From these three asteroids, hidden  behind  glass screens  and virus filters, the Terran administrators try to hold a territory  larger than all of the Empire.   <br>  <br> The Independent Trading Colonies scratch out a living in Beltspace. Each ITC supports perhaps 50 to 100 humans. But between the ITCs and the three, there is emptiness, desertion, and silence. <br> 50 years ago, it was different.  But then the Incarnations came, the Priestess and the Red King…  <br> <br>  And after them, the Plague…",

"Year 919 of  the Empire. On his dying spaceboat,  Tam Ross dreams… <br> He is back on ITC 3502, curled up  in the sleeping pod he shares with his mother. His mother is a very important person,  a watchman at the WaterCenter. Their pod hangs by the big water tanks. <br> <br> He is an important person too. <br>  He cracks  open the sleeping pod and sniffs the cool fresh air. The auxiliary lights flicker dimly. The sunlights are still off. In a tiny spotlight, the sacred puppet of  the Rice Emperor dances in the wind from the air vents.", //(corner image)

"Tam touches the edge of the sleeping pod and wriggles out the seam. The cool damp air raises goosebumps on his skin. He runs over the prickly- grassed nutrient floor and climbs up the ladder to the biggest tank. <br> He jumps in and begins swimming among the koi,  in the cold early-morning water, and the big fish rub their bodies against his and kiss him, asking for food.", //(sleeping pod image ?) 

"But in the dream, the Rice Emperor reaches up to his puppet frame and breaks the strings that hold him. He strides across the air toward Tam, across the surface of the water. He stands on the water, glaring with rage, pointing at Tam, and the Imperial Soldiers surround them. <br> 'Blasphemer! Traitor!' <br> He grabs Tam tight by the left hand and draws his fingernail across the complex gene-tattoo that covers Tam's palm. The tattoo that shows his plague resistance. The pain claws at Tam's chest and he cannot breath. the gene-tattoo bubbles and burst.", //(corner image)

"'The Uprising shall fail!' <br> The soldiers grab him by the neck, drag him- <br> Tam cannot  get air- he must breathe- ",//(corner image)

"He wakes up gasping. <br> The oxygen depletion alarm is wailing. Every gasp is a knife in his lungs. <br> He cannot remember for a moment which auxiliary oxygen tanks are still unused. He flicks switches clumsily with his left hand.  <br> One tank left.",

"His eyes blur as he tries to read nav charts. He is only twenty-tree but his hands shake as he keys in chart coordinates. <br> He remembers his dream and smiles mirthlessly. They burned his hand on Pallas, trying to make him give names of the others who were trying to breed Plague resistance. Some Priestess's slave-King burned the gene tattoo off his palm, skin, nerves  and all. He clenches and unclenches it, holding his anger in his bad hand. <br> There is no inhabited asteroid within a halfmonth, not even a miner's claim. And he has less that a shipday worth of air.", 

// Game here radar....

"The radar beacon has locked on to something. <br> Barely visible, a shadow-shape blocks the stars. <br> Eternal Mother! - it's a ship. An old one, and huge. <br> It's the size of a Class A town, a great irregular cloud of modules and environments, furred with the junk of a thousand System journeys, revolving around itself in a vast complexity of orbits. At its edges he can see the stars though the cloud, but in its center the pods swarm so thickly that the ship looks like a single vast solid object. <br> And it is dark. No lights shine from it: no red warning lamps, no yellow haze of sunlights.",

"*** LADY NII: HERMES-CLASS GREATSHIP *** <br> *** WARNING!*** <br> *** ABANDONED IMPERIAL YEAR 869 *** <br> *** MAY BE CONTAMINATED BY PLAGUE *** ",

" Abandoned since the Plague struck. <br> Fifty years abandoned. <br> Yet this ship, Nii, may still have some life. Oxygen, algae… <br> Enough to live on. Enough to make a place with, in these dead asteroids. By the Emperor and his Mother, Tam could live… <br> And Tam's are supposed to be resistant to Plague. <br> How resistant?",

//image of great ship or life  ship? 
 
" What in the Lady's name is that? <br> It is an opal set in jet, a white smoothness, curved roundly like a woman. A lifeship. <br> Tam throws  back his head and laughs.<br> What a present from the Emperor-worshippers! Lifeship are full of genetic material. The little white moon can restoc an entire planet. <br> It can restock a Greatship.",

" But there will be a crew. <br> A Priestess and her Red King. The chief Imperial servants in the Asteroids. <br> The Priestess with her powers controls life and death in the Rocks. The Red King is her lover, her helper, her bodyguard. A condemned criminal, a violent man, he is linked to her by bonds as strong as life. <br> They’re trouble . But so is Tam. ",

// choice one - life ship or great ship 

]


	//function playAudio(){
	//audio.play();
	//}

	//need to add print array for the readout 

	function hide() {
	  var x = document.getElementById("main");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	}


// need to change to if statements 

 function story(button) {
	
	var temp = button;
	console.log(temp);
	
	document.getElementById('playboxmain').innerHTML = `  ${array[current]} `

	if(temp === 'next' || temp === 'one' || temp === 'two'){

	
		console.log ("made it to while loop");
		switch(current){
			case 8 : 
				// print out array 
				window.alert('radar game');
				radarstart();
				// pop up option for mini game 
				console.log ("case  8");
				 current = 9;
				break; 
			case 13:
				// unhide choise buttons 
				// hide next 
				if(temp === 'one'){
					current = 14;// Life ship
					// print out array

				}
				if(temp === 'two'){
					current = 14 ; // Great ship 
					// print out array

				}
				 break;

			default:
				
				current++;
				//print out array
			
		}

	
}
	//document.getElementById('playbox').innerHTML = `  ${array[current]} `


}