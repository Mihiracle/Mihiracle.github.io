  function mainCheck() { 
    if (document.getElementById('radio-choice-v-2c').checked && document.getElementById('radio-choice-v-2d').checked) { 
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
      document.getElementById("check").style.backgroundPosition = "-695px -181px";
      $("#responseText2").show();
    }


  }