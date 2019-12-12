console.log("The browser action is working!");

document.getElementById("xpath_submit").onclick = sendMessage;

function sendMessage(){
let msg = document.getElementById("x_path_input").value;
    console.log(msg)
params = {active: true, currentWindow: true}
    chrome.tabs.query(params, send);
    function send(tabs) {
        
        chrome.tabs.sendMessage(tabs[0].id, msg)
        }

}