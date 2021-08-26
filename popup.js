// var app = chrome.runtime.getBackgroundPage();

function hello() {
    chrome.tabs.executeScript({
                              file: 'alert.js'
                              });
}

/*document.getElementById('clickme').addEventListener('click', hello);




document.getElementById("b").value="aa";
document.getElementById("b").addEventListener("click",function(){
                                              this.value="aaa";
                                              chrome.tabs.getSelected(null, function(tab) {
                                                                      chrome.tabs.sendMessage(tab.id, {request.redoReplaceText: ture});
                                                                      });
                                              });*/
