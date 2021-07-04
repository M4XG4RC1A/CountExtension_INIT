
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
    const re = new RegExp(request,'gi');
    const matches = document.documentElement.innerHTML.match(re);
    alert("Count of "+request+": "+matches.length+" Matches");
})