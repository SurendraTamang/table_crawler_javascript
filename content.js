console.log("The content js is created!")
/* On getting the message from popup js where request is  the the message send from popup js 
This chrome is going to listen the message
function has started
*/
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request)
        crawling_start(request)
      
    })
/* I am using the xpath for crawling the table data 
the document.evaluate is used. */
function crawling_start(xpath){
    let input = xpath
let xpath_input_id = "//table[@id='"+input+"']"
let xpath_input_class = "//table[@class='"+input+"']"
let xpath_expression = xpath_input_id+"//tr"+"|"+xpath_input_class+"//tr"
let xpath_result = document.evaluate(xpath_expression,document, null, XPathResult.ANY_TYPE, null)
// I am iterating the each list of the xpath result of tr
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
}
