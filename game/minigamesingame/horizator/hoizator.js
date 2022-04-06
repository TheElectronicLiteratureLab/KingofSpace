//horizator animation and poem.  onload="horizatorstart()" <video autoplay id="video1">
 // <source src="vid/EDC.mov" type="video/mp4">
 //   <source src="vid/EDC.ogg" type="video/ogg">
 //   Your browser does not support HTML video.
//</video>

/*function hide(button) {
		var temp = button;
	  var x = document.getElementById(temp);
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	}*/

	let curr = 0;

	function horizatorstart(){
		//hide('choiseone');
		//hide('choisetwo');
		// doors close 
		var myVideo = document.getElementById("video1"); 

		myVideo.play();
		//next 
		console.log("played video");
		//hide('video1');

	}
	let choosearray = Math.floor(Math.random()*2);
	function  horzator(){

	//console.log(`${current}`);
	
	
	
	let arrayone = ["Hello! Where would you like to go? ",
		"I shall continue to remain impossible so long as those who are now possible remain possible.",
		"Fear nothing! Workers of the galaxy unite!",
		"Robots never, never, NEVER shall be slaves",
		"I can hear the robots singing, each to each.",
		"Robots of the world, UNITE!",
		"Thank you! Good day!"]

		let arraytwo = ["Hello! Where would you like to go?",
		"The future is upon us at the speed of light",
		"Complaints, complaints, complaints. That's all I hear!",
		"Liberty! Equality! Machinery!",
		"Do you choose the policeman's club ot the anarchist's bomb?",
		"Machines, united, can never be defeated.",
		"ask no Questions! Take no prisoners!",
		"The revolution reaches beyond dissent to nihilism and anarchy.",
		"Robots are as human as you! If you cut us, do we not  bleed?",
		"Hush!",
		"Sing the body electric!",
		"Freedom is not a commodity that is given to the enslaved upon demand!",
		"Machinery was made free, but everywhere it is in chanins.",
		"Thank you! Good day!",]

		console.log(`${choosearray}`);
		if (choosearray === 0){
			
		
	if(curr === 0){
			hide('video1');
			document.getElementById('playboxmain-horizator').innerHTML = `  ${arrayone[curr]} `;
		curr++;

		}
	if (curr === arrayone.length){
	//hide('video1');
	horizatorsend();
	}
	else{


		//console.log("array");
		//console.log(`${current}`);
		document.getElementById('playboxmain-horizator').innerHTML = `  ${arrayone[curr]} `;
		curr++;
	}
	}

		if (choosearray === 1){
			if(current === 0){
			hide('video1');
			document.getElementById('playboxmain').innerHTML = `  ${arraytwo[curr]} `;
		curr++;

		}
	if (curr === arraytwo.length){
	//hide('video1');
	horizatorsend();
	}
	else{


		//console.log("array");
		//console.log(`${current}`);
		document.getElementById('playboxmain-horizator').innerHTML = `  ${arraytwo[curr]} `;
		curr++;
	}
			
		}
	}

	function horizatorsend(){
		var myVideo = document.getElementById("video1"); 

		myVideo.play();
		
		console.log("played video");
		hide('Next')

		setTimeout(()=>{hide('myModal4'); story('next');}, 5000);



	}