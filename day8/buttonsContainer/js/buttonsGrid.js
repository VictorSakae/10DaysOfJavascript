  var centralBtn = document.getElementById("btn5");
  var outerBtns = [1, 2, 3, 6, 9, 8, 7, 4];
  centralBtn.addEventListener("click",function() {
      var newFirstIndex = outerBtns.pop();
      outerBtns.unshift(newFirstIndex);
      document.getElementById("btn1").innerHTML = outerBtns[0];
      document.getElementById("btn2").innerHTML = outerBtns[1];
      document.getElementById("btn3").innerHTML = outerBtns[2];
      document.getElementById("btn6").innerHTML = outerBtns[3];
      document.getElementById("btn9").innerHTML = outerBtns[4];
      document.getElementById("btn8").innerHTML = outerBtns[5];
      document.getElementById("btn7").innerHTML = outerBtns[6];
      document.getElementById("btn4").innerHTML = outerBtns[7];
  });