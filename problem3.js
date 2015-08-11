window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

  function mainCheck() { 
    if (document.getElementById('radio-choice-v-2c').checked) { 
        $("#w300").hide(); 
        $("#w309").hide();
        $("#mainsteps").hide(); 
        $("#maincheck").hide(); 
        $("#mainhint").hide(); 
        document.getElementById("w671").innerHTML = "Score: 5 / 5"
        $("#responseText").show(); 
        document.getElementById("check").style.backgroundPosition = "-1797px -151px"; 
        $("#w692").show(); 
      $("#responseText2").hide();
      $("#responseText3").hide();
    } 
    else  { 
      $("#responseText3").show();
      document.getElementById("check").style.backgroundPosition = "-1769px -151px";
      document.getElementById("w283").innerHTML = "Tries left: 0"
      document.getElementById("textbox").style.backgroundColor = "yellow";
      $("#mainsteps").hide(); 
      $("#responseText2").hide();
      $("#maincheck").hide(); 
      $("#mainhint").hide(); 
      $("#w300").hide(); 
      $("#w309").hide();
      $("#w692").show();
    }


  }
