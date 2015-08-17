window.onload = function() {



var cssPath = "problem1.css";
if (navigator.platform == "iPhone") { 
    cssPath = "problem2phone.css";
} 

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);
}


function logResponse() { 
	var response = $("#textbox").mathquill('latex')
  	response = response.replace(/\\/g, "");
  	console.log(response); 
  	if (response === "y=6x-51"){ 
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
    if (response === "y=6x-51") { 
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
    else if (tries === 2 && response !== "y=6x-51") { 
      tries = tries - 1; 
      $("#responseText2").show();
      document.getElementById("check").style.backgroundPosition = "-1741px -151px";
      document.getElementById("w283").innerHTML = "Tries left: 1"
      document.getElementById("textbox").style.backgroundColor = "yellow"; 
      console.log("wrong"); 
    }
    else if (tries < 2 && response !== "y=6x-51") { 
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
      $("span.textarea").text("y=6x-51");
      $("span.textarea").show(); 
      $("span.ui-btn-inner").show(); 

    }


  }
