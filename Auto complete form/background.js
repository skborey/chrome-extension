// background.js

//Sample message passing
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		var dt2 = new Date();
		var hh2 = dt.getHours();
		if (request.open_new_tap == "PREVENT_MEDIA_WEB" && hh2 >= 22 && hh2 < 1) {
			//close current tap
			chrome.tabs.remove(sender.tab.id);
		}
	});