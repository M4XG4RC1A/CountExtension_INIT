document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("Btn").addEventListener('click',onclick,false)
    function onclick(){
        chrome.tabs.query({currentWindow: true, active: true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,document.getElementById("Search").value,setCount);
        })
    }

    function setCount(res) {
        const div =document.createElement('div')
        div.textContent = "{{res.count}}";
        document.body.appendChild(div)
    }
},false)