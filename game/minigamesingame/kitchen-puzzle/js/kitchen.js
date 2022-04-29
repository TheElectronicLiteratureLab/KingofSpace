let wrapper2 = document.getElementById("wrapper-kitchen")

//Check whether or not the tea kettle has been found
let hasTea = false;

function foundTea(){
    hasTea = true;
}

//This function is to check whether or not the player has found the teakettle
function checkTea(){
    if(hasTea == true){ //Tea Kettle image will go in the second section here. id=teaKettle-image
        wrapper2.innerHTML = "<section id=\"menu-2\"><p>Good.</p><ol start=\"2\"><li>Fill teakettle with water.<br>(Kettle will automatically add tea.)</li><li>Put kettle on stove.<br>(Burner will automatically light.)</li><li>Wait until water boils.</li><li>Serve.</li></ol></section><section id=\"elephantKettle\"><img id=\"tea-kettle\" src=\"./img/kos-teapot-shadow.png\"></section>";

        wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"kettle-faucet\" onclick=\"bringToFaucet();\">Bring teakettle to faucet</button>";
    } else {
        wrapper2.innerHTML = "<section id=\"tea-warning\"><p>First find the teakettle.<p><section>";
        wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"kitchen-back\" onclick=\"teaDirections();\">Back</button>";
    }
}

//kitchen menu generation
function menu(){
    wrapper2.innerHTML += "<section id=\"menu\"><p>Expertly caligraphed on the refrigerator door is a message:</p><p>Menu</p><p>Japanese Tea</p><p>Cucumber Sandwiches</p><p>That ough to be easy enough for you!</p><p><i>--The Lady Nii.</i></p></section><section id=\"koicabnetclosed\"><img id=\"koi-cabnet-closed\" src=\"./img/kos-shelves3.png\"></section>";
    wrapper2.innerHTML += "<section id=\"kitchen-buttons\"><br><button class=\"minigamebutton\" id=\"tea\" onclick=\"teaDirections();\">Make Tea</button><br><br><button class=\"minigamebutton\" id=\"sandwhich\" onclick=\"getSandwiches();\")>Get Sandwiches</button></section>";
    
    let rules = document.getElementById("rules");
    rules.style.display = 'none';
}

//tea directions genereation
function teaDirections(){
    let hideMenu = document.getElementById("menu");
    let hideButtons = document.getElementById("kitchen-buttons");

    wrapper2.innerHTML = "<section id=\"tea-directions\"><p>To make tea:</p><ol><li>Find the teakettle in the closet.</li><li>Fill teakettle with water.<br>(Kettle will automatically add tea.)</li><li>Put kettle on stove.<br>(Burner will automatically light.)</li><li>Wait until water boils.</li><li>Serve.</li></ol><button class=\"minigamebutton\" id=\"makeTea-continue\" onclick=\"checkTea();\">Continue</button></section>";

    wrapper2.innerHTML += "<section id=\"kitchen-closet\" class=\"grid-container\"><div class=\"grid-item\">1</div><div class=\"grid-item\">2</div><div class=\"grid-item\">3</div><div class=\"grid-item\">4</div><div id=\"found-teaKettle\" class=\"grid-item\" onclick=\"foundTea();\">5</div><div class=\"grid-item\">6</div><div class=\"grid-item\">7</div><div class=\"grid-item\">8</div></section><section id=\"koicabnetopen\"><img id=\"koi-cabnet-open\" src=\"./img/kos-shelves1.png\"></section>";
}

//bring kettle to faucet option
function bringToFaucet(){
    wrapper2.innerHTML = "<p>As Tam brings the kettle up to the faucet, a lightness in his head warns him that the gravity is lower up here...</p><p>Too late.</p><p>The water swirls gracefully out of the faucet and begins to form small damp galaxies near the ceiling.</p><p>Tam swooshes the kettle through the air, catchin water globules like a mad Boy Scout netting butterflies.</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"to-step-3\" onclick=\"nowWhat();\">Continue</button>";
}

function nowWhat(){
    wrapper2.innerHTML = "<p>Now what?</p><ol start=\"3\"><li>Put kettle on stove.<br>(Burner will automatically light.)</li><li>Wait until water boils.</li><li>Serve.</li></ol><p>Where's the burner?</p>"
    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"hmmm\" onclick=\"hmmm();\">H'mmm</button><br><button class=\"minigamebutton\" id=\"ahah\" onclick=\"ahah();\">Ahah?</button><br><button class=\"minigamebutton\" id=\"ow\" onclick=\"ow();\">Ow!</button>";
}

function hmmm(){
    wrapper2.innerHTML = "<p>Tam looks in the closet and doesn't find a stove anywhere.</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"to-step-3\" onclick=\"nowWhat();\">Continue</button>";
}

function ahah(){
    wrapper2.innerHTML = "<p>Does the faucet have anything to do with a stove?</p><p>Does the hose?</p><p>No....</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"to-step-3\" onclick=\"nowWhat();\">Continue</button>";
}

function ow(){
    wrapper2.innerHTML = "<p>Tam finds the burner by stepping on it.</p><p>It immediately turns on.</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"to-burner\" onclick=\"teaOnBurner();\">Continue</button>";
}

function teaOnBurner(){
    wrapper2.innerHTML = "<p>The teakettle begins murmuering with pleasure. \"...such an inCREDible sensation...<br>Little bubbles... thousands of them...<br>swelling and bursting, swelling and bursting...\"<br>\"Ooh...I feel so WARM...\"</p><p>Tam mutters to himself.</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"wait\" onclick=\"wait();\">Wait</button><br><button class=\"minigamebutton\" id=\"get-sandwiches\" onclick=\"getSandwiches();\">Get the sandwiches</button>";
    
}

function wait(){
    wrapper2.innerHTML = "<p>This is not that kind of game!</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"to-burner\" onclick=\"teaOnBurner();\">Continue</button>";
}

function getSandwiches(){
    wrapper2.innerHTML = "<section id=\"walkinfreezer\"><p>There's the refrigerator...</p><p>Tam hauls open the door and warily enters its cold, black depths.</p></section><section id=\"walkinfreezerimg\"><img id=\"freezer\" src=\"./img/kos-walkin-freezer.png\"></section>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-2\" onclick=\"getSandwiches2();\">Continue</button>";
}

function getSandwiches2(){
    wrapper2.innerHTML = "<p>Tam is in a maze of twisty little sandwiches, all alike.</p><p>Here is a piece of the cherry pie!</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"\" onclick=\"getSandwiches3();\">Continue</button><br><button class=\"minigamebutton\" id=\"eat-pie\" onclick=\"eatPie();\">Eat the pie</button>";
}

function eatPie(){
    wrapper2.innerHTML = "<p>Best cherry pie Tam ever ate.</p>";
    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-2\" onclick=\"getSandwiches3();\">Continue</button>";
}

function getSandwiches3(){
    wrapper2.innerHTML = "<p>Tam is in a twisty little maze of sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwhiches-3\" onclick=\"getSandwiches4();\">Continue</button>";
}

function getSandwiches4(){
    wrapper2.innerHTML = "<p>Tam is in a twisty maze of little sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwhiches-4\" class=\"minigamebutton\" onclick=\"getSandwiches5();\">Continue</button>";
}

function getSandwiches5(){
    wrapper2.innerHTML = "<p>Tam is in a twisty little maze of sandwiches, all alike.</p><p>There are some unrecognizable leftovers here!</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"\" onclick=\"getSandwiches6();\">Continue</button><br><button class=\"minigamebutton\" id=\"take-leftovers\" onclick=\"takeLeftovers();\">Take the leftovers</button>";
}

function takeLeftovers(){
    wrapper2.innerHTML = "<p>The leftovers snarl and run off into the dark.</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-6\" onclick=\"getSandwiches6();\">Continue</button>";
}

function getSandwiches6(){
    wrapper2.innerHTML = "<p>Tam is amazed by the twisty little sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-6\" onclick=\"getSandwiches7();\">Continue</button>";
}

function getSandwiches7(){
    wrapper2.innerHTML = "<p>Tam is in a little maze of twisty sandwiches, all alike.</p><p>There is an empty sandwich wrapper here!</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"take-wrapper\" onclick=\"takeWrapper();\">Take Wrapper</button>";
}

function takeWrapper(){
    wrapper2.innerHTML = "<p>You're kidding...</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"forget-it\" onclick=\"getSandwiches8()();\">Forget it</button><br><button class=\"minigamebutton\" id=\"littering-not-nice\" onclick=\"getSandwiches15();\">Littering isn't nice</button>";
}

//Forget it
function getSandwiches8(){
    wrapper2.innerHTML = "<p>Tam is in a little maze of twisty sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-8\" onclick=\"getSandwiches9();\">Continue</button>";
}

function getSandwiches9(){
    wrapper2.innerHTML = "<p>Tam is in a twisty little maze of sandwiches, all different.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-9\" onclick=\"getSandwiches10();\">Continue</button>";
}

function getSandwiches10(){
    wrapper2.innerHTML = "<p>Tam is amazed by the twisted little sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-10\" onclick=\"getSandwiches11();\">Continue</button>";
}

function getSandwiches11(){
    wrapper2.innerHTML = "<p>Tam is in a twisty little maze of sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-10\" onclick=\"getSandwiches11();\">Continue</button>";
}

function getSandwiches11(){
    wrapper2.innerHTML = "<p>Tam is in a twisty little maze of sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-11\" onclick=\"getSandwiches12();\">Continue</button>";
}

function getSandwiches12(){
    wrapper2.innerHTML = "<p>Tam is in a twisty little maze of sandwiches, all different.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-12\" onclick=\"getSandwiches13();\">Continue</button>";
}

function getSandwiches13(){
    wrapper2.innerHTML = "<p>Twisty Tam is in a maze of little sandwiches, all different.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-13\" onclick=\"getSandwiches14();\">Continue</button>";
}

function getSandwiches14(){
    wrapper2.innerHTML = "<p>Tam is amazed by the twisty little sandwiches, all different.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-14\" onclick=\"takeWrapper();\">Continue</button>";
}

//Littering isn't nice
function getSandwiches15(){
    wrapper2.innerHTML = "<p>Tam takes the sandwich wrapper.</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-15\" onclick=\"getSandwiches16();\">Continue</button>";
}

function getSandwiches16(){
    wrapper2.innerHTML = "<p>Tam is in a little maze of twisty sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-16\" onclick=\"getSandwiches17();\">Continue</button>";
}

function getSandwiches17(){
    wrapper2.innerHTML = "<p>Tam is in a twisty little maze of sandwiches, all different.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-16\" onclick=\"getSandwiches18();\">Continue</button>";
}

function getSandwiches18(){
    wrapper2.innerHTML = "<p>Tam is amazed by the twisted little sandwiches, all alike.</p><p>Where are the cucumber sandwiches?</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"get-sandwiches-16\" onclick=\"foundSandwich();\">Continue</button>";
}

function foundSandwich(){
    wrapper2.innerHTML = "<p>Here is a cucumber sandwich!</p><img id=\"cucmber-sandwich\" onclick=\"grabSandwich();\" src=\"img/kos-sandwich-01.png\">";
}

function grabSandwich(){
    wrapper2.innerHTML = "<p>Gotcha!</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"grab-sandwich\" onclick=\"wrapIt();\">Wrap it</button>";
}

//Wrap it
function wrapIt(){
    wrapper2.innerHTML = "<p>Tam wraps it in the empty sandwich wrapper.</p><p>(Germ theory? What germ theory?)</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"wrap-it\" onclick=\"wrapIt2();\">Continue</button>";
}

function wrapIt2(){
    wrapper2.innerHTML = "<p>Tam finds his way to the entrance by a trail of mashed and scattered sandwiches.</p><p>As he opens the refrigerator door...</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"wrap-it-2\" onclick=\"teaReady();\">Continue</button>";
}

function teaReady(){
    wrapper2.innerHTML = "<p>The kitchen is full of hot steam!</p><p>The kettle is screaming ecstatically!</p><p>\"Eee! Eee! Don't Stop!\"</p>";

    wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"tea-ready\" onclick=\"grabKettle();\">Continue</button>";
}

function grabKettle(){
    wrapper2.innerHTML = "<p>There's hot steam toward the ceiling, hot rain at waist level, and pools of hot water down by the floor.</p><p>Tam grabs the kettle and runs for the exit, splashing hot water at every step.</p><br><button class=\"minigamebutton\" id=\"ouch-ouch\" onclick=\"hide('wrapper-kitchen'); \">Ouch ouch ouch</button>";
}

function hide(button) {
        var temp = button;
      var x = document.getElementById(temp);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
// function leaveKitchen(){
//     wrapper2.innerHTML = "<p>With tea in cup and sandwicch in plastic wrap, Tam gets out of the kitchen into the corridor. The red flickering lights have gone away. . .</p><p>Of course. King Brady told the ship to show him the way to the kitchen. It didn't say to show him the way back.</p>";

//     wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"leave-kitchen\" onclick=\"enterHorizator();\">Continue</button>";
// }

// function enterHorizator(){
//     wrapper2.innerHTML = "<p>For once the horizator has nothing to say.</p><p>Tam sets down tea and cucumber sandwich, then reaches out to select the button for the Great Hall.</p><p>At that moment he catches sight of himself reflected in the horizator's walls.</p>";

//     wrapper2.innerHTML += "<button class=\"minigamebutton\" id=\"enter-horizator\">Continue</button>";
// }

//Are we back in the main story? We can have the last button take us back to the main game to the right spot in the array.
