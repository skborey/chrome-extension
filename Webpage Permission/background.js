// background.js

//execute redirect
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse)
{
    if(request.open_new_tap == "open_new_tap")
    {
      	//close current tap
    		chrome.tabs.remove(sender.tab.id);

      	//create new tap in incogniton mode
			  chrome.windows.create(
        {
		      	"url": "https://"+ request.website +"/",
		    	  "focused": true,
		    	   "incognito": true
			  }, function (window) {});     		  		
    }
});