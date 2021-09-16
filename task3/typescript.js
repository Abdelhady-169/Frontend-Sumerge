    var number = 5;
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var a = 1;
    a++

    function levelup() {
    score.innerHTML = a++;
    }
    
    function smiley() {
        for (var i=0; i<number; i++) {
            var emojie = document.createElement ("img");
            emojie.setAttribute("src", "./images/smiley.jpeg");

            var max = 1;
            var min = 0;
            var j = Math.random()*(max-min+1)+min; 
            var top_position = j * i * 50;
            var left_position = Math.random() * 400;
            emojie.style.top = top_position + "px";
            emojie.style.left = left_position + "px";

            left.appendChild(emojie);
        }

         var copy = left.cloneNode(true);          
         right.appendChild(copy);

         var added = document.createElement ("img");
         added.setAttribute("src", "./images/smiley.jpeg");

        var max = 1;
        var min = 0;
        var j = Math.random()*(max-min+1)+min; 
        var top_position = j * i * 50;
        var left_position = Math.random() * 400;
        added.style.top = top_position + "px";
        added.style.left = left_position + "px";

         left.appendChild(added);
  
         left.lastChild.onclick = function nextLevel(event)
         {
              number += 5;
              levelup();

              //erase old images
              left.innerHTML ="";
              right.innerHTML ="";

              smiley();
          }

     }      