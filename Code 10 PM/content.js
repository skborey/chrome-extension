//content.js

if (document.location.host == 'www.facebook.com') {
	//sent message to background.js			
	chrome.runtime.sendMessage({
		open_new_tap: "PREVENT_MEDIA_WEB", website: document.location.host
	});
}
else {
	//other website do nothing
}
