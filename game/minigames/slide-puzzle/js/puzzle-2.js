/* this is the function used to swap tiles tile1 and tile2 are the first and second digits of the numbers given to each tile in the id */
function swapTiles(tile1,tile2) {
  var temp = document.getElementById(tile1).className;
  document.getElementById(tile1).className = document.getElementById(tile2).className;
  document.getElementById(tile2).className = temp;
}

/* this is the function used to randomize the tiles by calling the swap tiles function within it. */
function shuffle() {
  for (var row=1; row<=4; row++) { 
    for (var column=1; column<=4; column++) { 
    
      var row2 = Math.floor(Math.random()*4 + 1);
      var column2 = Math.floor(Math.random()*4 + 1); 
      
      swapTiles("tile-"+row+column,"tile-"+row2+column2); 
    } 
  } 
}

/* here we are checking to see where the white tile is located. This checks above, below, left, and right. This prevents random tiles from being clicked if theyre not adjacent to the white tile. */
function clickTile(row,column) {
  var tile = document.getElementById("tile-"+row+column);
  var tile = tile.className;
  if (tile!="tile16") { 

    if (column < 4) {
      if ( document.getElementById("tile-"+row+(column+1)).className=="tile16") {
        swapTiles("tile-"+row+column,"tile-"+row+(column+1));
        return;
      }
    }

    if (column > 1) {
      if ( document.getElementById("tile-"+row+(column-1)).className=="tile16") {
        swapTiles("tile-"+row+column,"tile-"+row+(column-1));
        return;
      }
    }

    if (row > 1) {
      if ( document.getElementById("tile-"+(row-1)+column).className=="tile16") {
        swapTiles("tile-"+row+column,"tile-"+(row-1)+column);
        return;
      }
    }

    if (row < 4) {
      if ( document.getElementById("tile-"+(row+1)+column).className=="tile16") {
        swapTiles("tile-"+row+column,"tile-"+(row+1)+column);
        return;
      }
    } 
  }
  
}

