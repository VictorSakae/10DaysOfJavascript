  var buttonBtn = document.getElementById("btn");
  buttonBtn.addEventListener("click",function() {
      var currentValue = this.innerHTML;
      this.innerHTML = parseInt(currentValue) + 1;
  });