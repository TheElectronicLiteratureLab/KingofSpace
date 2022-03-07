let table1 = document.getElementById("table-1");
let table2 = document.getElementById("table-2");
let wrapper = document.getElementById("wrapper");
let button1 = document.getElementById("table1-btn");
let button2 = document.getElementById("table2-btn");
let gameOver = [];

/*counter to be used for switching to the larger table */
let choiceCounter = 0;
function addToCounter(){
    choiceCounter ++;
    console.log(choiceCounter)
    if (choiceCounter == 3) {
        document.getElementById("table1-btn").addEventListener("click", swapTables());
    }
}

/* Changes from table-1 to table-2 */
function swapTables(){
    document.getElementById("table-1").style.display = "none";
    document.getElementById("table-2").style.display = "revert";
    document.getElementById("table2-btn").style.display = "revert";
    document.getElementById("table1-btn").style.display = "none";
    document.getElementById("wrapper").removeChild(document.getElementById("text-1"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-2"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-3"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-4"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-5"));
    document.getElementById("wrapper").removeChild(document.getElementById("text-6"));
    document.getElementById("wrapper").removeChild(document.getElementById("continue"));
}

/* This function retrieves the colors from the selected radio buttons. It them determines which randomly generated  paragraphs to display */
function getText(){
    /*getting the value of each selected attribute in each column*/
    let hairColor = document.querySelector('input[name="hair"]:checked').value;
        hairColor = `<span style="color: ${hairColor}">` + hairColor + "</span>";
    let eyeColor = document.querySelector('input[name="eyes"]:checked').value;
        eyeColor = `<span style="color: ${eyeColor}">` + eyeColor + "</span>";
    let skinColor = document.querySelector('input[name="skin"]:checked').value;
        skinColor = `<span style="color: ${skinColor}">` + skinColor + "</span>";
    let clothes = document.querySelector('input[name="clothes"]:checked').value;
        clothes = `<span style="color: ${clothes}">` + clothes + "</span>";
    
    /*first group of text options*/
    let textOption1 = ["Out of the mirror drifts a woman with " + hairColor + " hair and " + eyeColor + " eyes.", " He does not know where she comes from, this woman with " + hairColor + " hair. ", "There is a tap on his shoulder. He turns to look in the radiant " + eyeColor + " eyes of a beautiful woman. ", "A woman walks slowly toward him. Her body is almost hidden by the wealth of her " + hairColor + " hair. ", "Suddenly in the many mirrors stir images of a superb woman with " + hairColor + " hair and " + eyeColor + " eyes. "];

    /*first group of text options*/
    let textOption2 = ["Her " + clothes + " tabard falls aside to reveal lush " + skinColor + " thighs. ", "She throws aside her " + clothes + " cape and stands glorying in her " + skinColor + " nakedness. ", "Soft " + clothes + " silk slides off her naked " + skinColor + " shoulders. ", "Her " + clothes + " silk tabard slips away from her high " + skinColor + "breasts. ", "Her breasts are " + skinColor + ", the aureoles of her nipples a darker " + skinColor + ". Her " + clothes + " cloak falls to the floor with a silken sigh. "];

    /*first group of text options*/
    let textOption3 = ["She pushes Tam down on the " + hairColor + " pillows that strew the mirrored floor. ", "She falls to the gold-embroidered " + clothes + " pillows, carrying Tam with her.", "She lies back among the tasseled " + skinColor + " pillows that match her skin.", "She pulls Tam down with her onto the " + eyeColor + " brocaded pillows", "They fall onto a mound of pillows embroidered in " + skinColor + " and " + clothes + ". "];

    /*first group of text options*/
    let textOption4 = ["She caresses him into an agony of desire for her. But before he can take her, she jumps up.", "Her " + skinColor + " fingers whisper over his skin. But suddenly she tears herself out of his arms.", "Her " + hairColor + " hair caresses him. But, reluctantly, she draws away from him. ", "Her lovely " + eyeColor + " eyes gaze into his. But then she looks away, flinching as if in pain. ", "In his arms, she is a " + skinColor + " flame of desire. Her " + eyeColor + " eyes are locked on his. But, as he begins to cover her with kisses, she pulls away."];

    /*first group of text options*/
    let textOption5 = ["Murmuring \"How can I love you,\" she snatches up her discarded clothing and flees into the mirror.", "\"How can I bear to leave you?\" she cries. But she is already dissolving into a " + skinColor + " smoke.", "\"Love, I cannot bear to part from you!\" But in a moment there is nothing left of her but a crowd of " + skinColor + " phantoms in the mirror, and a moment later, nothing at all.", "\"Oh, cruel! Cruel!\" she murmurs, and points at her own image in the phantom painting. A shimmer in the air, and she is gone. "];

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

    /*create a button to go display the original choose lover table*/
    document.getElementById("wrapper").innerHTML += "<button id=\"continue\" onClick=\"changeDom()\">Continue</button>";

    document.getElementById("table-1").style.display = "none";
    document.getElementById("table1-btn").style.display = "none";
}

function getText2(){
    /*getting the value of each selected attribute in each column*/
    let hair = document.querySelector('input[name="hair"]:checked').value;
        hairColor = `<span style="color: ${hair}">` + hair + "</span>";
    let eyes = document.querySelector('input[name="eyes"]:checked').value;
        eyeColor = `<span style="color: ${eyes}">` + eyes + "</span>";
    let skin = document.querySelector('input[name="skin"]:checked').value;
        skinColor = `<span style="color: ${skin}">` + skin + "</span>";
    let clothes = document.querySelector('input[name="clothes"]:checked').value;
        clothesColor = `<span style="color: ${clothes}">` + clothes + "</span>";

    console.log(hair, eyes, skin, clothes);

    let textOption6 = "He is in agony, but he cannot sleep or die or love.";

    /* detecting if all red, all blue, all orange, or all green is selected and paying the special text associated with those selections */
    if(hair == "Red" && eyes == "Red" && skin == "Red" && clothes == "Red"){
        /* All red or all red and golden skin */
        let allRed = "A woman scorching as the sun walks towar him out of the mirror. Flames billow over her golden, red-flecked skin. \"Do you ask my love? Do you feel my anger?\" The mirrors blacken as she walks back into them. They clear slowly, but she is gone.";

        document.getElementById("wrapper").innerHTML += "<p id=\"all-red\">" + allRed + "</p>";
        document.getElementById("wrapper").innerHTML += "<button id=\"continue\" onClick=\"changeDom2()\">Continue</button>";

        document.getElementById("table-2").style.display = "none";
        document.getElementById("table2-btn").style.display = "none";

    } else if(hair == "Blue" && eyes == "Blue" && skin == "Blue" && clothes == "Blue") {
        /* All blue or all blue with green skin or hair */
        let allBlue = `Sad and sorrowing, Venus stands before him. Her ${skinColor} skin is pale and around them the mirrors are covered in blue-green algae. "See? The algae are dying. Have you seen a woman whose skin is ccovered with stars?" she sobs. "Where is my priestess?" Venus fades slowly but the blue-green stain persists, a shadow in the mirrors.`;

        document.getElementById("wrapper").innerHTML += "<p id=\"all-blue\">" + allBlue + "</p>";
        document.getElementById("wrapper").innerHTML += "<button id=\"continue\" onClick=\"changeDom2()\">Continue</button>";

        document.getElementById("table-2").style.display = "none";
        document.getElementById("table2-btn").style.display = "none";

    } else if(hair == "Green" && eyes == "Green" && skin == "Green" && clothes == "Green") {
        /* All green or all green with golden or silver skin */
        let allGreen = `He is plunged in water. No woman here, only the great koi, the huge carp, scintillating in green water like ${skinColor} reflections of light. Their diaphanous fins swirl around him. A tiny green and golden dragon dances in the water, spreading its wings, curling into the 8-shape of infinity. <br> As he watches, the water turns clouded and foul. The fish swim jerkily, then drift to the bottom. As he takes a beath, the vision disappears.`;

        document.getElementById("wrapper").innerHTML += "<p id=\"all-green\">" + allGreen + "</p>";
        document.getElementById("wrapper").innerHTML += "<button id=\"continue\" onClick=\"changeDom2()\">Continue</button>";

        document.getElementById("table-2").style.display = "none";
        document.getElementById("table2-btn").style.display = "none";

    } else if(hair == "Orange" && eyes == "Orange" && skin == "Orange" && clothes == "Orange") {
        /*all orange or orange and brown */
        let allOrange = `Mars sucks the water from his nose and eyes, freezes and crack his skin. An old woman crosses the gritty orange sand toward him. her ${skinColor} breasts are ${skinColor} phantoms in the mirror, and a moment later, nothing at all. <br> "Oh,cruel! Cruel!" she murmurs, and nothing is lef of her but a last kiss and a ${skinColor} agony of desire. <br> "Remember me," she murmurs, and points at her own image in the phantom painting. A shimmer in the air, and she is gone.`;

        document.getElementById("wrapper").innerHTML += "<p id=\"all-orange\">" + allOrange + "</p>";
        document.getElementById("wrapper").innerHTML += "<button id=\"continue\" onClick=\"changeDom2()\">Continue</button>";

        document.getElementById("table-2").style.display = "none";
        document.getElementById("table2-btn").style.display = "none";

    } else {
        let textOption1 = ["Out of the mirror drifts a woman with " + hairColor + " hair and " + eyeColor + " eyes.", " He does not know where she comes from, this woman with " + hairColor + " hair. ", "There is a tap on his shoulder. He turns to look in the radiant " + eyeColor + " eyes of a beautiful woman. ", "A woman walks slowly toward him. Her body is almost hidden by the wealth of her " + hairColor + " hair. ", "Suddenly in the many mirrors stir images of a superb woman with " + hairColor + " hair and " + eyeColor + " eyes. "];

        /*first group of text options*/
        let textOption2 = ["Her " + clothes + " tabard falls aside to reveal lush " + skinColor + " thighs. ", "She throws aside her " + clothes + " cape and stands glorying in her " + skinColor + " nakedness. ", "Soft " + clothes + " silk slides off her naked " + skinColor + " shoulders. ", "Her " + clothes + " silk tabard slips away from her high " + skinColor + "breasts. ", "Her breasts are " + skinColor + ", the aureoles of her nipples a darker " + skinColor + ". Her " + clothes + " cloak falls to the floor with a silken sigh. "];

        /*first group of text options*/
        let textOption3 = ["She pushes Tam down on the " + hairColor + " pillows that strew the mirrored floor. ", "She falls to the gold-embroidered " + clothes + " pillows, carrying Tam with her.", "She lies back among the tasseled " + skinColor + " pillows that match her skin.", "She pulls Tam down with her onto the " + eyeColor + " brocaded pillows", "They fall onto a mound of pillows embroidered in " + skinColor + " and " + clothes + ". "];

        /*first group of text options*/
        let textOption4 = ["She caresses him into an agony of desire for her. But before he can take her, she jumps up.", "Her " + skinColor + " fingers whisper over his skin. But suddenly she tears herself out of his arms.", "Her " + hairColor + " hair caresses him. But, reluctantly, she draws away from him. ", "Her lovely " + eyeColor + " eyes gaze into his. But then she looks away, flinching as if in pain. ", "In his arms, she is a " + skinColor + " flame of desire. Her " + eyeColor + " eyes are locked on his. But, as he begins to cover her with kisses, she pulls away."];

        /*first group of text options*/
        let textOption5 = ["Murmuring \"How can I love you,\" she snatches up her discarded clothing and flees into the mirror.", "\"How can I bear to leave you?\" she cries. But she is already dissolving into a " + skinColor + " smoke.", "\"Love, I cannot bear to part from you!\" But in a moment there is nothing left of her but a crowd of " + skinColor + " phantoms in the mirror, and a moment later, nothing at all.", "\"Oh, cruel! Cruel!\" she murmurs, and points at her own image in the phantom painting. A shimmer in the air, and she is gone. "];

        /*Last text option to be displayed after a certain number of cycles*/
        let textOption6 = "He is in agony, but he cannot sleep or die or love.";

        if(hair == "Silver" && eyes == "Silver" && skin == "Silver" && clothes == "Silver"){
            gameOver.push("Silver");
        }
        if(hair == "Black" && eyes == "Black" && skin == "Black" && clothes == "Black"){
            gameOver.push("Black");
            if(gameOver.includes("Silver")){
                window.location.assign("../../index.html"); //change redirect to actual location once integration takes place. Currently redirects to the start of the main game.
                
                document.getElementById("wrapper").removeChild(document.getElementById("text-1"));
                document.getElementById("wrapper").removeChild(document.getElementById("text-2"));
                document.getElementById("wrapper").removeChild(document.getElementById("text-3"));
                document.getElementById("wrapper").removeChild(document.getElementById("text-4"));
                document.getElementById("wrapper").removeChild(document.getElementById("text-5"));
                document.getElementById("wrapper").removeChild(document.getElementById("text-6"));
                document.getElementById("wrapper").removeChild(document.getElementById("continue"));
            }
        }

        /*takes a random indext and writes its value to the dom. This is done 5 times, once for each option group.*/
        randText = Math.floor(Math.random() * 5);
        document.getElementById("wrapper").innerHTML += "<p id=\"text-1\">" + textOption1[randText] + "</p>";
        document.getElementById("wrapper").innerHTML += "<p id=\"text-2\">" + textOption2[randText] + "</p>";
        document.getElementById("wrapper").innerHTML += "<p id=\"text-3\">" + textOption3[randText] + "</p>";
        document.getElementById("wrapper").innerHTML += "<p id=\"text-4\">" + textOption4[randText] + "</p>";
        randText2 = Math.floor(Math.random() * 4);
        document.getElementById("wrapper").innerHTML += "<p id=\"text-5\">" + textOption5[randText2] + "</p>";
        document.getElementById("wrapper").innerHTML += "<p id=\"text-6\">" + textOption6 + "</p>";

        /*create a button to go display the original choose lover table*/
        document.getElementById("wrapper").innerHTML += "<button id=\"continue\" onClick=\"changeDom2()\">Continue</button>";

        document.getElementById("table-2").style.display = "none";
        document.getElementById("table2-btn").style.display = "none";
    }
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

function changeDom2(){
    /*reverts table and button back to original state */
    document.getElementById("table-2").style.display = 'revert';
    document.getElementById("table2-btn").style.display = "revert";

     /*removes these elements from the dom so that only the table and button appear. */
    if(document.getElementById('all-red')){
        document.getElementById("wrapper").removeChild(document.getElementById("all-red"));
        document.getElementById("wrapper").removeChild(document.getElementById("continue"));
    } else if(document.getElementById('all-blue')){
        document.getElementById("wrapper").removeChild(document.getElementById("all-blue"));
        document.getElementById("wrapper").removeChild(document.getElementById("continue"));
    } else if(document.getElementById('all-green')){
        document.getElementById("wrapper").removeChild(document.getElementById("all-green"));
        document.getElementById("wrapper").removeChild(document.getElementById("continue"));
    } else if(document.getElementById('all-orange')){
        document.getElementById("wrapper").removeChild(document.getElementById("all-orange"));
        document.getElementById("wrapper").removeChild(document.getElementById("continue"));
    } else {
        document.getElementById("wrapper").removeChild(document.getElementById("text-1"));
        document.getElementById("wrapper").removeChild(document.getElementById("text-2"));
        document.getElementById("wrapper").removeChild(document.getElementById("text-3"));
        document.getElementById("wrapper").removeChild(document.getElementById("text-4"));
        document.getElementById("wrapper").removeChild(document.getElementById("text-5"));
        document.getElementById("wrapper").removeChild(document.getElementById("text-6"));
        document.getElementById("wrapper").removeChild(document.getElementById("continue"));
    }
}