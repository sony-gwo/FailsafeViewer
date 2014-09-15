
//Main
window.onload = function(){
    var s = document.createElement("script"); 
    s.src = chrome.extension.getURL("iQInfo.js");
    document.getElementsByTagName("head")[0].appendChild(s);
    console.log("FailsafeViewer Chrome Extension initialized");
}
