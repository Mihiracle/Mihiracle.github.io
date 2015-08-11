

function logResponse() { 
	var response = $("#textbox").mathquill('latex')
  	response = response.replace(/\\/g, "");
  	console.log(response); 
  	if (response === "20"){ 
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
    if (response === "20") { 
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
      document.getElementById("t6").style.backgroundColor = "white"; 
      $("#responseText2").hide();
      $("#responseText3").hide();
    }
    else if (tries === 2 && response !== "20") { 
      tries = tries - 1; 
      $("#responseText2").show();
      document.getElementById("check").style.backgroundPosition = "-1741px -151px";
      document.getElementById("w283").innerHTML = "Tries left: 1"
      document.getElementById("textbox").style.backgroundColor = "yellow"; 
      console.log("wrong"); 
    }
    else if (tries < 2 && response !== "20") { 
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
      $("span.textarea").text("20");
      $("span.textarea").show(); 
      $("span.ui-btn-inner").show(); 

    }


  }

  function stepCheck() { 
     
    var r2 = $("#t6").mathquill('latex'); 
    r2 = r2.replace(/\\/g, "");
    console.log(r2); 
    if (r2 === "20") { 
        $("#w300").hide(); 
        $("#w309").hide();
        $("#mainsteps").hide(); 
        $("#maincheck").hide(); 
        $("#mainhint").hide();
        $("span.textarea").val(""); 
        $("span.textarea").text("20"); 
        document.getElementById("w671").innerHTML = "Score: 5 / 5"
        $("#responseText").show(); 
        document.getElementById("check").style.backgroundPosition = "-1797px -151px"; 
        $("#w692").show(); 
        document.getElementById("textbox").style.backgroundColor = "white"; 
      document.getElementById("t6").style.backgroundColor = "white"; 
      $("#responseText2").hide();
      $("#responseText3").hide();
    }
    else if (tries === 2 && r2 !== "20") { 
      tries = tries - 1; 
      $("#responseText2").show();
      document.getElementById("check").style.backgroundPosition = "-1741px -151px";
      document.getElementById("w283").innerHTML = "Tries left: 1" 
      document.getElementById("t6").style.backgroundColor = "yellow"; 
      console.log("wrong"); 
    }
    else if (tries < 2 && r2 !== "20") { 
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
      $("span.textarea").text("20");
      $("span.textarea").show(); 
      $("span.ui-btn-inner").show(); 

    }


  }

  



  function showStepOne() { 
    $("#responseText3").hide();
    $("#responseText2").hide();
    $("#responseText3").hide();
    $("#w300").show("slow"); 
    $("#w309").show("slow"); 
    $("#table1").show("slow"); 
  }




  function stepOneResponse() { 
    var r1 = $("#t1").mathquill('latex'); 
    var r2 = $("#t2").mathquill('latex'); 
    console.log(r1); 
    console.log(r2); 
    r1 = r1.replace(/\\/g, ""); 
    r2 = r2.replace(/\\/g, ""); 
    if (r1 === "5" && r2 === "5") { 
        console.log("you got it right");
        $("#incorrect1").hide();  
        $("#table2").show("slow"); 
        $("#check1").hide(); 
        $("#hint1").hide(); 
        $("#correct1").show("slow"); 
        $("#correct1").hide("slow"); 
        $("#sd1").show(); 
        document.getElementById("t1").style.backgroundColor = "white";
      document.getElementById("t2").style.backgroundColor = "white";
    }
    else { 
      console.log("wrong"); 
      $("#incorrect1").show("slow"); 
      document.getElementById("t1").style.backgroundColor = "yellow";
      document.getElementById("t2").style.backgroundColor = "yellow";
    }

  }

  function stepTwoResponse() { 
    var r1 = $("#t3").mathquill('latex'); 
    console.log(r1); 
    r1 = r1.replace(/\\/g, ""); 
    if (r1 === "-40") { 
      console.log("correct"); 
      $("#incorrect2").hide();
      $("#table3").show("slow"); 
      $("#check2").hide(); 
      $("#hint2").hide();
      $("#correct2").show("slow"); 
      $("#correct2").hide("slow"); 
      $("#sd2").show();  
      document.getElementById("t3").style.backgroundColor = "white";
    }
    else { 
      console.log("wrong"); 
      $("#incorrect2").show("slow");
      document.getElementById("t3").style.backgroundColor = "yellow";
    }

  }

  function stepThreeResponse() { 
    var r1 = $("#t4").mathquill('latex'); 
    var r2 = $("#t5").mathquill('latex'); 
    console.log(r1); 
    console.log(r2); 
    r1 = r1.replace(/\\/g, ""); 
    r2 = r2.replace(/\\/g, ""); 
    if (r1 === "-2" && r2 === "-2") { 
        console.log("you got it right"); 
        $("#incorrect3").hide();
        $("#table4").show("slow"); 
        $("#check3").hide(); 
        $("#hint3").hide();  
        $("#correct3").show("slow"); 
        $("#correct3").hide("slow");
        $("#sd3").show(); 
        document.getElementById("t4").style.backgroundColor = "white";
      document.getElementById("t5").style.backgroundColor = "white";
    }
    else { 
      console.log("wrong");
      $("#incorrect3").show("slow"); 
      document.getElementById("t4").style.backgroundColor = "yellow";
      document.getElementById("t5").style.backgroundColor = "yellow";
    }

  }

  


