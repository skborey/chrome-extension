//popup.js

var test1 = document.getElementById("ivta-auto");
if (test1) {
    test1.onclick = function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "ivta-test-register-f2" }, function(response) {
                // alert(response.farewell);
            });
        });
    }
}

var test2 = document.getElementById("ivta-test-register")
if (test2) {

    test2.onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "ivta-test-register" }, function(response) {
                // alert(response.farewell);
            });
        });
    }
}
