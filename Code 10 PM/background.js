// background.js
var alarmName = "code10pm";
var dt = new Date();
var hh = dt.getHours();
var mm = dt.getMinutes();

function code10pm() {

	chrome.tabs.getAllInWindow(null, function (tabs) {
		for (var i = 0; i < tabs.length; i++) {
			chrome.tabs.remove(tabs[i].id);
		}
	});

	chrome.windows.create(
		{
			"url": "https://ssli.ebayimg.com/images/g/x-YAAOSw5OpZuXLY/s-l640.jpg",
			"focused": true,
			"incognito": true
		}, function (window) { });

	var getAlarm = chrome.alarms.get(alarmName);
	getAlarm.then(function () {
		var clearAlarm = chrome.alarms.clear(alarmName);
		clearAlarm.then(function (wasCleared) {
			console.log("Alarm was clear : " + wasCleared);
		});
	});
}

console.log("now " + hh + "hh " + mm + "mm");
if (hh >= 22) {
	console.log("- event dose becasue it is over 22");
	code10pm();
}
else {
	//caluate how many minutes until 22.00
	var hh_left = 21 - hh;
	var mm_left = hh_left * 60 + (60 - mm);
	console.log("10 pm : " + hh_left + "h + 60 - " + mm + "mm = " + mm_left + "mm left");
	console.log("create event alarm in " + mm_left + "mm");

	//set event
	chrome.alarms.create(alarmName, {
		delayInMinutes: mm_left
	});
}

chrome.alarms.onAlarm.addListener(function (alarmName) {
	console.log("- event dose by alarm");
	code10pm();
});

//close all prevented web during Code10PM
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		var dt2 = new Date();
		var hh2 = dt.getHours();
		if (request.open_new_tap == "PREVENT_MEDIA_WEB" && hh2 >= 22 && hh2 < 1) {
			//close current tap
			chrome.tabs.remove(sender.tab.id);
		}
	});