  function mainCheck() { 
    if (document.getElementById('checkbox-v-2c').checked && document.getElementById('checkbox-v-2d').checked && 
        !document.getElementById('checkbox-v-2a').checked && !document.getElementById('checkbox-v-2b').checked && 
        !document.getElementById('checkbox-v-2e').checked) { 
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
      document.getElementById("check").style.backgroundPosition = "-1741px -151px";
      $("#responseText2").show();
    }


  }


  function showAnswer() { 
    document.getElementById('checkbox-v-2c').checked = true; 
    document.getElementById('checkbox-v-2d').checked = true; 
    document.getElementById("check").style.backgroundPosition = "-1741px -151px";
    $("#responseText2").show();
    $("#w692").show();
    $("#mainsteps").hide(); 
    $("#maincheck").hide(); 
    $("#mainhint").hide(); 

  }