function Lhide(button) {
		var temp = button;
	  var x = document.getElementById(temp);
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	}

function hudeoptions(){
	Lhide('bookone');
	Lhide('booktwo');
	Lhide('bookthree');
	Lhide('bookfour');
	Lhide('bookfive');
	Lhide('booksix');
	Lhide('bookseven');
	Lhide('bookeight');
	Lhide('booknine');
	Lhide('bookten');
	Lhide('bookeleven');
	Lhide('booktwelve');
	Lhide('bookthirteen');
	Lhide('bookfourteen');
	Lhide('bookfifteen');
	Lhide('booksixteen');
	Lhide('bookseventeen');

}
window.onload= onstart();

let cur = 0;

function onstart(){

	hudeoptions();
	//Lhide('nextlib');
	Lhide('back');
	Lhide('backcontrol');
		
}
function librarystart(){
	hudeoptions();
	//Lhide('nextlib');
	Lhide('back');
	Lhide('decontamination');
	Lhide('shippassengerlist');
	Lhide('libraryopen');
	Lhide('backcontrol');


}
function Back(){
	hudeoptions();
	//Lhide('nextlib');
	Lhide('back');
	Lhide('decontamination');
	Lhide('shippassengerlist');
	Lhide('libraryopen');
	Lhide('backcontrol');
}



function Goto(button){
	if(button === 'one' ){
		hudeoptions();
		
		cur = 0;
		library(cur);
	}
	if(button === 'two' ){
		hudeoptions();
		
		cur = 1;
		library(cur);
	}
	if(button === 'three' ){
		hudeoptions();
		
		cur = 2;
		library(cur);
	}
	if(button === 'four' ){
		hudeoptions();
		
		cur = 3;
		library(cur);
	}
	if(button === 'five' ){
		hudeoptions();
		
		cur = 4;
		library(cur);
	}
	if(button === 'six' ){
		hudeoptions();
		
		cur = 5;
		library(cur);
	}
	if(button === 'seven' ){
		hudeoptions();
		
		cur = 6;
		library(cur);
	}
	if(button === 'eight' ){
		hudeoptions();
		
		cur = 7;
		library(cur);
	}
	if(button === 'nine' ){
		hudeoptions();
		
		cur = 8;
		library(cur);
	}
	if(button === 'ten' ){
		hudeoptions();
		
		cur = 9;
		library(cur);
	}
	if(button === 'eleven' ){
		hudeoptions();
		
		cur = 10;
		library(cur);
	}
	if(button === 'twelve' ){
		hudeoptions();
		
		cur = 11;
		library(cur);
	}
	if(button === 'thirteen' ){
		hudeoptions();
		
		cur = 12;
		library(cur);
	}
	if(button === 'fourteen' ){
		hudeoptions();
		
		cur = 13;
		library(cur);
	}
	if(button === 'fifteen' ){
		hudeoptions();
		
		cur = 14;
		library(cur);
	}
	if(button === 'sixteen' ){
		hudeoptions();
		//Lhide('nextlib');
		cur = 15;
		library(cur);
	}
	if(button === 'seventeen' ){
		hudeoptions();
		//Lhide('nextlib');
		cur = 16;
		library(cur);
	}
	//if(button === 'nextlib' ){
	''	cur++;
	//	library(cur);
	//}
	if(button === 'back' ){

		hudeoptions();
		library(19);
	}

}



function library (cur){
	
let library= ["<b>Arcoculture</b> <br><br> The study of gardening and ecological maintenance in a closed enviornment. ",//0
		
"<b>Arcology</b> <br><br> In popular terms, any closed environment, as on a space station, ITC, or ship.  Strictly speaking, however, almost no ''arcology'' is completely closed. Ships, stations, adn ITCs are  frequently modified, either by constructed gendata sent from Circe or by the visits of Priestesses with actual physical genetic material.",//1

"<b>Circe Prison </b><br><br> The reconfiguartion of the ateroid Circe's metallic core is the largest engineering tast ever attempted by humankind. Much of  the work  has been done by economic contractors or prisoners, who rehabilitate themselves through their efforts--or die trying. The famous ''Cold Mines'' of Circe Prison have been the final resting place of many of the most dangerous political prisoners of the Solar System.<br><br> The presence of prisoners should not alarm any visitor to Circe. Only one group of any size has over escaped from the prison area, during the Blasphemy Rebellion against Pallas in the year 919. The escapees, less that twenty in number, fled to Beltspace, where they  died without reaching any other settlement.",//2

"<b>Nicholsun's Plague </b><br><br> The most terrible plague known to humanity swept, through the area of the Asteroids in IY869. Harry Nicholsun, rebel genetic engineer, vectored susceptibility to a pheromone-like substance in to the Asteroids' population. He modified himself and his female accomplices, disguised as Priestesses, to smell of the substance. <br> After a first illness, frenzied victims lost their free will. They fought and died willingly for Nicholsun. <br><br> Many loyal Imperial citizens lost their lives. Fortunately, the Priestesses themselves were not prey to this delusion and their loyalty  the Empire helped to restor order. <br><br> Outbreaks of Nicholsun’s Plague in more recent years, and the fear of  the virus moving into the general gene pool, have made necessary a strict quarantine of the Asteroids. It is hoped that, like other plagues, Nicholsun’s Plague will eventually abate.",//3

"<b> Priestesses</b> <br> (extracted section) <br><br> Powers of the Priestesses: <br><br> Through computer linkages, Priestesses have access to most programs of most arcologies. For their simple-minded clients in the Asteroids, Priestesses' powers seem magical. By ordinary genetic manipulation of the arcolculture and access to the Circe gene databases, Priestesses make glowers bloom overnight, create animals, open locks, posessess supernatural knowledge, and perform other  wonders for the credulous. <br><br> Before the Uprising of 869, Priestesses frequently served as  Surcaptains or emergency Captains of ships. Since then, Priestesses are given programming against becoming full Captains. However, they retain limited programing for astrogation.",//4

"<b>Pallas the Beautiful</b> <br><br> Pallas asteroid, once the home base of the Hermes-Eccentrics, is the center of civilization beyond the Terrans. It is know for the richness of its architectre, the palladian Library with its treasures of Earth and Venusian pre-Terran artifacts, and the Beauty of its women. <br><br> Since the Nicholsun Uprising it is entirely off limits to Terrans.",//5

"<b>Castra Martis </b><br><br> Castra Martis, the largest Terran city off Earth, was established as a Russian base in the earliest days of System exploration. After Martian independence during the Wars of the New Beginning, Castra Martis became known for its mercenary fighters. It is sitll widely known as ''the Fist of the Terrans.''<br><br> For protectionagains meteors and for crowd control, Castra Martis is divided into seventeen subdomes, each of which can be isolated form the others  within seconds. Tourists are advised to avoid Dubdome 4 (''Soldier Town'') and the Old Slaves' Market in Subdome 8. The area around Kholkhoznik Square in Subdome 11 contains an iteresting barter-market.",//6

"<b>QUAROCS (''Spyflies'')</b><br><br> QUAROCs--quasi-autonomous robotic constructs, popularly known as spyflies-- were developed for fine fepair work aboard ship in areas too small for humans. <br><br> Modified QUAROCs may play a role in the ship's intelligence and defense systems by gathering and transmitting information. Some modified QUAROCs extrude nerve-poison ''stingers''  that paraliyze or kill intruders. However, because they are small and move slowly, QUAROCs are seldom used as offensive weapons. <br><br> By plugging into the ship's larger-scale defense system, they can interact with other defense elements, such as bulkheads and waldoes, to take concerted action.<br><br> In flight, the rotary wing of a QUAROC makes a characteristic buzzing sound.",//7

"<b>Red Kings </b><br><br> The Red Kings were a warrior class, originally created without special bioengineering as a ceremonial guard for the Priestesses of Pallas. During the Nicholsun Revolt they were recruited to serve  as vectors for the Plague. They were given space habituation and the ability to secrete unusual ounts of adrenalin and certain other hormones uner stress. Like all the followers of Nicholusn, they were Plague-stricken and could not help their fanatic loyalty to him. <br><br> Since the Revolt the Red Kings have largely disappeared as a class.  However, within the Asteroids men and occasionally women with a special devotion to one Priestess continue to serve  as bodyguards and to wear the red uniform, but as Imperial servants.",//8

"<b>St. Nicholsun's Days </b> <br><br> Raves associated with the false religion of Harry Nicholsun (838-873)",//9

"<b>Ship's Favor </b><br><br> Ships are programmed to protect their essectial staff against any contingency form breach of the lifewall to mutiny. <br><br> Spyflies, watchbots, and other intelligence mechanisms monitor suspicious passengers. <br><br> The intelligence of the ship is programmed to take defensive or punitive action against those  who harm the ship or its staff. Amung the common defense weapons available to a ship are lasers, waldoes, subships, poisoned QUAROCs, and psymones. <br><br> For further protection, Captains and other essentioal staff are routinely spacehabbed.",//10

"<b>Space Habituation </b><br><br> ''Hardening'' of essential human staff against common space dangers (vacuum, radiation, noxius environments). Space habituationdoes not give full or lasting protection against any dangers and is no substitute for a good skintite spacesuit-- though far too many space staff seem to believe otherwise. <br><br> Fill hardening requires surgery. However, the Ceremony of the Priestesses produces a similar effect on newly created Red Kings (the ''Little Hardening''). This effect is the source of a well-known anecdote about the Nicholsun Uprising.",//11

"NOT AVAILABLE: <br><br> FILE OPENED BY HORIZATOR 4,8.1.869 <br><br> would you like to put this file on reserve? ",//12
// yes  
// no -gos back to selection 
//Library Index

"<b>Lifeships </b><br>(Ency. Terr., 928 ed.) <br><br> The Fertile Worlds ensure genetic consistency throughout Terran Space through lifeships. These small, moon-shaped, heavily shielded bioengineering labs carry selections of base ecologies and genetic material, suited to any habitat in twhich Terrans can live. <br><br> Crew of a life ship includes one Priestess, who is its captain and bioengineer. <br><br>Other crew members, if any, are RedKings belonging to the Priestess.",//13

"<b>Trades & Favors </b><br><br> Trades and favors are the currency of trans-Terran space. ''Favors'' involve only items necessary to life: food, water, air, fuel, military support, genetic codes, and essential information. Trades involve anything else, from artifacts to games software. <br><br> No one is required to trade. Anyone is required to do a favor, to the best of their ability. <br><br> It is considered bad taste on both sides to trade nonessential items for essential items.<br><br> Anyone who asks a favor-- a granting of any essential item--is required to do a favor back, even at the cost of his life.",//14

"<b>Hermes-Eccentric </b><br><br> The name for a cluster of natural and manmade asteroids, whose orbits cut acrross two or more orbits of the principal occupied Tarran colonies. The first commercila Eccentric was the ateroid Hermes. Hermes' lopsided orbit runs from mid-Belt to within Venus's orbit and has been know to approach closer to Terra than its Moon. <br><br> Untill Nicholsun's Plague and the Quarantine, the most efficient eccentic orbits had considerable commerical value. Commercial orbits were declared real property in the Supreme Judicial Cort decision of 832. ITC Hermes-Eccentrics vs. IYC Ford-Honda. <br><br> In the aftermath of the Nicholsun Plague, the abrupt decline in the value of t trans-Asteroid commercial orbits contributed to the Crash of 874. <br><br> In the aftermath of the Nicholsun Plague, the abrupt decline in the value of trans-Asteroid commercial orbits is thought to have lead directly to the Crash of 874. <br><br> THe average orbital length of Mars-Venus eccentric is 1. 06 standard Terran years.",//16

"<b>Greatship </b><br>(article take from the edition of 868.)<br><br> Hermes-Eccentric asteroids (both natural and manmade) are programmed to swing in efficient orbits between major termini of the Solar System. Orbit-based cargo ships of this sort, called Greatships,  are the most efficient means of carrying weight from one part of the Solar System to another.<br><br> The Hermes-Eccentric greatships resembel the wagon trains of the old Amerifcan fruntier. A highly intelligent central computer forms the nucleus of a system of cargo pods and independent ships, travelling in matched orbits and linked by horizators. The  ship's Central  Control provide orbitsl matching services, theft and  sabotage prevention, and intelligent defense systems. <br><br> By paying an orbital use fee, any commercial carrier or private ship can match orbits with a greatship and take advantage of it facilities. <br><br> Eccentrics attract a colorful and varied population, often including visiting celebrites. The permanent residents of some ships have  gained  a  place in the lore  of the Asteroids.<br><br> Human-use facilities  associated with grateships include: <br><br> - Entertanment (gormet restaurants, gambling, racing, 3D video,  illusion, koi competitions)<br><br> - Research facilities (stored library, instalink to local and System datastores) <br><br> -Health facilities (variable-gravity workout areas) <br><br> - Shuttle service to intermediate stops<br><br> -(Asteroid-belt trips only) BY special arrangement with Nicholsun Productions ITC, all passengers aboard an Eccentric are offered free participation in local Nicholsun's Festivals.",//19

//Decontamination Procedures
"DECONTAMINATION PROCEDURES <br>1. All personnel must report to screening. You will be tested for the presence of Nicholsun's Virus. Any of the following may occur. <br> a. You may be found to be disease-free. <br> b. You may be found to be a carrier of the Nicholsun's Virus. <br> c. You may be found to have symptoms of the virus. <br> 2. If you are found to be disease-free, you will REPORT IMMEDIATELY to Debarkation. DO NOT ATTEMPT TO RETURN to other parts of the ship. DO NOT ATTEMPT TO COMMUNICATE WITH ANY OTHER SHIP MEMBER. There are no exceptions to tbis rule. <br> 3. If you are found to be infected, please RETURN IMMEDIATELY to your sleeping area aboard ship. Your civil rights are temporarily suspended.",

//Ship Passenger list
"Ship's Population: Lady Nii <br><br> Nii / interface coordination <br><br> Brady, Andrew /Captain(acting) <br>/Ship's Favor <br>/Red King <br><br> Passengers <br><br> aster Palladis /Ship's Favor <br> /Priestess <br>Rosse, Thomas Tamotsu /Red King",

"",//back 19
];



 document.getElementById('playboxmain2').innerHTML = `  ${library[cur]} `;

	


}