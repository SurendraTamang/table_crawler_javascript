console.log("The browser action is working!");

document.getElementById("xpath_submit").onclick = sendMessage;

function sendMessage(){
let msg = document.getElementById("x_path_input").value;
    console.log(msg)
params = {active: true, currentWindow: true}
    chrome.tabs.query(params, send);
    function send(tabs) {
        
        chrome.tabs.sendMessage(tabs[0].id, msg,resp)
        
        function resp(response){
            console.log(response);
            var obj = {data:response};
var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

var a = document.createElement('a');
a.href = 'data:' + data;
a.download = 'data.json';
a.innerHTML = 'download JSON';

var container = document.getElementById('get_data');
container.appendChild(a);
        }
        }
    

}