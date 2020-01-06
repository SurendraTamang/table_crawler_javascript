

document.getElementById("xpath_submit").onclick = sendMessage;

function sendMessage(){
let msg = document.getElementById("x_path_input").value;
let begin_sheet = document.getElementById("begin").value;
let sheet_id = document.getElementById("sheet_id").value;
let message = {id:msg,begin:begin_sheet,sheet:sheet_id};
params = {active: true, currentWindow: true}
    chrome.tabs.query(params, send);
    function send(tabs) {
        
        chrome.tabs.sendMessage(tabs[0].id, message,resp)
        
        function resp(response){
            console.log(response);
            var obj = {data:response};
var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
// Created to JSON file
var a = document.createElement('a');
a.href = 'data:' + data;
a.download = 'data.json';
a.innerHTML = 'download JSON';

var container = document.getElementById('get_data');
container.appendChild(a);
        }
        }
    

}