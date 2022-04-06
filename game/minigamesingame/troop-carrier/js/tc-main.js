let clicks = 0;
function addToClicks(){
    clicks ++;
    console.log(clicks)
    if (clicks == 5) {
        hide('myModal6');
        story('next');
        //window.location.assign("../game/index.html");
    }
}

function clickChoice(){
    let choice = document.querySelector('input[type="checkbox"]:checked').value
    console.log(choice);

    switch(choice){
        case "tc-1":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-1\"><p>A cargo locker, extending into the ship. It's dark, cold, and empty.</p></section>";
            document.getElementById("tc-text-1").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-2":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-2\"><p>In a stuck rusty drawer, a wadded-together, stiff heap of clothes. Old stickhook-cloth slippers, a crumpled rigidsuit liner, some undershorts, and one or two more rainbows for the porno reader.</p><p>Tam closes the drawer.</p></section>";
            document.getElementById("tc-text-2").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-3":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-3\"><p>The small cargo area contains algae in stasis.</p><p>With enough water, and enough time, they would make oxygen.</p><p>No use now.</p></section>";
            document.getElementById("tc-text-3").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-4":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-4\"><p>This long, low drawer is full of data rainbows for the Terran High Commissioner on Ceres.</p><p>They must be important: who would bring software to Ceres by hand when they could just send it over the Net?</p></section>"; //There will be two choices here: take the software, or look for the air cylinders. If tam takes the software, he passes out. ***NOTE, There is no way for Tam to make it out of this puzzle without passing out. He must be rescued by the Priestess.
            //Also, there should be a mechanism to track clicks. After 5 clicks, Tam starts losing air. Tam should pass out once his air runs out. This can happen anywhere between 5 and 10 clicks. Figure out away to tie in the air guauge from the UI
            document.getElementById("tc-text-4").innerHTML += "<button id=\"software\" onClick=\"takeSoftware()\">Take the software</button><br><br>"
            document.getElementById("tc-text-4").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-5":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-5\"><p>A meter long, black and deadly: it's the spare laser rifle. The powerpack still reads nearly full.</p><p>That should give the Lady Nii something to think about.</p><p>Tam Whoops and wrestles the heavy gun out of the hold. Underneath it is a laser shield and he takes that too.</p></section>";
            document.getElementById("tc-text-5").innerHTML += "<button id=\"continue\" onClick=\"changeDom();  addToClicks();\">Continue</button>";
            break;
        case "tc-6":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-6\"><p>A cargo locker, extending into the ship. It's dark, cold, and empty</p></section>";
            document.getElementById("tc-text-6").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-7":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-7\"><p>A cargo locker, extending into the ship. It's dark, cold, and empty</p></section>";
            document.getElementById("tc-text-7").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-8":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-8\"><p>Tam works at the lock, then the pries it open.</p><p>Storage cartons, marked \"Important: Deliver to Ceres.\"</p><p>Something to look at another time. Ceres doesn't import air only bureaucrats.</p></section>";
            document.getElementById("tc-text-8").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-9":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-9\"><p>A cargo locker, extending into the ship. It's dark, cold, and empty.</p></section>";
            document.getElementById("tc-text-9").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
        case "tc-10":
            document.getElementById("troop-wrapper").innerHTML += "<section id=\"tc-text-10\"><p>A cargo hold extending back into the ship. Tam thinks he hears something scrabbling around.</p><p>Must be one of the little cargo robots. Nothing else could live in space for so long.</p><p>With enough C-ray damage to their software, those things can be dangerous. He slams the bulkhead closed.</p></section>";
            document.getElementById("tc-text-10").innerHTML += "<button id=\"continue\" onClick=\"changeDom(); addToClicks();\">Continue</button>";
            break;
    }

    document.getElementById("tc-puzzle").style.display = "none";
}

function changeDom(){

    /*reverts table and button back to original state */
    document.getElementById("tc-puzzle").style.display = 'revert';

    /*checks to see which elements exist and removes these elements from the dom so that only the table and button appear. */
    if(document.getElementById("tc-text-1")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-1"));
    } else if(document.getElementById("tc-text-2")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-2"));
    } else if(document.getElementById("tc-text-3")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-3"));
    } else if(document.getElementById("tc-text-4")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-4"));
    } else if(document.getElementById("tc-text-5")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-5"));
    } else if(document.getElementById("tc-text-6")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-6"));
    } else if(document.getElementById("tc-text-7")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-7"));
    } else if(document.getElementById("tc-text-8")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-8"));
    } else if(document.getElementById("tc-text-9")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-9"));
    } else if(document.getElementById("tc-text-10")){
        document.getElementById("troop-wrapper").removeChild(document.getElementById("tc-text-10"));
    }
}

function takeSoftware(){
    hide('myModal6');
    story('next');
   // window.location.assign("../game/index.html"); //change redirect to actual location once integration takes place. Currently redirects to the start of the main game.
}

