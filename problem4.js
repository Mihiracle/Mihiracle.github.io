window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}


function logResponse() { 
	var response = $("#textbox").mathquill('latex')
  	response = response.replace(/\\/g, "");
  	console.log(response); 
  	if (response === "26"){ 
  		console.log("You got it right!"); 
  	}
  	else { 
  		console.log("You got it wrong :("); 
  	}
  }

  var tries = 2;

  function mainCheck() { 
     
    var response = $("#textbox").mathquill('latex');
    response = response.replace(/\\/g, "");
    console.log(response); 
    if (response === "26") { 
        $("#w300").hide(); 
        $("#w309").hide();
        $("#mainsteps").hide(); 
        $("#maincheck").hide(); 
        $("#mainhint").hide(); 
        document.getElementById("w671").innerHTML = "Score: 5 / 5"
        $("#responseText").show(); 
        document.getElementById("check").style.backgroundPosition = "-1797px -151px"; 
        $("#w692").show(); 
        document.getElementById("textbox").style.backgroundColor = "white"; 
      $("#responseText2").hide();
      $("#responseText3").hide();
    }
    else if (tries === 2 && response !== "26") { 
      tries = tries - 1; 
      $("#responseText2").show();
      document.getElementById("check").style.backgroundPosition = "-1741px -151px";
      document.getElementById("w283").innerHTML = "Tries left: 1"
      document.getElementById("textbox").style.backgroundColor = "yellow"; 
      console.log("wrong"); 
    }
    else if (tries < 2 && response !== "26") { 
      tries = tries - 1; 
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
      $('span').hide();
      $("var").hide(); 
      $("span.textarea").text("26");
      $("span.textarea").show(); 
      $("span.ui-btn-inner").show(); 

    }


  }
