console.log("The content js is created!")
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request)
        let result = crawling_start(request)
        sendResponse(result)
      
    })
function crawling_start(xpath){
    let input = xpath
let xpath_input = "//table[@id='"+input+"']"
let xpath_expression = xpath_input+"//tr";
let xpath_result = document.evaluate(xpath_expression,document, null, XPathResult.ANY_TYPE, null)

var thisHeading = xpath_result.iterateNext(); 
var alertText = [];
var data_list = [];
// adding in the list
while (thisHeading) {
  alertText.push (thisHeading.textContent)
  thisHeading = xpath_result.iterateNext();
}
console.log(alertText)
for (i = 0; i < alertText.length; i++){
data = alertText[i].trim().split("\n")
data_list.push(data)
}
//contains all the list of data
console.log(data_list)
//creating the list for putting objects
details_list = []
// creating an object

for (i = 1; i < data_list.length;i++){
    details = {

    }
    for (j = 0; j<data_list[i].length;j++){
        details[data_list[0][j]] = data_list[i][j]
    }
    console.log(details)
    details_list.push(details)
}
console.log(details_list)
return details_list;
}
