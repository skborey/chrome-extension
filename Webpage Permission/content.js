//content.js

if(document.location.host == 'www.facebook.com' ||
   document.location.host == 'mail.google.com')
{
	//sent message to background.js			
	chrome.runtime.sendMessage({
	  	open_new_tap : "open_new_tap", website : document.location.host
	});

	alert("If you are not the owner, please use the Incognito Mode.\n(Ctrl + Shift + N)");	
}
else
{ 
	//other website do nothing
}
