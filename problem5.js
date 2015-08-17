window.onload = function() {



var cssPath = "problem1.css";
if (navigator.platform == "iPhone") { 
    cssPath = "problem5phone.css";
} 

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);
}

  function mainCheck() { 
        $("#w300").hide(); 
        $("#w309").hide();
        $("#mainsteps").hide(); 
        $("#maincheck").hide(); 
        $("#mainhint").hide(); 
        $("#responseText").show(); 
        document.getElementById("check").style.backgroundPosition = "-779px -181px"; 
        $("#w692").show(); 
        document.getElementById("textbox").style.backgroundColor = "lightgrey"; 
      $("#responseText2").hide();
      $("#responseText3").hide();
  }


  function showAnswer() { 
    $('span').hide();
      $("span.textarea").text("Yes, the stack has the same volume. According to Cavalieri's principle, the stack still occupies the same volume since it still has the same height and the same cross-sectional area at each height.");
      $("span.textarea").show(); 
      $("span.ui-btn-inner").show(); 
      document.getElementById("textbox").style.backgroundColor = "lightgrey"; 
      document.getElementById("check").style.backgroundPosition = "-695px -181px"; 
      $("#responseText2").show();
     $("#responseText").hide();
             $("#w692").show(); 
                     $("#maincheck").hide(); 
        $("#mainhint").hide(); 

  }
