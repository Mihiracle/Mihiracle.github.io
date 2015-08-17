window.onload = function() {



var cssPath = "mainpage2.css";
if (navigator.platform == "iPhone") { 
    cssPath = "mainpage2.css";
} 

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);
}

