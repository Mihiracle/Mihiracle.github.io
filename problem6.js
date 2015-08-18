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
      $("#responseText3").hide();
    }


  }


  function showAnswer() { 
    $('#checkbox-v-2a').prop('checked', false).checkboxradio('refresh');
    $('#checkbox-v-2b').prop('checked', false).checkboxradio('refresh');
    $('#checkbox-v-2c').prop('checked', true).checkboxradio('refresh');
    $('#checkbox-v-2d').prop('checked', true).checkboxradio('refresh');
    $('#checkbox-v-2e').prop('checked', false).checkboxradio('refresh');
    document.getElementById("check").style.backgroundPosition = "-1741px -151px";
    $("#responseText3").show();
    $("#w692").show();
    $("#mainsteps").hide(); 
    $("#maincheck").hide(); 
    $("#mainhint").hide();
    $("#responseText2").hide(); 

  }