/* This function retrieves the colors from the selected radio buttons. It them determines which randomly generated  paragraphs to display */
let choiceCounter = 0;
function addToCounter(){
    choiceCounter ++;
    console.log(choiceCounter)
}

function getText(){
    /*getting the value of each selected attribute in each column*/
    let hairColor = document.querySelector('input[name="hair"]:checked').value;
    let eyeColor = document.querySelector('input[name="eyes"]:checked').value;
    let skinColor = document.querySelector('input[name="skin"]:checked').value;
    let clothes = document.querySelector('input[name="clothes"]:checked').value;
    
    /*first group of text options*/
    let textOption1 = ["Out of the mirror drifts a woman with " + hairColor + " hair and " + eyeColor + " eyes.", " He does not know where she comes from, this woman with " + hairColor + " hair. ", "There is a tap on his shoulder. He turns to look in the radiant " + eyeColor + " eyes of a beautiful woman. ", "A woman walks slowly toward him. Her body is almost hidden by the wealth of her " + hairColor + " hair. ", "Suddenly in the many mirrors stir images of a superb woman with " + hairColor + " hair and " + eyeColor + " eyes. "];

    /*first group of text options*/
    let textOption2 = ["Her " + clothes + " tabard falls aside to reveal lush " + skinColor + " thighs. ", "She throws aside her " + clothes + " cape and stands glorying in her " + skinColor + " nakedness. ", "Soft " + clothes + " silk slides off her naked " + skinColor + " shoulders. ", "Her " + clothes + " Silk tabard slips away from her high " + skinColor + "breasts. ", "Her breasts are " + skinColor + ", the aureoles of her nipples a darker " + skinColor + ". Her " + clothes + " cloak falls to the floor with a silken sigh. "];

    /*first group of text options*/
    let textOption3 = ["She pushes Tam down on the " + hairColor + " pillows that strew the mirrored floor. ", "She falls to the gold-embroidered " + clothes + " pillows, carrying Tam with her.", "She lies back among the tasseled " + skinColor + " pillows that match her skin.", "She pulls Tam down with her onto the " + eyeColor + " brocaded pillows", "They fall onto a mound of pillows embroidered in " + skinColor + " and " + clothes + ". "];

    /*first group of text options*/
    let textOption4 = ["She caresses him into an agony of desirefor her. But before he can take her, she jump up.", "Her " + skinColor + " fingers whisper over his skin. But suddenly she tears herself out of his arms.", "Her " + hairColor + " hair caresses him. But, reluctantly, she draws away from him. ", "Her lovely " + eyeColor + " eyes gaze into his. But then she looks away, flinching as if in pain. ", "In his arms, she is a " + skinColor + " flame of desire. Her " + eyeColor + " eyes are locked on his. But, as he begins to cover her with kisses, she pulls away."];

    /*first group of text options*/
    let textOption5 = ["Murmuring \"How can I love you,\" she snatches up her discarded clothing and flees into the mirror.", "\"How can I bear to leave you?\" she cries. But she is already dissolving into a " + skinColor + " smoke.", "\"Love, I cannot bear to part from you!\" But in a moment there is nothing left of her but a crowd of " + skinColor + "phantoms in the mirror, and a moment later, nothing at all.", "\"Oh, cruel! Cruel!\" she murmurs, and points at her own image in the phantom painting. A shimmer in the air, and she is gone. "];

    /*Last text option to be displayed after a certain number of cycles*/
    let textOption6 = "He is in agony, but he cannot sleep or die or love.";

    /*takes a random indext and writes its value to the dom. This is done 5 times, once for each option group.*/
    randText = Math.floor(Math.random() * 5);
    document.getElementById("wrapper").innerHTML += "<p id=\"text-1\">" + textOption1[randText] + "</p>";
    document.getElementById("wrapper").innerHTML += "<p id=\"text-2\">" + textOption2[randText] + "</p>";
    document.getElementById("wrapper").innerHTML += "<p id=\"text-3\">" + textOption3[randText] + "</p>";
    document.getElementById("wrapper").innerHTML += "<p id=\"text-4\">" + textOption4[randText] + "</p>";
    randText2 = Math.floor(Math.random() * 4);
    document.getElementById("wrapper").innerHTML += "<p id=\"text-5\">" + textOption5[randText2] + "</p>";
    document.getElementById("wrapper").innerHTML += "<p id=\"text-6\">" + textOption6 + "</p>";

    /*create a button to go displayu the original choose lover table*/
    document.getElementById("wrapper").innerHTML += "<button id=\"continue\" onClick=\"changeDom()\">Continue</button>";

    document.getElementById("table-1").style.display = "none";
    document.getElementById("table1-btn").style.display = "none";
}

function changeDom(){
    /*reverts table and buttopn back to original state */
    document.getElementById("table-1").style.display = 'revert';
    document.getElementById("table1-btn").style.display = "revert";
    
    /*removes these elements from the dom so that only the table and button appear. */
    document.getElementById("wrapper").removeChild(document.getElementById("text-1"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-2"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-3"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-4"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-5"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-6"));
    document.getElementById("wrapper").removeChild(document.getElementById("continue"));
}