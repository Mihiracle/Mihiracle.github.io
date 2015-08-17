window.onload = function() {



var cssPath = "assignmentpage.css";
if (navigator.platform == "iPhone") { 
    cssPath = "assignmentpage2.css";
} 

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);
}

