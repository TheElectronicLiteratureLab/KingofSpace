var divs = ["greatship","lifeship"];
      var visibleId = null;
      function show(id) {
        if(visibleId !== id) {
          visibleId = id;
        } 
        hide();
      }
      function hide() {
        var div, i, id;
        for(i = 0; i < divs.length; i++) {
          id = divs[i];
          div = document.getElementById(id);
          if(visibleId === id) {
            div.style.display = "grid";
          } else {
            div.style.display = "none";
          }
        }
      }  